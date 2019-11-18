import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    textAlign: "center",

    color: theme.palette.text.secondary
  }
}));

const paper2 = {
  height: "33"
};

export default function Header2() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} style={paper2}>
        <div>
          <h3>
            I love working with designing, programming, coding, networking,
            database, framework.
            <br />
            Well in short i can do anything in IT,think me to be your ol jack
            all trade in IT problems.{" "}
          </h3>
          <h3>
            I love working with designing, programming, coding, networking,
            database, framework.
            <br />
            Well in short i can do anything in IT,think me to be your ol jack
            all trade in IT problems.{" "}
          </h3>
          <h3>
            I love working with designing, programming, coding, networking,
            database, framework.
            <br />
            Well in short i can do anything in IT,think me to be your ol jack
            all trade in IT problems.{" "}
          </h3>
        </div>
      </Paper>
      <Paper className={classes.paper} style={paper2}>
        <div>
       <h1>
           INTERESTED ABOUT ME? SCROLL BELOW &#8595;
       </h1>
        </div>
      </Paper>
    </Grid>
  );
}
