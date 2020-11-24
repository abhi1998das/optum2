import Typography from '@material-ui/core/Typography';
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png';
import image4 from '../images/img4.png';
import image5 from '../images/img5.png';
import image6 from '../images/img6.png';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'fontsource-roboto';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },formControl2: {
      margin: theme.spacing(1),
      minWidth: 400,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    textfield:
    {
      width:'400px'
    },
    griditem:
    {
      marginTop: theme.spacing(3),
      width:'400px'
    }
}))
/**
 * 
 * dictionary={ prediction name, prediction description,parameter array= [ { parametername, changeto,dropdown}]} 
 *  
 */
const code=['10509002', '444814009', '38822007', '43878008', '59621000', '301011002',
    '233678006', '254837009', '55822004', '239872002', '24079001', '44054006',
    '75498004', '239873007', '201834006', '87433001', '195662009', '230265002',
    '36971009', '363406005', '424132000', '88805009', '40275004', '185086009'];
const desc=['Acute bronchitis (disorder)', 'Viral sinusitis (disorder)',
    'Cystitis', 'Streptococcal sore throat (disorder)', 'Hypertension',
    'Escherichia coli urinary tract infection', 'Childhood asthma',
    'Malignant neoplasm of breast (disorder)', 'Hyperlipidemia',
    'Osteoarthritis of hip', 'Atopic dermatitis', 'Diabetes',
    'Acute bacterial sinusitis (disorder)', 'Osteoarthritis of knee',
    'Localized  primary osteoarthritis of the hand',
    'Pulmonary emphysema (disorder)',
    'Acute viral pharyngitis (disorder)',
    "Familial Alzheimer's disease of early onset (disorder)",
    'Sinusitis (disorder)', 'Malignant tumor of colon',
    'Non-small cell carcinoma of lung  TNM stage 1 (disorder)',
    'Chronic congestive heart failure (disorder)',
    'Contact dermatitis', 'Chronic obstructive bronchitis (disorder)'];

export default function FormCost(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [enthinicty, setenthinicty] = React.useState('');
    const [gender, setgender] = React.useState('');
    const [status, setstatus] = React.useState('');
    const [race, setrace] = React.useState('');
    const [reasoncode, setreasoncode] = React.useState('');
    
    const [age, setage] = React.useState('');
    const [lat, setlat] = React.useState('');
    const [lon, setlon] = React.useState('');

    const handleageChange = (event) => {
      setage(event.target.value);
    };
    const handlelatChange = (event) => {
      setlat(event.target.value);
    };
    
    const handlelonChange = (event) => {
      setlon(event.target.value);
    };
    const handleenthinictyChange = (event) => {
      setenthinicty(event.target.value);
    };
    const handlegenderChange = (event) => {
      setgender(event.target.value);
    };
    const handlestatusChange = (event) => {
      setstatus(event.target.value);
    };
    const handleraceChange = (event) => {
      setrace(event.target.value);
    };
    const handlereasoncodeChange = (event) => {
      setreasoncode(event.target.value);
    };
    const handleClick=(event)=>{
      var cod=code[0];
      for(var i=0;i<code.length;i++)
      if(desc[i]==reasoncode)
      cod=code[i];
      var data = JSON.stringify({"AGE":age,"LAT":lat,"LON":lon,"ethnicity":enthinicty,"gender":gender,"marital":status,"race":race,"reasoncode":cod});

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        var v=parseInt(this.responseText);
        var p=Math.random() * (20 - 10) + 10;
        v="Total Estimated cost: "+ (v-(v*p/100)).toFixed(2).toString()+"$ - "+(v+(v*p/100)).toFixed(2).toString()+"$"
        props.changeres(v);
      }
      });

      xhr.open("POST", props.link+"?type=payer");
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.send(data);
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {5} className={classes.paper}>
          <Grid container spacing= {1}   >
            <Grid item xs={12}>
              <Typography align="center" variant="h6">{props.name}</Typography>
            </Grid>
            <Grid item className={classes.griditem} xs={12}>
              <TextField className={classes.textfield} id="Name" label="Name" />
            </Grid>
            
            <Grid item className={classes.griditem} xs={12}>
              <TextField className={classes.textfield} id="Payer Name" label="Payer Name" />
            </Grid>
            <Grid item className={classes.griditem} xs={12}>
              <TextField id="Age"  className={classes.textfield} value={age} onChange={handleageChange} label="Age" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="Lat" value={lat} onChange={handlelatChange} label="Lattitude" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="Lon" value={lon} onChange={handlelonChange} label="Longitude" />
            </Grid>
            <Grid item className={classes.griditem} xs={6}>
              <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Ethnicity</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={enthinicty}
                    onChange={handleenthinictyChange}
                  >
                    <MenuItem value={'hispanic'}>Hispanic</MenuItem>
                    <MenuItem value={'nonhispanic'}>non-Hispanic</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            
            <Grid item className={classes.griditem} xs={6}>
              <FormControl   className={classes.formControl}>
                <InputLabel id="demo-simple-select-label1">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label1"
                    id="demo-simple-select1"
                    value={gender}
                    onChange={handlegenderChange}
                  >
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label2">Marital Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select2"
                    value={status}
                    onChange={handlestatusChange}
                  >
                    <MenuItem value={'M'}>Married</MenuItem>
                    <MenuItem value={'S'}>Single</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label3">Race</InputLabel>
                  <Select
                    labelId="demo-simple-select-label3"
                    id="demo-simple-select3"
                    value={race}
                    onChange={handleraceChange}
                  >
                    <MenuItem value={'asian'}>Asian</MenuItem>
                    <MenuItem value={'black'}>Black</MenuItem>
                    <MenuItem value={'native'}>Native</MenuItem>
                    <MenuItem value={'white'}>White</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item  className={classes.griditem} xs={12}>
              <FormControl className={classes.formControl2}>
                <InputLabel id="demo-simple-select-label4">Diagnosis</InputLabel>
                  <Select
                    labelId="demo-simple-select-labe4l"
                    id="demo-simple-select4"
                    value={reasoncode}
                    onChange={handlereasoncodeChange}
                  >
                    {desc.map((name) => (
                    <MenuItem value={name}>{name}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>   
            <Paper />           
            </Grid>
            <Grid item xs={6}>   
            <Button variant="contained" color="primary" onClick={handleClick}>
              Submit
            </Button>       
            </Grid>
          </Grid>
        </Paper>
    </div>
  )
}