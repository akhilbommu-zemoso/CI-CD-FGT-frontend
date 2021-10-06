import React from 'react'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    top: {
        marginLeft: 20,
    },
    root: {
        color: 'green',
        '&$checked': {
            color: 'green',
        },
    },
    checked: {},
}));
function GeneralProfileCheckBox(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true);
    return (
        <div>
            <Grid item xs={6}>
                <div className={classes.top} onClick={props.method}>
                    <Checkbox
                        className={classes.root}
                        checked={props.value}
                        onChange={(event) => props.method(event)}
                        style={{ color: "rgb(4,136,255)" }}
                        name={props.name}
                    />
                </div>
            </Grid>
        </div>
    )
}
export default GeneralProfileCheckBox
