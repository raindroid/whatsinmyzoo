import logo from "./logo.svg";
import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  createBrowserHistory,
  useRouteMatch,
  useLocation,
  useParams,
} from "react-router-dom";
import { Header } from "./components/Header";
import Zoo from "./components/Zoo";
import Home from "./components/Home";
import { Button } from "@material-ui/core";
import { eventConnect, eventPublish, eventPublishType, eventSetCallback, eventSubscribe } from "./components/eventBroker/eventHandler";
import Webcam from "react-webcam";

function CurrentPath() {
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname;
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <div>
            <Header />
            <Switch>
              <Route exact path="/zoo">
                <Zoo />
              </Route>
              <Route path="/room/:id" children={<Child />}></Route>
              <Route path="/create"></Route>
              <Route path="/settings"></Route>

              <Route path="/test">
                <Test />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <Page404 />
              </Route>
            </Switch>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>Room ID: {id}</h3>
    </div>
  );
}


function About() {
  return <h2>About</h2>;
}

function Page404() {
  return <h2>404</h2>;
}

function compressImage() {

}

function Test() {
  return <div>
    <Button onClick={()=>eventConnect()}>Connect</Button>
    <Button onClick={()=>eventPublish("study/cs", "Hi")}>Publish</Button>
    <Button onClick={()=>eventSubscribe("study/cs")}>Subscribe</Button>
    <AppStreamCam/>
  </div>
}

export default App;

class AppStreamCam extends React.Component {
  constructor(props) {
    super(props);
    this.streamCamVideo= this.streamCamVideo.bind(this)
    this.getMediaStream= this.getMediaStream.bind(this)
    this.getScreenshotBase64= this.getScreenshotBase64.bind(this)
    this.webcamsteam = {};
    this.videorecorder = {};
    this.videoInfo = {};
  }
  async getMediaStream(constraints) {
    return new Promise(function (resolve, reject) {
      if (navigator.mediaDevices
        && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => resolve(stream))
          .catch(err => reject(err));
      } else {
        const getUserMedia = navigator.getUserMedia
        || navigator['webkitGetUserMedia']
        || navigator['mozGetUserMedia']
        || navigator['msGetUserMedia'];
        getUserMedia(
          constraints,
          (stream) => resolve(stream),
          (err) => reject(err)
        );
      }
    });
  }
  getScreenshotBase64(videoEl, scale) {
    scale = scale || 1;

    const canvas = document.createElement("canvas");
    canvas.width = videoEl.clientWidth * scale;
    canvas.height = videoEl.clientHeight * scale;
    canvas.getContext('2d').drawImage(videoEl, 0, 0, canvas.width, canvas.height);

    const image = new Image()
    image.src = canvas.toDataURL("image/jpeg");
    this.videoInfo.image = image;
    eventPublishType("study/cs", 'IMG', image.src)
    // this.forceUpdate()
  }

  streamCamVideo() {
    var constraints = { audio: true, video: { width: 640, height: 480 , frameRate: { ideal: 10, max: 15 }} };
    this.getMediaStream(constraints)
      .then((mediaStream) => {
        var video = document.querySelector("video");

        video.srcObject = mediaStream;
        console.log(video)
        this.videoInfo.video = video
        if ('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
          // The API is supported! 
          const doSomethingWithTheFrame = (now, metadata) => {
            // Do something with the frame.
            console.log(now, metadata);
            // Re-register the callback to be notified about the next frame.
            video.requestVideoFrameCallback(doSomethingWithTheFrame);
            this.getScreenshotBase64(video)
          };
          // Initially register the callback to be notified about the first frame.
          video.requestVideoFrameCallback(doSomethingWithTheFrame);
        } else {
          console.error("requestVideoFrameCallback NOT SUPPORTED")
        }

        video.onloadedmetadata = function(e) {
          video.play();
        };
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.
  }

  setEventCallback = () => {
    eventSetCallback((topic, data) => {
      const image = new Image()
      image.src = data.data
      this.videoInfo.image = image
      console.log("Received an image")
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div>
        <div id="container">
          <video autoPlay={true} id="videoElement" controls></video>
        </div>
        <br/>
        <Button onClick={this.streamCamVideo}>Start streaming</Button>
        <Button onClick={()=>this.getScreenshotBase64(this.videoInfo.video)}>Screenshot</Button>
        {this.videoInfo.image && <img src={this.videoInfo.image.src} />}
        <p>{this.videoInfo.image && this.videoInfo.image.src } </p>
        <Button onClick={this.setEventCallback}>Set connection</Button>
      </div>
    );
  }
}

// class VideoMonitor extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }
