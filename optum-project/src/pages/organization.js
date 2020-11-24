import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Card1 from'./card1';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width:'100%'
    },
    items:{
        padding: theme.spacing(2),
    },formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
}))
const Phoneno=[["1-877-267-2323"], ["1-800-633-4227"], ["1-844-330-7799"], ["1-800-262-2583"], ["1-888-545-5205"], ["1-800-872-3862"],
["1-800-997-1654"], ["1-800-331-1476"]]
const City=[["Baltimore"], ["Louisville"], ["Chicago"], ["Minnetonka"], ["Hartford"], ["Bloomfield"], ["Indianapolis"]]
const Name=[["Dual Eligible"], ["Medicare"], ["Medicaid"], ["Humana"], ["Blue Cross Blue Shield"], ["UnitedHealthcare"], ["Aetna"],["Cigna Health"], ["Anthem"], ["NO_INSURANCE"]]
export default function DoctorPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setname] = React.useState('');
    const [orgdetails, setorgdetails] = React.useState([]);
    
    const handlenameChange = (event) => {
      setname(event.target.value);
    };
    const [city, setcity] = React.useState('');

    const handlecityChange = (event) => {
      setcity(event.target.value);
    };
    const [phone, setphone] = React.useState('');

    const handlephoneChange = (event) => {
      setphone(event.target.value);
    };
    const buttonClicked=()=>{
                
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        var data="",p=0;
        if(name!=""){
        data+=" NAME = '"+name+"'";p=1;
        }
        if(city!="")
        {
            if(p==1)
            data+=" AND ";
            data+=" city = '"+city+"'";p=1;
        }    
        
        if(phone!="")
        {
            if(p==1)
            data+=" AND ";
            data+=" phone = '"+phone+"'";p=1;
        }    
        
        data+=";";
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            setorgdetails(JSON.parse(this.responseText));
            console.log(orgdetails)
        }
        });
        if(data==";")
        xhr.open("GET", "http://127.0.0.1:5000/?type=read&query=select NAME,ADDRESS,CITY,PHONE,AMOUNT_COVERED,AMOUNT_UNCOVERED,REVENUE,COVERED_ENCOUNTERS,UNCOVERED_ENCOUNTERS,COVERED_MEDICATIONS,UNCOVERED_MEDICATIONS,COVERED_PROCEDURES,UNCOVERED_PROCEDURES,COVERED_IMMUNIZATIONS,UNCOVERED_IMMUNIZATIONS,UNIQUE_CUSTOMERS,QOLS_AVG,MEMBER_MONTHS from optum.payers");
        else
        xhr.open("GET", "http://127.0.0.1:5000/?type=read&query=select NAME,ADDRESS,CITY,PHONE,AMOUNT_COVERED,AMOUNT_UNCOVERED,REVENUE,COVERED_ENCOUNTERS,UNCOVERED_ENCOUNTERS,COVERED_MEDICATIONS,UNCOVERED_MEDICATIONS,COVERED_PROCEDURES,UNCOVERED_PROCEDURES,COVERED_IMMUNIZATIONS,UNCOVERED_IMMUNIZATIONS,UNIQUE_CUSTOMERS,QOLS_AVG,MEMBER_MONTHS from optum.payers where "+data);

        xhr.send();
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {10} className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
              <Typography align="center" variant="h6">Insurance Provider Search</Typography>
              </Grid>
            <Grid item xs={3} className={classes.items}>
            <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Insurance Provider Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={name}
                    onChange={handlenameChange}
                  >
                      {Name.map((namex) => (
                    <MenuItem value={namex[0]}>{namex[0]}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className={classes.items}>
                <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handlecityChange}
                  >
                      {City.map((name) => (
                    <MenuItem value={name[0]}>{name[0]}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className={classes.items}>
            <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Phone no</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={city}
                    onChange={handlephoneChange}
                  >
                      {Phoneno.map((name) => (
                    <MenuItem value={name[0]}>{name[0]}</MenuItem>
                  ))}
                  </Select>
              </FormControl>
            </Grid>
            <Grid item align="center" xs={12} className={classes.items}>
            <Button variant="contained" color="primary" onClick={buttonClicked}>
              Submit
            </Button> 
            </Grid>
            
            {orgdetails.map((namex) => (
                <Grid item xs={3} className={classes.items}>
                    <Card1 data={namex}/>
                </Grid>
                  ))}
                  <Grid item align="center" xs={12} className={classes.items}>
                  {orgdetails.length==0&&<Typography align="center" variant="h4">No Insurance Provider found</Typography>}
                  </Grid>
            </Grid>
        </Paper>
    </div>
    )
}