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

export default App;
