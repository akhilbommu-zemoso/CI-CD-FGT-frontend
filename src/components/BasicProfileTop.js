import React, { useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input, InputBase, Select, MenuItem,TextField } from "@material-ui/core";
import CountrySelect from "./CountryField"
import BootstrapInput from '../atoms/TextField'
import ErrorField from '../atoms/ErrorField'
const useStyles = makeStyles((theme) => ({
    alignField: {
        paddingBottom: "20px"
    },
    labelSize: {
        fontSize: "20px",
        color: "rgb(72,84,96)",
    },
    formControl: {
        backgroundColor: "white",
        fontSize: 16,
        width: "350px",
    },
    circle: {
        height: "150px",
        width: "150px",
        backgroundColor: "pink",
        borderRadius: "50%"
    }
}));
function ProfileFormFields({ values, handleChange,handleChangeCountry,errorMessage }) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.alignField}>
                <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="name" className={classes.labelSize} >
                        User Name
                   </InputLabel>
                <BootstrapInput data-testid="input" name="name" value={values.name} id="name" onChange={(event) => handleChange(event)} autoComplete="off" />
                </FormControl>
                <ErrorField message={errorMessage.name}/>
            </div>
            <div className={classes.alignField}>
                <FormControl className={classes.margin}>
                    <InputLabel shrink htmlFor="phone" className={classes.labelSize}>
                        Phone Number
        </InputLabel>
                    <BootstrapInput name="phone" inputProps={{ pattern: "[a-z]" }} required value={values.phone} id="phone" onChange={(event) => handleChange(event)} autoComplete="off"/>
                </FormControl>
                <div>
                    <ErrorField message={errorMessage.phone}/>
                    </div>
            </div>
            <CountrySelect country={values.country}
                handleChangeCountry={(event)=>handleChangeCountry(event)}
            />
        </div>
    );
}
export { ProfileFormFields}