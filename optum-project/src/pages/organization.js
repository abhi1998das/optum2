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
const City=[["LEOMINSTER"],["CAMBRIDGE"],["ATTLEBORO"],["LAWRENCE"],["HYANNIS"],["NORTHAMPTON"],["GREENFIELD"],["BOSTON"],["SOUTHBRIDGE"],["FALL RIVER"],["HOLYOKE"],["NEWBURYPORT"],["PALMER"],["BEVERLY"],["SALEM"],["BRIGHTON"],["PITTSFIELD"],["MARLBOROUGH"],["BROCKTON"],["CLINTON"],["PLYMOUTH"],["WORCESTER"],["LOWELL"],["WESTFIELD"],["SPRINGFIELD"],["MELROSE"],["TAUNTON"],["METHUEN"],["NEEDHAM"],["W CONCORD"],["MILFORD"],["GARDNER"],["AYER"],["SOUTH WEYMOUTH"],["NEWTON"],["WINCHESTER"],["MILTON"],["NORWOOD"],["FALMOUTH"],["BURLINGTON"],["FRAMINGHAM"],["NANTUCKET"],["OAK BLUFFS"],["GREAT BARRINGTON"],["ATHOL"],["Bedford"],["Jamaica Plain"],["Leeds"],["Fitchburg"],["Gloucester"],["Haverhill"],["Lynn"],["New Bedford"],["Quincy"],["Fairhaven"],["West Springfield"],["MARLBORO"],["SALISBURY"],["HOLLISTON"],["HOLDEN"],["NEWBURY"],["WATERTOWN"],["EASTHAMPTON"],["EVERETT"],["DANVERS"],["ACTON"],["ORANGE"],["NORTH READING"],["BROOKLINE"],["AMESBURY"],["WESTON"],["MENDON"],["WALPOLE"],["NORWELL"],["ROCKPORT"],["WESTBOROUGH"],["SHIRLEY"],["ROCKLAND"],["CARVER"],["LYNNFIELD"],["LAKEVILLE"],["NATICK"],["GROVELAND"],["DUXBURY"],["WEST BRIDGEWATER"],["KINGSTON"],["AGAWAM"],["WAYLAND"],["READING"],["CHELMSFORD"],["ANDOVER"],["HINGHAM"],["PITTSFILED"],["DARTMOUTH"],["SUNDERLAND"],["WESTMINSTER"],["MEDWAY"],["WESTPORT"],["GRAFTON"],["DEDHAM"],["BELCHERTOWN"],["PEMBROKE"],["LITTLETON"],["MEDFORD"],["DENNIS"],["SOMERVILLE"],["WEST NEWTON"],["NORTH ANDOVER"],["DRACUT"],["DOVER"],["LEVERETT"],["SHERBORN"],["SOUTH HADLEY"],["BRAINTREE"],["EAST BOSTON"],["SAUGUS"],["SHREWSBURY"],["BELLINGHAM"],["NORTH DARTMOUTH"],["EAST DENNIS"],["LUDLOW"],["TURNERS FALLS"],["SEEKONK"],["CANTON"],["WILBRAHAM"],["SWANSEA"],["MILLIS"],["MILLBURY"],["CARLISLE"],["REVERE"],["MATTAPOISETT"],["S DARTMOUTH"],["N ADAMS"],["WESTWOOD"],["CHATHAM"],["SPENCER"],["STONEHAM"],["MARSTONS MLS"],["YARMOUTH PORT"],["ROSLINDALE"],["LANESBOROUGH"],["WILMINGTON"],["MEDFIELD"],["CHESTNUT HILL"],["SOMERSET"],["BREWSTER"],["WEYMOUTH"],["COHASSET"],["SOUTHBOROUGH"],["IPSWICH"],["SHEFFIELD"],["ESSEX"],["WENHAM"],["MARION"],["GRANBY"],["MARBLEHEAD"],["HAMPDEN"],["WAKEFIELD"],["LONGMEADOW"],["ORLEANS"],["LINCOLN"],["BELMONT"],["LEXINGTON"],["FOXBOROUGH"],["SHARON"],["STOUGHTON"],["REHOBOTH"],["ROWLEY"],["HARVARD"],["AMHERST"],["NEWTON CENTER"],["SOUTHBORO"],["WEST BARNSTABLE"],["WELLFLEET"],["COTUIT"],["ADAMS"],["UPTON"],["HANOVER"],["SOUTH DENNIS"],["RICHMOND"],["BRIDGEWATER"],["W BARNSTABLE"],["MARSHFIELD"],["MALDEN"],["WEST TISBURY"],["BILLERICA"],["PROVINCETOWN"],["HOLBROOK"],["HOPKINTON"],["FEEDING HILLS"],["AUBURN"],["EAST FALMOUTH"],["PEABODY"],["LEICESTER"],["WARE"],["RAYNHAM"],["CHELSEA"],["WRENTHAM"],["WELLESLEY HILLS"],["MANSFIELD"],["EASTHAM"],["EASTON"],["NEWTON CENTRE"],["SOUTHAMPTON"],["WEST BOYLSTON"],["SHELBURNE FALLS"],["NORFOLK"],["MIDDLETON"],["ACUSHNET"],["SUDBURY"],["EAST HARWICH"],["CONCORD"],["ASHLAND"],["SWAMPSCOTT"],["WINTHROP"],["EAST LONGMEADOW"],["CHARLTEN"],["WILLIAMSTOWN"],["FRANKLIN"],["NORTHFIELD"],["WAREHAM"],["MAYNARD"],["PLAINVILLE"],["NORTHBOROUGH"],["TEWKSBURY"],["HUDSON"],["EAST DOUGLAS"],["SOUTHWICK"],["LUNENBURG"],["MONSON"],["ARLINGTON"],["PAXTON"],["TOPSFIELD"],["WESTHAMPTON"],["WEST WAREHAM"],["W WAREHAM"],["WOBURN"],["NORTH BROOKFIELD"],["CHICOPEE"],["NEWTONVILLE"],["DOUGLAS"],["OSTERVILLE"],["LANCASTER"],["BALDWINVILLE"],["BERKLEY"],["DORCHESTER"],["WEST ROXBURY"],["OXFORD"],["AVON"],["RUTLAND"],["WHATELY"],["WINCHENDON"],["WHITINSVILLE"],["S WEYMOUTH"],["STOW"],["WORTHINGTON"],["LEE"],["SCITUATE"],["RANDOLPH"],["FLORENCE"],["WHITMAN"],["DALTON"],["WALTHAM"],["ASHBURNHAM"],["SOUTH DARTMOUTH"],["W SPRINGFIELD"],["WEST YARMOUTH"],["TEMPLETON"],["BLACKSTONE"],["MONTGOMERY"],["DUDLEY"],["BOYLSTON"],["WELLESLEY"],["FOXBORO"],["UXBRIDGE"],["WEBSTER"],["HADLEY"],["MIDDLEBOROUGH"],["BOXFORD"],["EAST BRIDGEWATER"],["NORTON"],["EAST SANDWICH"],["ABINGTON"],["WESTBORO"],["NORTHBRIDGE"],["BRIMFIELD"],["HANSON"],["WILLIAMSBURG"],["FORESTDALE"],["NEWBURGPORT"],["MERRIMAC"],["BERLIN"],["ROXBURY CROSSING"],["POCASSET"],["CEDARVILLE"],["MASHPEE"],["BUZZARDS BAY"],["HARWICH"],["NORTH ATTLEBORO"],["TEATICKET"]]
export default function DoctorPage(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [orgdetails, setorgdetails] = React.useState([]);
    
    const [city, setcity] = React.useState('');

    const handlecityChange = (event) => {
      setcity(event.target.value);
    };
    const buttonClicked=()=>{
                
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
            setorgdetails(JSON.parse(this.responseText));
            console.log(orgdetails)
        }
        });
        if(city==";")
        xhr.open("GET", "http://127.0.0.1:5000/?type=read&query=select Name ,Address, City, Phone from optum.organizations");
        else
        xhr.open("GET", "http://127.0.0.1:5000/?type=read&query=select Name ,Address, City, Phone from optum.organizations where CITY='"+city+"';");

        xhr.send();
    }
  return (
    <div className={classes.root} >
        <Paper elevation={3} spacing= {10} className={classes.paper}>
          <Grid container spacing={3}>
              <Grid item xs={12}>
              <Typography align="center" variant="h6">Organization Search</Typography>
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
            
            {orgdetails.map((namex) => (
                <Grid item xs={3} className={classes.items}>
                    <Card1 data={namex} value={Math.random() * (5 - 2) + 2}/>
                </Grid>
                  ))}
                  <Grid item align="center" xs={12} className={classes.items}>
                  {orgdetails.length==0&&<Typography align="center" variant="h4">No Organization found</Typography>}
                  </Grid>
            </Grid>
        </Paper>
    </div>
    )
}