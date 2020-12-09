import Typography from '@material-ui/core/Typography';
import React from 'react';
import Formcost from './form_cost';
import CarePlan from './form_careplan';
import Medications from './medicationTable';
import Anomaly from './anomaly';
import Description from './description';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
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
  
export default function Totalpage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const desc=['We give you an estimate of how much it will cost to you for your ailment.','We give you recommendation about your careplan  based on your ailments','We give you an estimate of how much payer will bear the cost to you for your ailment','Medication List','Check whether there is any anomaly in the amount charged']
    const [value, setValue] = React.useState(0);
    const [result, setResult] = React.useState('');
    const handleChange = (event, newValue) => {
        console.log(value)
      setValue(newValue);
    };
    const changeres = (value) => {
        setResult(value);
    };
  const link="http://127.0.0.1:5000/"
    return (
    <div className={classes.root} >
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="icon label tabs example"
            >
                <Tab icon={<MonetizationOnIcon/>} label="Total Health Care Cost"/> 
                <Tab icon={<FavoriteIcon />} label="Suggest Care Plan"/> 
                <Tab icon={<MoneyOffIcon/>} label="Estimated Payer Cost"/>
                <Tab icon={<LocalHospitalIcon/>} label="Medications"/>
                <Tab icon={<LocalHospitalIcon/>} label="Verification"/>
                </Tabs>
            </Paper>
            </Grid>
            <Grid item xs={12}>
            {value==3&&<Grid container spacing={3}><Grid item xs={12}><Medications/></Grid></Grid>}
            {value!=3&&<Grid container spacing={3}>
                
                <Grid item xs={6}>
                    {value==0&&<Formcost result={result} changeres={changeres} link={link} name="Total Health Care Cost"/>}
                    {value==1&&<CarePlan result={result}  changeres={changeres} link={link} name="Suggest Care Plan"/>}
                    {value==2&&<Formcost result={result}  changeres={changeres} link={link} name="Estimated Payer Cost"/>}
                    {value==4&&<Anomaly result={result}  changeres={changeres} link={link} name="Verification"/>}
                </Grid>
                <Grid item xs={6}>
                    {value!=3&&<Description description={desc[value]} result={result}/>}
                </Grid>
            </Grid>}    
            </Grid>
            </Grid>
    </div>
    )
}