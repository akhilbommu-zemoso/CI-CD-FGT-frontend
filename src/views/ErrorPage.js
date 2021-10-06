import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
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
    fontSize: 20,
    color: "black",
    fontWeight: 900,
    marginTop: "20px",
    color: "#cc0000",
  },
  content: {
    marginTop: "20px",
  },
  footer: {
    marginTop: "40px",
  },
});

const ErrorPage = (props) => {
  const classes = useStyles();
  const getMessage = () => {
    var url = window.location.href;
    var res = decodeURI(url.split("?")[1]);
    return res;
  };
  const redirect = () => {
    window.location.href = window.location.origin;
  };
  const header = () => {
    return (
      <>
        <img src={require("../assets/errorlogo.png")} />
        <Typography className={classes.header}>{getMessage()}</Typography>
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
        content={"Please click on below button to go back to the login page"}
        footer={
          <FTButton data-testid="button" name="Go Back" method={redirect} />
        }
      />
    </div>
  );
};
export default ErrorPage;
