import React, { Component } from "react";
import { ReactComponent as Gori } from "../assets/Login_page_svg/Group 3.svg";
import { ReactComponent as Lion } from "../assets/Login_page_svg/Group 4.svg";
import { ReactComponent as Fox } from "../assets/Login_page_svg/Group 6.svg";
import { ReactComponent as Pig } from "../assets/Login_page_svg/Group 10.svg";
import { ReactComponent as Gira } from "../assets/Login_page_svg/Group 11.svg";
import { ReactComponent as Elep } from "../assets/Login_page_svg/Group 18.svg";
import { ReactComponent as Panda } from "../assets/Login_page_svg/Group 69.svg";
import { ReactComponent as Husky } from "../assets/Login_page_svg/Group 71.svg";
import { ReactComponent as TitleImg } from "..//assets/Login_page_svg/What’s in My Zoo.svg";
import { ReactComponent as LoginBtn } from "..//assets/Login_page_svg/login-btn.svg";
import { ReactComponent as LoginIcon } from "../assets/Login_page_svg/sign-in-alt-solid.svg";
import { ReactComponent as DevInfo } from "../assets/Login_page_svg/developers.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { LoginDialog } from "./account/LoginDialog";
import { useHistory } from "react-router-dom";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomOffset = (x = 0, y = 0) => {
  const posYLimit = [-80, 100];
  const posXLimit = [-20, 80];
  const sizeLimit = [120, 180];
  const rotateLimit = [-20, 20];
  const style = {
    width: `${getRandomInt(sizeLimit[0], sizeLimit[1])}px`,
    marginTop: `${getRandomInt(posYLimit[0], posYLimit[1]) + y}px`,
    marginLeft: `${getRandomInt(posXLimit[0], posXLimit[1]) + x}px`,
    transform: `rotate(${getRandomInt(rotateLimit[0], rotateLimit[1])}deg)`,
  };
  return style;
};

const animal_images = [
  <Panda style={getRandomOffset()} />,
  <Gori style={getRandomOffset()} />,
  <Lion style={getRandomOffset()} />,
  <Fox style={getRandomOffset()} />,
  <Gira style={getRandomOffset()} />,
  <Pig style={getRandomOffset()} />,
  <Elep style={getRandomOffset()} />,
  <Husky style={getRandomOffset()} />,
];

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    background: "#f2d86b",
  },

  mainGrid: {
    height: "100vh",
    width: "100vw",
  },

  subGrid: {
    maxWidth: "100vw",
  },
  typography: {
    padding: theme.spacing(2),
  },
  animalRoot: {},
  welcomeBtn: {
    borderRadius: "42px",
    padding: "0",
    paddingTop: "4px",
    paddingLeft: "40px",
    paddingRight: "40px",
    background: "#fdf2c5",
    color: "#ffad35",
    fontFamily: "DailyHours",
    fontSize: "24px",
    "&:hover": {
      backgroundColor: "#f2d86b",
      color: "#FFF",
      border: "1px solid black",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  var animal_id = 0;
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid
          item
          xs={4}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.subGrid}
        >
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
        </Grid>

        <Grid
          item
          xs={2}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.subGrid}
        >
          <TitleImg item xs={10} />
        </Grid>

        <Grid
          item
          xs={1}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.subGrid}
        >
            <LoginDialog callback={()=>{history.push('/zoo')}}/>
        </Grid>

        <Grid
          item
          xs={3}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.subGrid}
        >
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
          <Grid item>{animal_images[animal_id++]}</Grid>
        </Grid>

      </Grid>
        <DevInfo style={{
            position: "fixed",
            bottom: "10px",
            width: "100%"
        }}/>
    </div>
  );
}
