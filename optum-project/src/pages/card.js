import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import image6 from '../images/img7.png';
import Appoin from'./appointment';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image6}
          title="Doctor"
        />
        <CardContent>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating  ({Math.floor(props.value1) })</Typography>
        <Rating name="read-only" value={props.value} readOnly />
        </Box>
          <Typography gutterBottom variant="h5" component="h2">
            Doctor
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>Name :</strong>{props.name} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>Gender :</strong>{props.gender} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>Speciality :</strong>{props.speciality} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>Address :</strong>{props.address} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>City :</strong>{props.city} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>State :</strong>{props.state} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
             <strong>Patients Treated:</strong>{props.utilization} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Appoin/>
      </CardActions>
    </Card>
  );
}
