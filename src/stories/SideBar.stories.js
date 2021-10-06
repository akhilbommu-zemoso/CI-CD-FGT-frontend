import React from 'react'
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import ImportExportOutlinedIcon from '@material-ui/icons/ImportExportOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
const useStyles = makeStyles((theme) => ({
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
    active: {
        color: 'blue',
        fontWeight: 700,
    },
}));
export default {
    title: "SidebBar",
    decorators: [withKnobs],
};
export const SideBar = () => {
    const [selected, setSelected] = React.useState(2);

    const classes = useStyles();
    const listItems = [{ "link": "/dashboard/home", "itemName": "Home", "icon": <HomeOutlinedIcon /> },
    { "link": "/dashboard/wallet", "itemName": "Wallet", "icon": <AccountBalanceWalletOutlinedIcon /> },
    { "link": "/dashboard/transactions", "itemName": "Transactions", "icon": <ImportExportOutlinedIcon /> },
    { "link": "/dashboard/bank", "itemName": "Bank", "icon": <AccountBalanceOutlinedIcon /> },
    { "link": "/dashboard/track", "itemName": "Track", "icon": <TrackChangesOutlinedIcon /> },
    { "link": "/dashboard/satistics", "itemName": "Statistics", "icon": <BarChartOutlinedIcon /> }
    ]
    return (
        <Router>
            <List className={classes.listclass} >
                {listItems.map((listItem, index) => {
                    index += 1;
                    return (<Link to={listItem.link} className={classes.linksclass} onClick={() => { setSelected(2 ** index) }}  >
                        <ListItem selected={(selected >> index) & 1} classes={{ selected: classes.active }} button key={listItem.itemName}>
                            <Divider classes={{ root: classes.dividerColor }} flexItem={(selected >> index) & 1} orientation="vertical" />
                            <ListItemIcon>{listItem.icon}</ListItemIcon>
                            <ListItemText primary={listItem.itemName} />
                        </ListItem>
                        <Divider />
                    </Link>);
                })
                }
            </List>
        </Router>
    );
}