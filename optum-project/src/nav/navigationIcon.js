import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    }
}))

export default function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    
  return (
    <div className={classes.root} >
      <ListItem button key={text}>
        <LocalHospitalIcon/>
        <ListItemText primary={text} />
      </ListItem>
      
        <Typography align="center" variant="h5">{props.text}</Typography>
    </div>
  )
}