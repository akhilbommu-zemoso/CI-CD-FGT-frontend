import React from 'react'
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core"
const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
        fontSize: '14px',
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: "white",
        border: "1px solid #ced4da",
        fontSize: '14px',
        width: "300px",
        height: "27px",
        padding: "6px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);
export default BootstrapInput