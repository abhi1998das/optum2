import Typography from '@material-ui/core/Typography';
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png';
import image4 from '../images/img4.png';
import image5 from '../images/img5.png';
import image6 from '../images/img6.png';
import 'fontsource-roboto';
import Icon from '@material-ui/core/Icon';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    icons:{
        height:'500px',
        width:'500px',
    }
}))
export default function Navigation(props) {
    const classes = useStyles();
    const theme = useTheme();
    
  return (
    <div className={classes.root} >
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper elevation={3} spacing= {10} className={classes.paper}>
                <Container fixed >
                <Typography align="center" variant="h3">ROCOFIT</Typography>
                </Container>
                <Grid container spacing={10}alignItems="center" justify="center">
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image1} alt="this is car image" />
                        </Icon>
                    </Grid>
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        Problem:
                        Rising Healthcare costs has lead to untimely death of many healthy individuals.
                        This is mainly due the lack of transparency  in Healthcare system. 
                        
                        </Typography>
                    </Grid>
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        Lack of knowledge about the Insurance company, Doctor and the cost of medication has lead to exploitation of the patients.
                        Transparency of health records, organization data, past records of coverage of Insurance company is not available in public domain, so that leads to misinformation. 
                        The other most important point is lack of healthy lifestyle that leads to many diseases.
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image2} alt="this is car image" />
                        </Icon>
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image3} alt="this is car image" />
                        </Icon>
                    </Grid>
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        Our Soution:
                         We tried to make a unified system of records of past patients, their healthcare costs, percentage of coverage provided by insurance companies and other important data.
                         Our solution will increase transparency in data and also provide an estimated cost and the estimated coverage for a diagnosis, so that the user can choose wisely.
                         
                        </Typography>
                    </Grid>
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        We also tried to predict a care plan and a brief description about it.
                         We tried to make a portal for the users where they can comapare the doctors and also Insurance companies on their past records.
                         So that they make a good choice.
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image4} alt="this is car image" />
                        </Icon>
                    </Grid>
                    
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image5} alt="this is car image" />
                        </Icon>
                    </Grid>
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        Our second part of the solution is to monitor the vitals of the user and check for any anomaly so that the user can be notified in advance.
                        We will also notify the hospital if any abnormal vitals is recorded so they might take quick actions.
                        </Typography>
                    </Grid>
                    
                    <Grid item align="center" xs={6}>
                        <Typography variant="h5" align="center" gutterBottom>
                        We would track Daily food habits and health of a person and calculate the health score of a person
Higher health score means the person is leading a healthy life,so insurance company can check the health score of a person to give them discount on health plans 
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Icon className={classes.icons}>
                            <img src={image6} alt="this is car image" />
                        </Icon>
                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Grid>
    </div>
  )
}