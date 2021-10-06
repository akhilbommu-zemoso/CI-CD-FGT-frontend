import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    error:{
        color:'red',
        fontSize: "12px",
        marginLeft: '10px',
        height: '10px'
    }
});

function ErrorField(props) {
    const classes = useStyles();
    return (
        <div className={classes.error}>
            {props.message}
        </div>
    )
}
export default ErrorField