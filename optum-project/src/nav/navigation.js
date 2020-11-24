import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ReceiptIcon from '@material-ui/icons/Receipt';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MailIcon from '@material-ui/icons/Mail';
import { green,blue } from '@material-ui/core/colors';
import TimelineIcon from '@material-ui/icons/Timeline';
import BusinessIcon from '@material-ui/icons/Business';
import SearchIcon from '@material-ui/icons/Search';
import Formcost from '../pages/form_cost';
import Home from '../pages/Home'
import Totalpage from '../pages/totalPage';
import Doctor from '../pages/doctor';
import Organization from '../pages/organization';
import Trend from '../pages/trends';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [page, setpage] = React.useState("Home");


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            32 Bits Rocofit
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <List>
            <ListItem button key="32 Bits" onClick={()=>{setpage("Home")}}>
              <ListItemIcon><LocalHospitalIcon style={{ color: green[500] }}/></ListItemIcon>
              <ListItemText primary="32 Bits" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key="Trends" onClick={()=>{setpage("Trends")}}>
                <ListItemIcon><TimelineIcon/></ListItemIcon>
                <ListItemText primary="Trends" />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key="Doctor Search" onClick={()=>{setpage("Search")}}>
                <ListItemIcon><SearchIcon/></ListItemIcon>
                <ListItemText primary="Search" />
            </ListItem>
            <ListItem button key="Organization" onClick={()=>{setpage("Organization")}}>
                <ListItemIcon><BusinessIcon/></ListItemIcon>
                <ListItemText primary="Organization" />
            </ListItem>
            
        <Divider />
            <ListItem button key="Recommendation" onClick={()=>{setpage("Recommendation")}}>
                <ListItemIcon><ReceiptIcon/></ListItemIcon>
                <ListItemText primary="Recommendation" />
            </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {page=='Home'&&<Home/>}
            {page=='Recommendation'&&<Totalpage page="Total Health Care Cost"/>}
            {page=='Search'&&<Doctor/>}
            {page=='Trends'&&<Trend/>}
            {page=='Organization'&&<Organization/>}
      </main>
    </div>
  );
}
