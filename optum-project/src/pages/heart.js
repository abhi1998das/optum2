
import React, { useEffect } from "react";
import Chart from "chart.js";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        float:'right'
      },
      paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          width:'500px',
          height:'500px'
      },
}));

export default function App(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [pressure, setPressure] = React.useState(80);
    const [O, setO] = React.useState(120);
    const [heart, setheart] = React.useState(72);
    useEffect(() => {
      const interval = setInterval(() => {
        setheart(Math.floor( heart-Math.random() * (8 - 4)))
        setheart(Math.floor(Math.random() * (10 - 5) + heart))
        if(heart<40)
        setheart(52)
        if(heart>140)
        setheart(136)

        setPressure(Math.floor( pressure-Math.random() * (5 - 2)))
        setPressure(Math.floor(Math.random() * (10 - 5) + pressure))
        if(pressure<60)
        setPressure(69)
        if(pressure>150)
        setPressure(140)
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    
  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
            
                <Grid item xs={12}>
                <Typography align="center" variant="h5">Vital Stats</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography align="center" variant="h6">Average heart rate</Typography>
                </Grid>
                <Grid item xs={6}>
                <FavoriteIcon align="right" color="secondary"  />
                </Grid>
                
                <Grid item xs={6}>
                <Typography align="left" variant="subtitle2">{heart} beats</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography align="center" variant="h6">Average Blood pressure</Typography>
                </Grid>
                
                <Grid item xs={6}>
                <InvertColorsIcon color="primary"  />
                </Grid>
                
                <Grid item xs={6}>
                <Typography align="left" variant="subtitle2">{pressure}</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography align="center" variant="h6">Oxygen level</Typography>
                </Grid>
                
                <Grid item xs={6}>
                <FavoriteBorderIcon color="secondary"  />
                </Grid>
                
                <Grid item xs={6}>
                <Typography align="left" variant="subtitle2">75 mmHg</Typography>
                </Grid>
        </Grid>
    </div>
  );
}