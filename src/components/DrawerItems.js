import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'
function DrawerItems(props) {
    return (
        <Link data-testid="link" to={props.link} className={props.linksclass} onClick={() => { props.setSelected(2 ** props.index) }} >
            <ListItem
                selected={(props.selected >> props.index) & 1}
                classes={(props.selected:props.active)}>
                <Divider classes={{ root: props.dividerColor }}
                flexItem={(props.selected >> props.index) & 1}
                orientation="vertical" />
                 <ListItemIcon>{props.icon}</ListItemIcon>
                <ListItemText primary={props.itemName} />
            </ListItem>
        <Divider />
        </Link >
      
    )
}

export default DrawerItems