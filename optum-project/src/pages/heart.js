
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

export default function App() {
    const classes = useStyles();
    const theme = useTheme();
 
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
                <Typography align="left" variant="subtitle2">80 beats</Typography>
                </Grid>
                <Grid item xs={12}>
                <Typography align="center" variant="h6">Average Blood pressure</Typography>
                </Grid>
                
                <Grid item xs={6}>
                <InvertColorsIcon color="primary"  />
                </Grid>
                
                <Grid item xs={6}>
                <Typography align="left" variant="subtitle2">132</Typography>
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