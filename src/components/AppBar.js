import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import ProfileList from './ProfileList'
import Brand from '../atoms/Brand'
import ProfilePicture from './ProfilePicture';
const useStyles = makeStyles((theme) => ({
    grow: {
        maxWidth: `calc(100%-240px)`,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginTop: '10px',
        fontWeight: 700,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: '1px solid #dddddd',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    red: {
        color: 'black',
        backgroundColor: 'rgb(255,255,255)'
    },
    space: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
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
    logo: {
        width: '30px',
        height: '30px',
        fill: 'white',
        backgroundColor: "rgb(4,136,255)",
        borderRadius: "50%",
        padding: '5px',
        marginBottom: '6px',
        marginRight: '10px',
    },
    padding: {
        paddingLeft: '10px',
        paddingRight: '20px',
    },
    nopadding: {
        padding: '0px',
    },
    avatar: {
        backgroundColor: 'rgba(182,32,224,0.71)',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        fontSize: '18px'
    },
    iconpadding: {
        paddingLeft: '15px',
        paddingRight: '15px',
    }


}));
export default function PrimarySearchAppBar(props, children) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            data-testid='menuclose'
            MenuListProps={{ disablePadding: true }}
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            {/* rendering profile list when user clicks on appbar avtar */}
            {props.profilelist}
        </Menu>
    );
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            data-testid='mobileclose'
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show  new mails" color="inherit">
                    <Badge color="secondary">
                        <HelpOutlineSharpIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show  new notifications" color="inherit">
                    <Badge color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.grow}>
            <AppBar position="fixed" className={classes.red}>
                <Toolbar className={classes.padding}>
                    <div className={classes.space} >
                        <div data-testid="brand">
                            {/* rendering the brand ZE-Transact */}
                            {props.brand}
                        </div>
                        <div >
                            <div className={classes.sectionDesktop}>
                                <IconButton aria-label="show 4 new mails" color="inherit" className={classes.iconpadding}>
                                    <Badge color="secondary" data-testid="help">
                                        <HelpOutlineSharpIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="show  new notifications" color="inherit" className={classes.iconpadding}>
                                    <Badge color="secondary" data-testid="notification">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    data-testid="iconbutton"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <div data-testid="picture">
                                        <ProfilePicture pictureStyle={classes.avatar} />
                                    </div>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            data-testid="mobilemenu"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
