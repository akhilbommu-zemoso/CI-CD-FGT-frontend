import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    top: {
        marginTop: 5,
        marginBottom: 20,
        fontSize: '14px',
    },
}));
function GenralProfileSettings(props) {
    const classes = useStyles();
    return (
        <Grid item xs={6}>
            <div className={classes.top}>
                {props.setting}
            </div>
        </Grid>
    )
}
export default  GenralProfileSettings 
