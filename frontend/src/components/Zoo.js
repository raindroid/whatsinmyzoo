import { Button, Grid, makeStyles } from "@material-ui/core";
import React, { Component, useEffect, useRef, useState } from "react";
import { colorPalette } from "../assets/colorPalette";
import { ReactComponent as Ground } from "../assets/mainpage/Group 92.svg";
import { getAccount } from "./account";
import Lottie from "react-lottie";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: colorPalette.mainBackground,
    width: "100%",
    height: "120vh",
    minHeight: "100%",
  },
  zootitle: {
    color: "black !important",
    fontSize: "32px",
    fontFamily: "DailyHours",
    borderRadius: "0",
    padding: "0",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    background: colorPalette.yellowButton,
    fontStretch: "expanded",
  },
  groundContainer: {
    position: "absolute",
    top: "20vh",
    left: 0,
    width: "100vw",
    maxHeight: "32vh",
    zIndex: "1",
  },
  ground: {
    maxHeight: "36vh",
    maxWidth: "72vw",
  },
  canvasContainer: {
    position: "absolute",
    top: "20vh",
    left: 0,
    maxWidth: "100vw",
    maxHeight: "32vh",
    zIndex: "10",
  },
  buttonContainer: {
    position: "absolute",
    top: "60vh",
    left: "0",
    width: "100vw",
    maxWidth: "100vw",
  },
  button: {
    padding: "0px",
    paddingTop: "4px",
    paddingLeft: "6vw",
    paddingRight: "6vw",
    margin: "0",
    marginLeft: "20px",
    marginRight: "20px",
    backgroundColor: `${colorPalette.blueButton}`,
    borderRadius: "30px",
    fontFamily: "DailyHours",
    fontSize: "24px",
    border: `1px solid ${colorPalette.blueButton}`,
    "&:hover": {
      backgroundColor: `${colorPalette.mainBackground}`,
      color: "#FFF",
      border: "1px solid black",
    },
  },
}));

const animal_list = [
  require("../assets/animations/bird.json"),
  require("../assets/animations/rabbit.json"),
  require("../assets/animations/deer.json"),
  require("../assets/animations/fox.json"),
  require("../assets/animations/giraffe.json"),
  require("../assets/animations/lion.json"),
  require("../assets/animations/panda.json"),
  require("../assets/animations/elephant.json"),
];

// const

export function Animal(params) {
  const [stop, setStop] = useState(true);
  const [pause, setPause] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: params.animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    let timer = {};
    const startTimer = setTimeout(() => {
      console.log(`This will run after ${params.delay} ms!`);
      setStop(false);
      const pauseTimer = setTimeout(() => {
        setPause(true);
      }, 4000);
      timer.pauseTimer = pauseTimer;
    }, params.delay);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer.pauseTimer);
    };
  }, []);

  return (
    <Lottie
      options={defaultOptions}
      height={120 + 100 * params.shrink}
      width={120 + 100 * params.shrink}
      isStopped={stop}
      isPaused={pause}
    />
  );
}

const getAnimals = () => {
  let styles = [];
  let offsets = [];
  animal_list.forEach((e, i) => {
    let randomStyles = {};
    if (Math.random() > 0.5) {
      randomStyles.WebkitTransform = "scaleX(-1)";
      randomStyles.transform = "scaleX(-1)";
    }
    const center = [-120, 0];
    const randomXOffset = Math.random();
    const randomYOffset = Math.random() * (1 - randomXOffset);
    let xOffset =
      (Math.random() < 0.5 ? -1 : 1) * randomXOffset * 280 + center[0];
    let yOffset =
      (Math.random() < 0.5 ? -1 : 1) * randomYOffset * 80 + center[1];
    randomStyles.xOffset = xOffset;
    randomStyles.yOffset = yOffset;

    randomStyles.marginLeft = `${xOffset}px`;
    randomStyles.marginTop = `${yOffset}px`;

    // randomStyles.size =
    //   ((Math.random() + 2) * i * i) /
    //   animal_list.length /
    //   animal_list.length /
    //   2.8;
    styles.push(randomStyles);
  });

  styles = styles.sort((a, b) => (a.yOffset < b.yOffset ? -1 : 1));

  return animal_list.map((e, i) => {
    return (
      <div
        style={{
          position: "absolute",
          zIndex: `${i} + 20`,
          ...styles[i],
        }}
      >
        <Animal
          key={i}
          animation={e}
          delay={(Math.random() + 1) * 600 * i}
          shrink={(styles[i].yOffset + 100) / 300}
        />
      </div>
    );
  });
};

export default function Zoo(params) {
  const classes = useStyles();
  const history = useHistory();
  const account = getAccount();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid item>
          <Button disabled className={classes.zootitle}>
            {account.user}'s' Zoo
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.canvasContainer}
          >
            <Grid item alignItems="center">
              {getAnimals()}
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.groundContainer}
          >
            <Grid item alignItems="center">
              <Ground className={classes.ground} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={2}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.buttonContainer}
        >
          <Grid item>
            <Button
              className={classes.button}
              onClick={() => history.push("/join")}
            >
              Join a Room
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              onClick={() => history.push("/create")}
            >
              Create a Room
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
