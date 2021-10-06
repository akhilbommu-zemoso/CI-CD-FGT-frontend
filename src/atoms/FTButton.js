import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    color: {
        color: 'white',
        textTransform: 'none',
        backgroundColor: 'rgb(4,136,255)',
        '&:hover': {
            color: 'white',
            backgroundColor: 'rgb(4,136,255)'
        },
    }
});

function FTButton(props) {
    const classes = useStyles();
    return (
        <Button
                id="button"
                data-testid="button"
                variant="contained"
                classes={{ root: classes.color }}
                onClick={props.method}
                disabled={props.disabled}
        >
            {props.name}
        </Button>
    )
}
export default FTButton