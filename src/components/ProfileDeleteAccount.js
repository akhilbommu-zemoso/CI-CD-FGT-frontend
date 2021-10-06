import React, { useState } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { Link, Redirect } from 'react-router-dom'
import { logout } from "../utils/index"
const useStyles = makeStyles({
    textContent: {
        fontSize: '14px',
        color: "rgb(72,84,96)",
        marginTop: '10px',
    },
    deleteHeading: {
        fontSize: '18px',
        fontWeight: 900,
        color: "rgb(22,101,216)",
        marginBottom: "20px",
        borderBottom: "2px dashed rgb(22,101,216)",
        '   &:focus': {
            color: "red",
            borderBottom: "2px dashed red",
        },
    },
    linksclass: {
        color: "rgb(22,101,216)",
        paddingTop: '0px',
        textDecoration: 'none',
        '&:hover': {
            color: '#CC0000',
            textDecoration: 'none',
            borderBottom: "2px dashed #CC0000",
        },
    },
});
function ProfileDeleteAccount() {
    const [customError, setcustomError] = useState(null);
    const handleDelete = () => {
        var flag = window.confirm("You'll be deleted permanently, continue?");
        if (flag)
            postToApi();
    }
    const postToApi = () => {
        var accessToken = localStorage.getItem("accessToken");
        fetch(process.env.REACT_APP_BACKEND_USER, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
            },
        }).then(response => {
            console.log("response---", response)
            if (!response.ok) {
                console.log("status--------" + response.status);
                throw new Error(response.status)
            }
            logout();
            window.location.href = window.location.origin;
        })
            .catch((error) => {
                console.error('Error Occured at:', error, typeof (error));
                if (error.message == "401") {
                    setcustomError("Unauthorized Access");
                }
                else if (error.message == "500") {
                    setcustomError("Internal Server Error");
                }
                else {
                    setcustomError("Unable to fetch resource")
                }
                return <Redirect to="/error" />
            });
    };
    const classes = useStyles();
    return (
        <div>
            <div>
                <span className={classes.deleteHeading} >
                    <Link
                        data-testid="link"
                        className={classes.linksclass}
                        onClick={() => handleDelete()}
                    >Delete my account permanently</Link>
                </span>
            </div>
            <div className={classes.textContent} data-testid="content">
                You will receive email to confirm your decision<br />
             If you delete the account data will be permanently erased. so, please
             turn on sync data to keep your files safe.
          </div>
        </div>
    );
}
export default ProfileDeleteAccount