import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import image2 from '../images/img2.png';
import 'fontsource-roboto';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Pressure from '../images/pressure-gauge.png';
import Heartbeat from '../images/heartbeat.png';
import Icon from '@material-ui/core/Icon';
import ScoreIcon from '@material-ui/icons/Score';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',padding: theme.spacing(2),
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
    const [value, setvalue] = React.useState(3.6);

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
        <Paper elevation={3} spacing= {10} className={classes.paper}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography align="center" variant="h4">Real time Monitoring</Typography>
              </Grid>
              <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image2} alt="this is car image" />
                        </Icon>
                    </Grid>
                    <Grid item xs={6}>
              <Grid container >
                  
              <Grid item xs={6}>
              <Icon >
                    <img src={Heartbeat} alt="this is car image" />
                    </Icon>
              </Grid>
              <Grid item className={classes.item} xs={6}>
                <Typography variant="h6"><strong>HeartBeat:</strong> {heart}</Typography>
              </Grid>
              <Grid item xs={6}>
              <Icon >
                            <img src={Pressure} alt="this is car image" />
                        </Icon>
              </Grid>
                       
              <Grid item  className={classes.item} xs={6}>
                <Typography variant="h6"><strong>Pressure:</strong> {pressure_l} - {pressure_h}</Typography>
              </Grid>
                
              <Grid item  className={classes.item} xs={12}>
                <Typography variant="h6"><strong>Health Score:</strong> {value}</Typography>
              </Grid>
            </Grid>
            
             </Grid>   
            </Grid>
        </Paper>
    </div>
    )
}