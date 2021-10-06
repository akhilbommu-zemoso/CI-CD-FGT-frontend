import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
const useStyles = makeStyles({
    flex: {
        display: "flex",
        justifyContent: "space-between",
    },

    mediumBold: {
        fontWeight: 600,
    },
    bold: {
        fontWeight: 700,
        fontSize: '18px',
        marginBottom: '20px',
    },
    textContent: {
        fontSize: '14px',
        color: "rgb(72,84,96)",
        marginTop: '10px',
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
function ProfileEmail(props) {
    const classes = useStyles();
    return (
        <div className={classes.flex}>
            <div >
                <span className={classes.passwordHeading}>Email</span><br />
                <div className={classes.textContent}>Your email address is
                 <span className={classes.mediumBold}> {props.email}</span>
                </div>
            </div>
            <div>
                <Link className={classes.change}>Change</Link>
            </div>
        </div>
    );
}
export default ProfileEmail