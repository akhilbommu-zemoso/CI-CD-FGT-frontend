import React from 'react'
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import ProfileListItem from '../components/ProfileListItem'
import Divider from '@material-ui/core/Divider'
import { BrowserRouter as Router } from 'react-router-dom'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        minWidth: 340,
        margin: 15,
        backgroundColor: theme.palette.background.paper,
    },
    margin: {
        marginTop: 10,
    },
    active: {
        backgroundColor: "rgb(4,136,255)",
        color: "white",
        "&:hover": {
            backgroundColor: "rgb(4,136,255)",
            opacity: 0.9,
        },
    },
}));
export default {
    title: "ListItems",
    decorators: [withKnobs],
};
export const ListItems = () => {
    const classes = useStyles();
    const listItems = [
        "Profile settings",
        "Manage transactions",
        "Manage categories",
        "Manage bank account",
        "Support",
        "Privacy",
    ];
    const [selected, setSelected] = React.useState(0);
    const [selected1, setSelected1] = React.useState(2);
    return (
        <Router>
            <List component="nav">
                {listItems.map((listItem, index) => {
                    index += 1;
                    return (
                        <ProfileListItem
                            index={index}
                            itemName={listItem}
                            selected={selected}
                            setSelected={(updatedIndex) => setSelected(updatedIndex)}
                        />
                    );
                })}
            </List>
            <div style={{ margin: '40px' }}></div>
            <List component="nav">
                {listItems.map((listItem, index) => {
                    index += 1;
                    return (
                        <ProfileListItem
                            active={classes.active}
                            index={index}
                            itemName={listItem}
                            selected={selected1}
                            setSelected={(updatedIndex) => setSelected1(updatedIndex)}
                        />
                    );
                })}
            </List>
        </Router>
    );
}