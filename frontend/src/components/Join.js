import { Badge, Button, Card, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import {
  generateRandomID,
  generateRandomName,
  generateRandomAvator,
} from "./helpers";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { colorPalette } from "../assets/colorPalette";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "0",
    width: "84vw",
    height: "80vh",
    margin: "8%",
    borderRadius: "16px",
    background: colorPalette.blueButton,
  },
  accroot: {
    width: "100%",
  },
  accheading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    borderRadius: "40px",
    fontFamily: "DailyHours",
    fontSize: "24px",
  },
  acordion: {
    borderRadius: "20px !important",
    marginBottom: "4px",
    marginTop: "4px",
    background: "#efefef"
  },
  card: {
    margin: "12px",
    background: "#fefefe",
    height: "180px",
    borderRadius: "20px",
    alignContent: "center",
    alignItems: "center",
  },
}));

const getSampleData = (size = 100) => {
  let data = {
    work: {},
    study: {},
  };
  for (let i = 0; i < size; i++) {
    let school = ['UToronto', 'QueensU', 'UOttawa', 'UWaterloo', 'McGill'][Math.floor(Math.random()*5)]
    let course = ['CS', 'Engineering', 'Math', 'Medical', 'History'][Math.floor(Math.random()*5)]
    let courseCode = ['321', '342', '543', '4234', '3245'][Math.floor(Math.random()*5)]
    let courseType = ['TUT01', 'LEC01', 'LAB', 'TUT03', 'LEC02'][Math.floor(Math.random()*5)]
    let d = {
      type: Math.random() < 0.5 ? "s" : "w",
      title: `Test Room ${Math.floor(Math.random() * 9997 + 1000)}`,
      joinList: [],
      topic: `${school}-${course}-${courseCode}-${courseType}`
    };
    for (let k = 0; k < Math.random() * 8 + 2; k++) {
      d.joinList.push({
        user: generateRandomName(),
        uid: generateRandomID(),
      });
    }
    if (d.type == "s") data.study[generateRandomID()] = d;
    else data.work[generateRandomID()] = d;
  }
  return data;
};
const sample = getSampleData();

export default function JoinPage() {
  const classes = useStyles();
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(sample);

  return (
    <Paper className={classes.root}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid
          item
          xs={2}
          style={{
            width: "90%",
            maxWidth: "90%",
            fontFamily: "DailyHours",
            fontSize: "32px",
            margin: "0",
            top: "0",
            padding: "0",
          }}
        >
          <h3 style={{ margin: "20px" }}>Find your room here</h3>
        </Grid>
        <Grid item xs={10}>
          <div className={classes.accroot}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className={classes.acordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.accheading}>
                  Study Rooms
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  style={{ maxHeight: "50vh", overflow: "auto" }}
                >
                  {Object.keys(sample.study).map((key, index) => {
                    return (
                      <Grid item xs={2}>
                        <Card className={classes.card}>
                          {generateRandomAvator(sample.study[key].title)}
                          <div style={{ padding: "8px", margin: "auto", width: "100%"}}>
                            <Badge color="primary" variant="dot" style={{ padding: "0", margin: "0" }}>
                              <p style={{ padding: "0", margin: "0" }}>{sample.study[key].title}</p>
                            </Badge>
                            <p style={{ padding: "0", margin: "0", fontSize: "12px", marginTop: "4px" }} > {sample.study[key].joinList.length} people in this room</p>
                            
                          </div>
                          <Button onClick={()=>history.push(`/room/study-${sample.study[key].topic}`)} style={{fontFamily: "DailyHours", margin: "auto"}}>Join</Button>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className={classes.acordion}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.accheading}>
                  Work Rooms
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  container
                  direction="row"
                  justify="space-around"
                  alignItems="center"
                  style={{ maxHeight: "50vh", overflow: "auto" }}
                >
                  {Object.keys(sample.work).map((key, index) => {
                    return (
                      <Grid item xs={2}>
                        <Card className={classes.card}>
                          {generateRandomAvator(sample.work[key].title)}
                          <div style={{ padding: "8px", margin: "auto", width: "100%"}}>
                            <Badge color="primary" variant="dot" style={{ padding: "0", margin: "0" }}>
                              <p style={{ padding: "0", margin: "0" }}>{sample.work[key].title}</p>
                            </Badge>
                            <p style={{ padding: "0", margin: "0", fontSize: "12px", marginTop: "4px" }} > {sample.work[key].joinList.length} people in this room</p>
                            
                          </div>
                          <Button onClick={()=>history.push(`/room/work-${sample.work[key].topic}`)} style={{fontFamily: "DailyHours", margin: "auto"}}>Join</Button>
                        </Card>
                      </Grid>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
