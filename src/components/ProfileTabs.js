import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
 import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GenralProfile from './GeneralProfile'
import BasicProfile from './BasicProfile'
import ProfileList from './ProfileList'
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontWeight: '16px',
        backgroundColor: theme.palette.background.paper,
    },
    red: {
        backgroundColor: 'white',
        boxShadow: "0px 0px 1px #9E9E9E"
    },
    color: {
        color: 'black',
        paddingTop: '20px',
    },
    text: {
        fontWeight: '16px',
        textTransform: 'none',
        fontWeight: 500,
        textAlign: 'center',
        '&:focus': {
            outline: 'none',
            border: 'none',
        },
    },
}));
export default function ProfileTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.red}>
                <Tabs indicatorColor="primary"
                    textColor="primary" value={value} onChange={handleChange} className={classes.color} >
                    <Tab classes={{ root: classes.text }} label="Basic Profile" {...a11yProps(0)} />
                    <Tab className={classes.text} label="General" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {props.tab1}
            </TabPanel>
            <TabPanel value={value} index={1}>
               {props.tab2}
            </TabPanel>
        </div>
    );
}