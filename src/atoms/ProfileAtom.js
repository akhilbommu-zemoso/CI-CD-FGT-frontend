import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link, Redirect } from 'react-router-dom'
import { logout } from '../utils/index'
import ProfilePicture from '../components/ProfilePicture';
const useStyles = makeStyles((theme) => ({
    circle: {
        width: 60,
        height: 60,
        marginRight: 20,
        backgroundColor: "rgba(182,32,224,0.71)",
        fontSize: 28,
      },
    newline: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '14px',

    },
    linksclass: {
        color: 'black',
        paddingTop: '0px',
        fontSize: '14px',
        textDecoration: 'none',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
    },
    margin: {
        marginTop: 15,
        fontSize: '14px',
    },
    font: {
        fontSize: '14px',
    }
}));
function ProfileHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
    const classes = useStyles();
    return (
        <div>
            <List component="nav" aria-label="main mailbox folders">
                <Link to="/profile" className={classes.linksclass}>
                    <ListItem button>
                        <ListItemIcon>
                            <ProfilePicture pictureStyle={classes.circle}/>
                        </ListItemIcon>
                        <div className={classes.newline}>
                            <ListItemText classes={{ primary: classes.font }} primary={user.name} />
                            <ListItemText classes={{ primary: classes.font }} primary={user.email} />
                        </div>
                    </ListItem>
                </Link>
            </List>
        </div>
    );
}
function ProfileFooter() {
    const classes = useStyles();

    const logoutUser = () => {
        logout();
        return <Redirect to="/" />
    }
    return (
        <div>
            <Link data-testid="link" className={classes.linksclass} onClick={logoutUser}>
                <div className={classes.margin} >
                    <ListItem button>
                        <ListItemText classes={{ primary: classes.font }} primary="Logout" />
                    </ListItem>
                </div>
            </Link>
        </div>
    );
}
export { ProfileHeader, ProfileFooter }