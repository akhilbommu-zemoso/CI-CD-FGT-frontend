import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function Frequency(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
            fontSize: '14px',
            '&:focus': {
                outline: 'none',
                border: 'none',
                textDecoration: 'none'
            },
        },
        selectEmpty: {
            width: 130,
            height: 35,
            maxHeight: '50px',
            marginLeft: 12,
            fontSize: '14px',

        },
        top: {

        }
    }));
    const classes = useStyles();
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <div>
                    <Select
                        data-testid="select"
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        name={props.name}
                        value={props.value}
                        onChange={(event) => props.method(event)}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                       { props.items.map((item,index)=>{
                            return <MenuItem value={item}>{item}</MenuItem>
                        })}
                    </Select>
                </div>
            </FormControl>
        </div>
    )
}

export default Frequency
