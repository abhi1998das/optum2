import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}))
export default function Description(props) {
    const classes = useStyles();
    const theme = useTheme();
    
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {10} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h6">{props.description}</Typography>
              </Grid>
              <Grid item xs={12}>
              <Divider />
              </Grid>
              <Grid item xs={12}>
              <Typography align="center" variant="h5">Prediction Result </Typography>
              <Typography align="center" variant="h6">{props.result}</Typography>
              </Grid>
            </Grid>
        </Paper>
    </div>
    )
}