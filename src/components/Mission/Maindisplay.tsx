import React,{useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import {MissionInfoQuery} from "./../../generated/graphql"

import {useLanchMissionInfoQuery} from "./../../generated/graphql"
// BESCUE MUJHE EK HE DRAWEER MAIN SHOW KARWAN HAI HAI IS LEA 

import Process from "./Process"


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      
    },
   
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  actualdata:MissionInfoQuery

  window?: () => Window;
}

 const ResponsiveDrawer:React.FC<Props>=(prop)=> {
  const { window } = prop;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  console.log(prop.actualdata);

  // to get only name:
  const MissionName: any=prop.actualdata;
  var imagesarr: any="" ;  
  const [drawerid,setdrawerid]=useState<string>("1");

  const qureInfo = useLanchMissionInfoQuery({
    variables: {
      id: drawerid
   },
 });
 if(qureInfo.data){

    console.log("DATA",qureInfo.data)

     imagesarr=qureInfo.data.launch?.links?.flickr_images

 }


const [drawername,setdrawername]=useState<String>(MissionName[0].mission_name);

  const drawer = (
    <div>
      <div  className={classes.toolbar}  >
      <b style={{fontSize:"20px",padding:"30px",display:"block"}}> SPACE X APP 🚀</b>
      </div>
     
      <Divider  />
      <List>
        {MissionName.map((text: any, index :any) => (
          <ListItem onClick={()=>{
              setdrawername(text.mission_name)
              setdrawerid(""+(index+1));
             
              }} button key={index}>

              <KeyboardArrowRightIcon style={{color:"#009639"}} />
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text.mission_name} />
          </ListItem>
        ))}
      </List>
      <Divider />
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div  className={classes.root}>
      <CssBaseline />
      <AppBar   position="fixed" className={classes.appBar}>
        <Toolbar style={{backgroundColor:"#009639"}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {drawername}
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>

            {qureInfo.data?.launch ?<div>

            
            
              <h1>
              DETAILS:
          </h1>
          <p>
              {qureInfo.data?.launch ? qureInfo?.data?.launch?.details ?qureInfo?.data?.launch?.details:"No Detail": " "}
          </p>

          <h1>
             LAUNCH YEAR:
          </h1>
          <p>
              {qureInfo?.data?.launch?.launch_year}
          </p>
          <h1>
             LAUNCH SUCESS:
          </h1>
          <p>
              {qureInfo.data?.launch ? qureInfo?.data?.launch?.launch_success===true?"LAUNCH SUCESSFULLY":"LAUNCH FAIL" : " "}
          </p>
          <h1>
             LAUNCH SITE:
          </h1>
          <p>
          {qureInfo?.data?.launch?.launch_site?.site_name}
          </p>
          <h1>
             ROCKET:
          </h1>
          <p>
          <b>ROCKET NAME:</b> {qureInfo?.data?.launch?.rocket?.rocket_name} <br/>
          <b>ROCKET TYPE:</b> {qureInfo?.data?.launch?.rocket?.rocket_type}
          </p>

          <h1>
              FLICKRIMAGES:
          </h1>
          <p>
          

          {qureInfo?.data?.launch?.links?.flickr_images?.length!==0?<div>


              <img width="100%"  src={imagesarr[0]} alt="" />
          </div>
          :"NO IMAGE"}
              
          </p>  
            
            
            
            
            
            
            
            
            </div>:<div>
           <Process />
           </div> }

           
          
        </Typography>
       
      </main>
    </div>
  );
}

export default ResponsiveDrawer;