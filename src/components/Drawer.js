// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
// import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
// import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
// import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
// import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
// import { Route, Link, Switch, Redirect } from 'react-router-dom'
// import AppBar from './AppBar'
// import CenteredGrid from './LandingPage'
// import Brand from '../atoms/Brand'
// import ProfileList from './ProfileList'
// import Routes from './Routes'
// const drawerWidth = 240;
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//   },
//   drawerOpen: {
//     padding: '0px',
//     marginTop: '65px',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   drawerClose: {
//     padding: '0px',
//     marginTop: '65px',
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: theme.spacing(7) + 1,
//     [theme.breakpoints.up('sm')]: {
//       width: theme.spacing(9) + 1,
//     },
//   },
//   active: {
//     color: 'blue',
//     fontWeight: 700,
//   },
//   a: {
//     '&:hover': {
//       color: 'black',
//     },
//   },
//   linksclass: {
//     color: 'black',
//     paddingTop: '0px',
//     textDecoration: 'none',
//     '&:hover': {
//       color: 'black',
//       textDecoration: 'none',
//     },
//   },
//   dividerColor: {
//     color: 'blue',
//     backgroundColor: 'blue',
//     marginRight: '16px',
//     width: '3px',
//     marginLeft: '-12px'
//   },
//   toolbar: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     height: '20px',
//   },
//   content: {
//     flexGrow: 1,
//     marginLeft: '110px',
//     marginRight: '30px',
//   },
//   listclass: { paddingTop: '0px' },
// }));
// export default function MiniDrawer() {
//   const [selected, setSelected] = React.useState(2);
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const listItems = [{ "link": "/dashboard/home", "itemName": "Home", "icon": <HomeOutlinedIcon /> },
//   { "link": "/dashboard/wallet", "itemName": "Wallet", "icon": <AccountBalanceWalletOutlinedIcon /> },
//   { "link": "/dashboard/transactions", "itemName": "Transactions", "icon": <ImportExportOutlinedIcon /> },
//   { "link": "/dashboard/bank", "itemName": "Bank", "icon": <AccountBalanceOutlinedIcon /> },
//   { "link": "/dashboard/track", "itemName": "Track", "icon": <TrackChangesOutlinedIcon /> },
//   { "link": "/dashboard/satistics", "itemName": "Statistics", "icon": <BarChartOutlinedIcon /> }
//   ]
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar brand={<Brand name="Ze-Transact" />} profilelist={<ProfileList />}></AppBar>
//       <Drawer
//         variant="permanent"
//         className={clsx(classes.drawer, {
//           [classes.drawerOpen]: open,
//           [classes.drawerClose]: !open,
//         })}
//         classes={{
//           paper: clsx({
//             [classes.drawerOpen]: open,
//             [classes.drawerClose]: !open,
//           }),
//         }}
//       >
//         <Divider />
//         <div onMouseOverCapture={handleDrawerOpen} onMouseOutCapture={handleDrawerClose}>
//           <List className={classes.listclass} >
//             {listItems.map((listItem, index) => {
//               index += 1;
//               return (<Link to={listItem.link} className={classes.linksclass} onClick={() => { setSelected(2 ** index) }}  >
//                 <ListItem selected={(selected >> index) & 1} classes={{ selected: classes.active }} button key={listItem.itemName}>
//                   <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> index) & 1} orientation="vertical" />
//                   <ListItemIcon>{listItem.icon}</ListItemIcon>
//                   <ListItemText primary={listItem.itemName} />
//                 </ListItem>
//                 <Divider />
//               </Link>);
//             })
//             }
//           </List>
//         </div>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.toolbar} />
//         <Redirect to="/dashboard/home" />
//         <Switch>
//           <Routes />
//         </Switch>
//       </main>
//     </div>
//   );
// }
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import AppBar from './AppBar'
import DrawerItems from './DrawerItems'
import CenteredGrid from './LandingPage'
import Brand from '../atoms/Brand'
import ProfileList from './ProfileList'
import Routes from './Routes'
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
    padding: '0px',
    marginTop: '65px',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    padding: '0px',
    marginTop: '65px',
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
  active: {
    color: 'blue',
    fontWeight: 700,
  },
  a: {
    '&:hover': {
      color: 'black',
    },
  },
  linksclass: {
    color: 'black',
    paddingTop: '0px',
    textDecoration: 'none',
    '&:hover': {
      color: 'black',
      textDecoration: 'none',
    },
  },
  dividerColor: {
    color: 'blue',
    backgroundColor: 'blue',
    marginRight: '16px',
    width: '3px',
    marginLeft: '-12px'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '20px',
  },
  content: {
    flexGrow: 1,
    marginLeft: '110px',
    marginRight: '30px',
  },
  listclass: { paddingTop: '0px' },
}));
export default function MiniDrawer() {
  const [selected, setSelected] = React.useState(2);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const listItems = [{ "link": "/dashboard/home", "itemName": "Home", "icon": <HomeOutlinedIcon /> },
  { "link": "/dashboard/wallet", "itemName": "Wallet", "icon": <AccountBalanceWalletOutlinedIcon /> },
  { "link": "/dashboard/transactions", "itemName": "Transactions", "icon": <ImportExportOutlinedIcon /> },
  { "link": "/dashboard/bank", "itemName": "Bank", "icon": <AccountBalanceOutlinedIcon /> },
  { "link": "/dashboard/track", "itemName": "Track", "icon": <TrackChangesOutlinedIcon /> },
  { "link": "/dashboard/satistics", "itemName": "Statistics", "icon": <BarChartOutlinedIcon /> }
  ]
  return (
    <div>
      <CssBaseline />
      <AppBar brand={<Brand name="Ze-Transact" />} profilelist={<ProfileList />}></AppBar>
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
        <Divider />
        <div onMouseOverCapture={handleDrawerOpen} onMouseOutCapture={handleDrawerClose}>

          {/* Adding landing page sidebar List items using array of items and icons */}

          <List className={classes.listclass}>
            {
              listItems.map((listItem, index) => {
                index += 1;
                return (
                  <DrawerItems
                    link={listItem.link}
                    linksclass={classes.linksclass}
                    itemName={listItem.itemName}
                    icon={listItem.icon}
                    selected={selected}
                    setSelected={setSelected}
                    index={index}
                    active={classes.active}
                    dividerColor={classes.dividerColor}
                  />
                );
              })
            }
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Redirect to="/dashboard/home" />
        <Switch>
          <Routes />
        </Switch>
      </main>
    </div>
  );
}