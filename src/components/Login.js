import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TrendingUpSharpIcon from "@material-ui/icons/TrendingUpSharp";
import FTButton from "../atoms/FTButton";
import { FTCard } from "../atoms/FTCard";
const useStyles = makeStyles({
    card: {
        borderRadius: "10px",
        width: "400px",
        height: "350px",
        marginTop: "100px",
    },
    centered: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    header: {
        fontSize: 30,
        color: "black",
        fontWeight: 900,
        marginTop: "20px",
    },
    logo: {
        width: "70px",
        height: "70px",
        fill: "white",
        backgroundColor: "rgb(4,136,255)",
        borderRadius: "50%",
        padding: "5px",
    },
    content: {
        marginTop: "20px",
    },
    blueText: {
        color: "blue",
        fontWeight: 900,
    },
    footer: {
        marginTop: "30px",
    },
    color: {
        marginTop: "30px",
        color: "white",
        backgroundColor: "rgb(4,136,255)",
        "&:hover": {
            color: "white",
            backgroundColor: "rgb(4,136,255)",
        },
    },
});

export default function Login() {
    const authLogin = () => {
        var domain = process.env.REACT_APP_AUTH0_DOMAIN;
        var client_id = process.env.REACT_APP_AUTH0_CLIENTID;
        var redirect_uri = window.location.origin+""+process.env.REACT_APP_AUTH0_REDIRECT_URI;
        console.log(redirect_uri)
        const url = `https://${domain}/authorize?scope=openid%20profile%20email%20user_metadata%20picture&audience=login&response_type=token id_token&client_id=${client_id}&redirect_uri=${redirect_uri}&nonce=test&connection=google-oauth2`;
        window.location = url;
    };
    const classes = useStyles();
    const header = () => {
        return (
            <>
                <TrendingUpSharpIcon fontSize="large" className={classes.logo} />
                <Typography className={classes.header}>
                    Please Click on Login
                </Typography>
            </>
        );
    };
    return (
        <div className={classes.centered}>
            <FTCard
                cardStyle={classes.card}
                headerStyle={classes.header}
                contentStyle={classes.content}
                footerStyle={classes.footer}
                header={header()}
                content={
                    <>
                        to continue
                        <span className={classes.blueText}> to ZE-Transaction</span>
                    </>
                }
                footer={
                    <FTButton data-testid="button" name="Login" method={authLogin} />
                }
            />
        </div>
    );
}
