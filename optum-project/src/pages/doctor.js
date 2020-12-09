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
import Card from'./card';
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
const State=[["MA"]]
const City=[["LEOMINSTER"], ["CAMBRIDGE"], ["ATTLEBORO"], ["LAWRENCE"], ["HYANNIS"], ["NORTHAMPTON"], ["GREENFIELD"], ["BOSTON"],["SOUTHBRIDGE"], ["FALL RIVER"], ["HOLYOKE"], ["NEWBURYPORT"], ["PALMER"], ["BEVERLY"], ["SALEM"], ["BRIGHTON"],["PITTSFIELD"], ["MARLBOROUGH"], ["BROCKTON"], ["CLINTON"], ["PLYMOUTH"], ["WORCESTER"], ["LOWELL"], ["WESTFIELD"],["SPRINGFIELD"], ["MELROSE"], ["TAUNTON"], ["METHUEN"], ["NEEDHAM"], ["W CONCORD"], ["MILFORD"], ["GARDNER"], ["AYER"],["SOUTH WEYMOUTH"], ["NEWTON"], ["WINCHESTER"], ["MILTON"], ["NORWOOD"], ["FALMOUTH"], ["BURLINGTON"], ["FRAMINGHAM"],["NANTUCKET"], ["OAK BLUFFS"], ["GREAT BARRINGTON"], ["ATHOL"], ["Bedford"], ["Jamaica Plain"], ["Leeds"],["Fitchburg"], ["Gloucester"], ["Haverhill"], ["Lynn"], ["New Bedford"], ["Quincy"], ["Fairhaven"], ["West Springfield"], ["MARLBORO"], ["SALISBURY"], ["HOLLISTON"], ["HOLDEN"], ["NEWBURY"], ["WATERTOWN"], ["EASTHAMPTON"],["EVERETT"], ["DANVERS"], ["ACTON"], ["ORANGE"], ["NORTH READING"], ["BROOKLINE"], ["AMESBURY"], ["WESTON"], ["MENDON"],["WALPOLE"], ["NORWELL"], ["ROCKPORT"], ["WESTBOROUGH"], ["SHIRLEY"], ["ROCKLAND"], ["CARVER"], ["LYNNFIELD"],["LAKEVILLE"], ["NATICK"], ["GROVELAND"], ["DUXBURY"], ["WEST BRIDGEWATER"], ["KINGSTON"], ["AGAWAM"], ["WAYLAND"],["READING"], ["CHELMSFORD"], ["ANDOVER"], ["HINGHAM"], ["PITTSFILED"], ["DARTMOUTH"], ["SUNDERLAND"], ["WESTMINSTER"],["MEDWAY"], ["WESTPORT"], ["GRAFTON"], ["DEDHAM"], ["BELCHERTOWN"], ["PEMBROKE"], ["LITTLETON"], ["MEDFORD"],["DENNIS"], ["SOMERVILLE"], ["WEST NEWTON"], ["NORTH ANDOVER"], ["DRACUT"], ["DOVER"], ["LEVERETT"], ["SHERBORN"],["SOUTH HADLEY"], ["BRAINTREE"], ["EAST BOSTON"], ["SAUGUS"], ["SHREWSBURY"], ["BELLINGHAM"], ["NORTH DARTMOUTH"],["EAST DENNIS"], ["LUDLOW"], ["TURNERS FALLS"], ["SEEKONK"], ["CANTON"], ["WILBRAHAM"], ["SWANSEA"], ["MILLIS"],["MILLBURY"], ["CARLISLE"], ["REVERE"], ["MATTAPOISETT"], ["S DARTMOUTH"], ["N ADAMS"], ["WESTWOOD"], ["CHATHAM"],["SPENCER"], ["STONEHAM"], ["MARSTONS MLS"], ["YARMOUTH PORT"], ["ROSLINDALE"], ["LANESBOROUGH"], ["WILMINGTON"],["MEDFIELD"], ["CHESTNUT HILL"], ["SOMERSET"], ["BREWSTER"], ["WEYMOUTH"], ["COHASSET"], ["SOUTHBOROUGH"], ["IPSWICH"],["SHEFFIELD"], ["ESSEX"], ["WENHAM"], ["MARION"], ["GRANBY"], ["MARBLEHEAD"], ["HAMPDEN"], ["WAKEFIELD"],["LONGMEADOW"], ["ORLEANS"], ["LINCOLN"], ["BELMONT"], ["LEXINGTON"], ["FOXBOROUGH"], ["SHARON"], ["STOUGHTON"],["REHOBOTH"], ["ROWLEY"], ["HARVARD"], ["AMHERST"], ["NEWTON CENTER"], ["SOUTHBORO"], ["WEST BARNSTABLE"],["WELLFLEET"], ["COTUIT"], ["ADAMS"], ["UPTON"], ["HANOVER"], ["SOUTH DENNIS"], ["RICHMOND"], ["BRIDGEWATER"], ["WBARNSTABLE"], ["MARSHFIELD"], ["MALDEN"], ["WEST TISBURY"], ["BILLERICA"], ["PROVINCETOWN"], ["HOLBROOK"],["HOPKINTON"], ["FEEDING HILLS"], ["AUBURN"], ["EAST FALMOUTH"], ["PEABODY"], ["LEICESTER"], ["WARE"], ["RAYNHAM"],["CHELSEA"], ["WRENTHAM"], ["WELLESLEY HILLS"], ["MANSFIELD"], ["EASTHAM"], ["EASTON"], ["NEWTON CENTRE"],["SOUTHAMPTON"], ["WEST BOYLSTON"], ["SHELBURNE FALLS"], ["NORFOLK"], ["MIDDLETON"], ["ACUSHNET"], ["SUDBURY"], ["EAST HARWICH"], ["CONCORD"], ["ASHLAND"], ["SWAMPSCOTT"], ["WINTHROP"], ["EAST LONGMEADOW"], ["CHARLTEN"], ["WILLIAMSTOWN"],["FRANKLIN"], ["NORTHFIELD"], ["WAREHAM"], ["MAYNARD"], ["PLAINVILLE"], ["NORTHBOROUGH"], ["TEWKSBURY"], ["HUDSON"],["EAST DOUGLAS"], ["SOUTHWICK"], ["LUNENBURG"], ["MONSON"], ["ARLINGTON"], ["PAXTON"], ["TOPSFIELD"], ["WESTHAMPTON"],["WEST WAREHAM"], ["W WAREHAM"], ["WOBURN"], ["NORTH BROOKFIELD"], ["CHICOPEE"], ["NEWTONVILLE"], ["DOUGLAS"],["OSTERVILLE"], ["LANCASTER"], ["BALDWINVILLE"], ["BERKLEY"], ["DORCHESTER"], ["WEST ROXBURY"], ["OXFORD"], ["AVON"],["RUTLAND"], ["WHATELY"], ["WINCHENDON"], ["WHITINSVILLE"], ["S WEYMOUTH"], ["STOW"], ["WORTHINGTON"], ["LEE"],["SCITUATE"], ["RANDOLPH"], ["FLORENCE"], ["WHITMAN"], ["DALTON"], ["WALTHAM"], ["ASHBURNHAM"], ["SOUTH DARTMOUTH"], ["WSPRINGFIELD"], ["WEST YARMOUTH"], ["TEMPLETON"], ["BLACKSTONE"], ["MONTGOMERY"], ["DUDLEY"], ["BOYLSTON"],["WELLESLEY"], ["FOXBORO"], ["UXBRIDGE"], ["WEBSTER"], ["HADLEY"], ["MIDDLEBOROUGH"], ["BOXFORD"], ["EAST BRIDGEWATER"],["NORTON"], ["EAST SANDWICH"], ["ABINGTON"], ["WESTBORO"], ["NORTHBRIDGE"], ["BRIMFIELD"], ["HANSON"], ["WILLIAMSBURG"],["FORESTDALE"], ["NEWBURGPORT"], ["MERRIMAC"], ["BERLIN"], ["ROXBURY CROSSING"], ["POCASSET"], ["CEDARVILLE"],["MASHPEE"], ["BUZZARDS BAY"], ["HARWICH"], ["NORTH ATTLEBORO"], ["TEATICKET"]]
const Speciality=[["GENERAL PRACTICE"], ["PHYSICAL THERAPY"], ["CHIROPRACTIC"], ["CLINICAL PSYCHOLOGIST"], ["CLINICAL SOCIAL WORKER"],["CLINICAL NURSE SPECIALIST"], ["NURSE PRACTITIONER"], ["PATHOLOGY"], ["DERMATOLOGY"], ["OBSTETRICS/GYNECOLOGY"],["PSYCHIATRY"], ["OPTOMETRY"], ["INTERNAL MEDICINE"], ["PLASTIC AND RECONSTRUCTIVE SURGERY"], ["CARDIOVASCULAR DISEASE (CARDIOLOGY)"], ["OPHTHALMOLOGY"], ["PODIATRY"], ["UROLOGY"], ["EMERGENCY MEDICINE"], ["GENERAL SURGERY"], ["REGISTERED DIETITIAN OR NUTRITION PROFESSIONAL"], ["NEUROLOGY"], ["PHYSICIAN ASSISTANT"], ["AUDIOLOGIST"], ["SPEECH LANGUAGE PATHOLOGIST"], ["OTOLARYNGOLOGY"], ["RHEUMATOLOGY"], ["FAMILY PRACTICE"], ["PULMONARY DISEASE"], ["VASCULAR SURGERY"],["OCCUPATIONAL THERAPY"], ["ORAL SURGERY"], ["MAXILLOFACIAL SURGERY"], ["GERIATRIC MEDICINE"], ["HOSPITALIST"],["GASTROENTEROLOGY"], ["CERTIFIED REGISTERED NURSE ANESTHETIST"], ["PAIN MANAGEMENT"], ["ANESTHESIOLOGY"], ["ORTHOPEDIC SURGERY"], ["GYNECOLOGICAL ONCOLOGY"], ["CRITICAL CARE (INTENSIVISTS)"], ["INFECTIOUS DISEASE"], ["CERTIFIED NURSE MIDWIFE"], ["NEPHROLOGY"], ["THORACIC SURGERY"], ["RADIATION ONCOLOGY"], ["DIAGNOSTIC RADIOLOGY"], ["ENDOCRINOLOGY"],["NEUROSURGERY"], ["PEDIATRIC MEDICINE"], ["PHYSICAL MEDICINE AND REHABILITATION"], ["ALLERGY/IMMUNOLOGY"], ["SPORTS MEDICINE"], ["NUCLEAR MEDICINE"], ["HEMATOLOGY/ONCOLOGY"], ["HAND SURGERY"], ["SLEEP MEDICINE"], ["NEUROPSYCHIATRY"],["CARDIAC ELECTROPHYSIOLOGY"], ["HEMATOLOGY"], ["HOSPICE/PALLIATIVE CARE"], ["INTERVENTIONAL PAIN MANAGEMENT"],["COLORECTAL SURGERY (PROCTOLOGY)"], ["INTERVENTIONAL CARDIOLOGY"], ["MEDICAL ONCOLOGY"], ["ADDICTION MEDICINE"],["GERIATRIC PSYCHIATRY"], ["SURGICAL ONCOLOGY"]]
export default function DoctorPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [name, setname] = React.useState('');
    const [doctordetails, setdoctordetails] = React.useState([]);
    
    const handledoctordetailsChange = (event) => {
        setdoctordetails(event.target.value);
      };
    const handlenameChange = (event) => {
      setname(event.target.value);
    };
    const [gender, setgender] = React.useState('');

    const handlegenderChange = (event) => {
      setgender(event.target.value);
    };
    const [speciality, setspeciality] = React.useState('');

    const handlespecialityChange = (event) => {
      setspeciality(event.target.value);
    };
    const [city, setcity] = React.useState('');

    const handlecityChange = (event) => {
      setcity(event.target.value);
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
        
        if(speciality!="")
        {
            if(p==1)
            data+=" AND ";
            data+=" speciality = '"+speciality+"'";p=1;
        }    
        
        if(gender!="")
        {
            if(p==1)
            data+=" AND ";
            data+=" gender = '"+gender+"'";p=1;
        }    
        data+=";";
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            setdoctordetails(JSON.parse(this.responseText));
            console.log(doctordetails)
        }
        });

        xhr.open("GET", "http://127.0.0.1:5000/?type=read&query=select Name,Gender,Speciality,Address,City,State,UTILIZATION from optum.providers where "+data);
        if(data!=";")
        xhr.send();
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {10} className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
              <Typography align="center" variant="h6">Doctor Search</Typography>
              </Grid>
            <Grid item xs={3} className={classes.items}>
                <TextField id="name" label="Doctor's Name" value={name} onChange={handlenameChange}/>
            </Grid>
            <Grid item xs={3} className={classes.items}>
                <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    onChange={handlegenderChange}
                  >
                    <MenuItem value={'M'}>Male</MenuItem>
                    <MenuItem value={'F'}>Female</MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3} className={classes.items}>
                <FormControl  className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Speciality</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={speciality}
                    onChange={handlespecialityChange}
                  >
                      {Speciality.map((name) => (
                    <MenuItem value={name[0]}>{name[0]}</MenuItem>
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
            <Grid item align="center" xs={12} className={classes.items}>
            <Button variant="contained" color="primary" onClick={buttonClicked}>
              Submit
            </Button> 
            </Grid>
            {doctordetails.map((namex) => (
                <Grid item xs={3} className={classes.items}>
                    <Card value={Math.random() * (5 - 2) + 2} name={namex[0]} gender={namex[1]} speciality={namex[2]} address={namex[3]} city={namex[4]} state={namex[5]} utilization={namex[6]}/>
                </Grid>
                  ))}
                  <Grid item align="center" xs={12} className={classes.items}>
                  {doctordetails.length==0&&<Typography align="center" variant="h4">No doctors found</Typography>}
                  </Grid>
            </Grid>
        </Paper>
    </div>
    )
}