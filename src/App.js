import React from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import About from "./components/About";
import { makeStyles } from "@material-ui/core/styles";
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



export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
   
       
        <Header1></Header1>
        <Header2></Header2>
        <About></About>
    
      
      </Grid>
    </div>
  );
}
