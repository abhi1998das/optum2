import Typography from '@material-ui/core/Typography';
import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import image2 from '../images/img2.png';
import 'fontsource-roboto';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Pressure from '../images/pressure-gauge.png';
import Heartbeat from '../images/heartbeat.png';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import ScoreIcon from '@material-ui/icons/Score';
import Line from './line';
import Bar from './bar';
import Heart from './heart';
import Doughnut from './dognut';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',padding: theme.spacing(2),
    },root1: {
      maxWidth: 500,
      minWidth: 400,
    },
    title: {
      fontSize: 14
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },paper1: {
      padding: theme.spacing(2),
      textAlign: 'center',
      width:'90%'
  },formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    item:{
        align:"center",
         padding:10,
         align:"left"
    }
}))
export default function TrendPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [heart, setheart] = React.useState(72);
    const [pressure_l, setPressurel] = React.useState(80);
    const [pressure_h, setPressureh] = React.useState(120);
    const [value, setvalue] = React.useState(1);
    
    const handleheartChange = (event) => {
      setheart(event.target.value);
    };
    const handlepressurelChange = (event) => {
      setPressurel(event.target.value);
    };
    const handlepressurehChange = (event) => {
      setPressureh(event.target.value);
    };
    const getRealtimeData=()=>{
                
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            var v=JSON.parse(this.responseText);
            setheart(v['heart'])
            setPressurel(v['pressure'][0])
            setPressureh(v['pressure'][1])
        }
        });

        xhr.open("GET", "http://127.0.0.1:5000/?type=health");

        xhr.send();
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {1} className={classes.paper}>
        <Grid container spacing={10} className={classes.paper1}>
                
                <Grid item xs={12}>
              <Typography align="center"  variant="h4">Real time Monitoring</Typography>
                </Grid>
                <Grid item xs={6}>
                  
              <Typography align="center"  variant="h5">Steps Walked</Typography>
              <Bar/>
                </Grid>
                
              
                <Grid item xs={6}><Typography align="center"  variant="h5">Calories</Typography><Line/>
                </Grid>
                <Grid item xs={6}><Typography align="center"  variant="h5">Sleep Pattern</Typography><Doughnut/>
                </Grid>
                <Grid item xs={6}><Heart heart={heart}/>
                </Grid>
                
                <Grid align="center" item xs={12}>
                <Card className={classes.root1}>
      <CardContent>
        <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              You are graded from 0 to 5 (5 being the best )
            </Typography>
            <Typography variant="h5" color="primary" component="h2">
              Health Score
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              you are above 80% candidates
            </Typography>
            <Typography style={{ color: green[500] }} variant="h4" component="p">
              3.6
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{if(value==1)
                                                  setvalue(0)
                                                  else
                                                  setvalue(1)
                                                }}
            >Learn More</Button>
          </CardActions>
          
          {value==0&&<Typography style={{ color: green[500] }} variant="subtitle1" component="p">
            Congrats, you have been eating healthy food for sometime. You should pay a little more attention to daily exercise.
          </Typography>}
        </Card>
                </Grid>
                </Grid>
        </Paper>
    </div>
    )
}