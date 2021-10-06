import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    flexpassword: {
        display: "flex",
        justifyContent: 'space-between',
        alignContent: 'center',
        height: '30px'
    },

    passwordHeading: {
        fontSize: '18px',
        color: "rgb(72,84,96)",
        fontWeight: 700,
    },

    change: {
        color: "rgb(22,101,216)",
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: "2px dashed rgb(22,101,216) ",
            textDecoration: 'none',
        }
    },
});

function ProfilePassword() {
    const classes = useStyles();
    return (
        <div className={classes.flexpassword}>
            <div>
                <span className={classes.passwordHeading}>Password</span>
            </div>
            <div >
                <Link className={classes.change}>Change</Link>
            </div>
        </div>
    );
}
export default ProfilePassword