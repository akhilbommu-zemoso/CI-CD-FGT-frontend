import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ProfileFormFields } from './BasicProfileTop'
import Avtar from './Avtar'
import Divider from '@material-ui/core/Divider';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FTButton from '../atoms/FTButton'
import ProfileDeleteAccount from './ProfileDeleteAccount'
import ProfileEmail from './ProfileEmail'
import ProfilePassword from './ProfilePassword'
const useStyles = makeStyles((theme) => ({
    padding: {
        padding: "20px"
    },
    colorbutton: {
        marginTop: '50px',
        color: 'white',
        textTransform: 'none',
        marginBottom: '50px',
        backgroundColor: 'rgb(4,136,255)',
        '&:hover': {
            color: 'white',
            backgroundColor: 'rgb(4,136,255)'
        },
    },
    flex: {
        display: "flex",
        justifyContent: "space-between"
    },
    alignRight: {
        width: '100%',
        textAlign: 'right'
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    }
}));

export default function BasicProfile(props) {
    const classes = useStyles();
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      const checkErrorMessage=()=>{
        if(props.errorMessage.name===""&&props.errorMessage.phone==="")
            return false;
        else
            return true;
      }
    return (
        <div>
            <div className={classes.padding}>
                <div className={classes.flex}>
                    <ProfileFormFields
                        id="profileform"
                        values={props.values}
                        handleChange={(event) => props.handleChange(event)}
                        handleChangeCountry={(event)=>props.handleChangeCountry(event)}
                        errorMessage={props.errorMessage}/>
                    <Avtar imageData={props.values.profilePicture}
                        userName = {props.values.name}
                        handleChangePicture={(data)=>props.handleChangePicture(data)}/>
                </div>
            </div>
            <Divider />
            <div className={classes.padding} data-testid="profileemail">
                <ProfileEmail email={props.values.email} />
            </div>
            <Divider />
            <div className={classes.padding} data-testid="profilepassword">
                <ProfilePassword />
            </div>
            <Divider />
            <div className={classes.padding} data-testid="profiledeleteaccount">
                <ProfileDeleteAccount />
            </div>
            <div className={classes.alignRight}>
                    <FTButton
                        data-testid="button"
                        name="Save"
                        method={(event) => props.postToUserApi()}
                        disabled={checkErrorMessage()}
                    />
                <Snackbar
                    data-testid='snackbar'
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={props.open} autoHideDuration={6000}
                    onClose={(event, reason) => props.handleClose(event, reason)}>
                    <Alert onClose={(event, reason) => props.handleClose(event, reason)} severity="success">
                        Changes Saved!
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
}