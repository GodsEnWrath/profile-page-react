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

export default function About() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <div>
          <h1>More About me</h1>
        </div>
      </Paper>
      <Paper className={classes.paper}>
        <div>
          <p>
            Carriage quitting securing be appetite it declared. High eyes kept
            so busy feel call in. Would day nor ask walls known. But preserved
            advantage are but and certainty earnestly enjoyment. Passage weather
            as up am exposed. And natural related man subject. Eagerness get
            situation his was delighted.
          </p>

          <p>
            Agreed joy vanity regret met may ladies oppose who. Mile fail as
            left as hard eyes. Meet made call in mean four year it to. Prospect
            so branched wondered sensible of up. For gay consisted resolving
            pronounce sportsman saw discovery not. Northward or household as
            conveying we earnestly believing. No in up contrasted discretion
            inhabiting excellence. Entreaties we collecting unpleasant at
            everything conviction.
          </p>

          <p>
            It allowance prevailed enjoyment in it. Calling observe for who
            pressed raising his. Can connection instrument astonished unaffected
            his motionless preference. Announcing say boy precaution unaffected
            difficulty alteration him. Above be would at so going heard. Engaged
            at village at am equally proceed. Settle nay length almost ham
            direct extent. Agreement for listening remainder get attention law
            acuteness day. Now whatever surprise resolved elegance indulged own
            way outlived.
          </p>

          <p>
            Forfeited you engrossed but gay sometimes explained. Another as
            studied it to evident. Merry sense given he be arise. Conduct at an
            replied removal an amongst. Remaining determine few her two
            cordially admitting old. Sometimes strangers his ourselves her
            depending you boy. Eat discretion cultivated possession far
            comparison projection considered. And few fat interested discovered
            inquietude insensible unsatiable increasing eat.
          </p>
        </div>
      </Paper>
    </Grid>
  );
}
