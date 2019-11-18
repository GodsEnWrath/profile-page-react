import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fb from '../assets/img/facebook.png'
import Git from '../assets/img/github-sign.png'
import Ig from '../assets/img/instagram-logo.png'

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
const paper1 = {
  height: "95%"
};

export default function Header1() {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper} style={paper1}>
        <div>
          <Header></Header>
          <a href="https://drive.google.com/file/d/0B_sI6yNQuUfhRGJKYnY4TDNNdy1JcVNkN3hMeVh6M3BXVDJN/view?usp=sharing">
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Download CV
            </Button>
          </a>
          <br></br>
            <br></br>
            <div>
            <a href="https://www.facebook.com/yazid.alfarisi">
            <img alt="fb" width="5%" className="App-logo" src={Fb} />
            </a>
            <a href="https://github.com/GodsEnWrath">
            <img alt="Github" width="5%" className="App-logo" src={Git} />
            </a>
            <a href="https://www.instagram.com/888blank888/?hl=en">
            <img alt="IG" width="5%" className="App-logo" src={Ig} />
            </a>
            </div>
        </div>
      </Paper>
    </Grid>
  );
}
