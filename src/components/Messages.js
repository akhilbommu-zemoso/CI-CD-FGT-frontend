import React from 'react'
import GeneralProfileCheckBox from './GeneralProfileCheckBox'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    align: {
        display: 'flex',
        fontSize: '14px',
    },
    top: {
        marginTop: 12,
        fontSize: '14px',
    },
    label: {
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'left',
        color: 'rgb(158,160,165)',
        fontSize: '14px',
    },
}));
function Messages(props) {
    const classes = useStyles();
    return (
        <div className={classes.align}>
            <GeneralProfileCheckBox name={props.name} value={props.value} method={(event) => props.method(event)} />
            <div className={classes.top}>
                {props.label}
            </div>
        </div>
    );
}
export default Messages
