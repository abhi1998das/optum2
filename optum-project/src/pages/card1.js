import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image6 from '../images/img7.png';

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
 const arr=['NAME','ADDRESS','CITY','PHONE','AMOUNT COVERED','AMOUNT UNCOVERED','REVENUE','COVERED ENCOUNTERS','UNCOVERED ENCOUNTERS','COVERED MEDICATIONS','UNCOVERED MEDICATIONS','COVERED PROCEDURES','UNCOVERED PROCEDURES','COVERED IMMUNIZATIONS','UNCOVERED IMMUNIZATIONS','UNIQUE CUSTOMERS','Quality of Life Scores AVG','MEMBER_MONTHS']
 const elem=()=>
 {
     var val=[]
     for(var i=0;i<arr.length;i++)
     val.push(
       <Typography variant="body2" color="textSecondary" component="p">
          <strong>{arr[i]}:</strong>{props.data[i]} 
       </Typography>)
       return val
 } 
 return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image6}
          title="Doctor"
        />
        <Typography gutterBottom variant="h5" component="h2">
            Organization
          </Typography>
        <CardContent>
          
          {elem()}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Schedule a call
        </Button>
      </CardActions>
    </Card>
  );
}