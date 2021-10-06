import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import GenralProfileSettings from "../atoms/GenralProfileSettingName";
import GeneralProfileCheckBox from "./GeneralProfileCheckBox";
import Frequency from "../atoms/Frequency";
import Messages from "./Messages";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FTButton from "../atoms/FTButton";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontWeight: "16px",
    backgroundColor: theme.palette.background.paper,
    fontSize: "14px",
  },
  red: {
    backgroundColor: "white",
    boxShadow: "0px 0px 1px #9E9E9E",
    fontSize: "14px",
  },
  color: {
    color: "black",
    paddingTop: "20px",
    fontSize: "14px",
  },
  align: {
    textAlign: "bottom",
    fontSize: "14px",
  },
  text: {
    textTransform: "none",
    fontWeight: 500,
    fontSize: "14px",
    textAlign: "center",
    "&:focus": {
      outline: "none",
      border: "none",
    },
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  label: {
    marginBottom: 10,
    textAlign: "left",
    color: "rgb(158,160,165)",
    fontSize: "14px",
  },
  labelmessage: {
    marginBottom: 10,
    textAlign: "left",
    color: "rgb(158,160,165)",
    fontSize: "14px",
    marginLeft: 30,
  },
  spacearound: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    marginLeft: 45,
    fontSize: "14px",
  },
  margin: {
    marginTop: 15,
    marginBottom: 30,
    fontSize: "14px",
  },
  alignRight: {
    width: "100%",
    textAlign: "right",
    fontSize: "14px",
  },
  rightmargin: {
    marginRight: "100px",
    fontSize: "14px",
  },
  indicator: {
    backgroundColor: "blue",
    fontSize: "14px",
  },
  topRight: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
}));
function GeneralProfile(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const settingCheckboxItems = [
    "Daily remind adding Expenses Income",
    "Monthly/weekly summary",
    "Use calculator to enter amount",
  ];
  const settingCheckboxItemsLength = settingCheckboxItems.length;
  const settingDropDownItems = [
    {
      description: "Default time period",
      items: ["Daily", "Weekly", "Monthly"],
    },
    {
      description: "Default date of month starting",
      items: ["1", "2", "3"],
    },
    {
      description: "Remind me before the bill dues",
      items: ["1 Day", "2 Days", "3 Days"],
    },
  ];
  const notificationCheckboxItems = [
    "Notify me when expenses exceeds 70%",
    "When new bill is added",
    "Amount debited/credited from bank account",
    "Notify me when I am exceeding the goal period",
    "Notify me when I reach my goal",
    "Recurring expenses due ",
    "Manage uncategorized ",
  ];
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <div>
      <div className={classes.label}>SETTINGS</div>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          {settingCheckboxItems.map((settingCheckboxItem, index) => {
            index += 1;
            return (
              <div className={classes.row}>
                <GenralProfileSettings setting={settingCheckboxItem} />
                <div style={{ marginRight: "100px" }}>
                  <GeneralProfileCheckBox
                    value={props.result.setting[`settingType${index}`]}
                    name={`setting_settingType${index}`}
                    method={(event) => props.method(event)}
                  />
                </div>
              </div>
            );
          })}
          {settingDropDownItems.map((settingDropDownItem, index) => {
            index += 1;
            return (
              <div className={classes.row}>
                <GenralProfileSettings setting={settingDropDownItem.description} />
                <Frequency
                  items={settingDropDownItem.items}
                  value={
                    props.result.setting[
                      `settingType${index + settingCheckboxItemsLength}`
                    ]
                  }
                  name={`setting_settingType${index + settingCheckboxItemsLength}`}
                  method={(event) => props.method(event)}
                />
              </div>
            );
          })}
        </Grid>
      </Grid>
      <div className={classes.margin}>
        <Divider />
      </div>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <div className={classes.label}>NOTIFICATIONS</div>
          {notificationCheckboxItems.map((notificationCheckboxItem, index) => {
            index += 1;
            return (
              <div className={classes.row}>
                <GenralProfileSettings setting={notificationCheckboxItem} />
                <div style={{ marginRight: "100px" }}>
                  <GeneralProfileCheckBox
                    value={
                      props.result.notification[`notificationType${index}`]
                    }
                    name={`notification_notificationType${index}`}
                    method={(event) => props.method(event)}
                  />
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid item xs={4}>
          <div className={classes.labelmessage}>MESSAGES</div>
          <Messages
            value="Email"
            name="message_emailMessages"
            label="Email"
            value={props.result.message.emailMessages}
            method={(event) => props.method(event)}
          />
          <Messages
            value="Test messages"
            name="message_textMessages"
            label="Text message"
            value={props.result.message.textMessages}
            method={(event) => props.method(event)}
          />
        </Grid>
      </Grid>
      <div className={classes.alignRight}>
        <FTButton
          data-testid="button"
          name="Save"
          method={(event) => props.postToApi()}
        />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={props.open}
        autoHideDuration={6000}
        onClose={(event, reason) => props.handleClose(event, reason)}
      >
        <Alert
          onClose={(event, reason) => props.handleClose(event, reason)}
          severity="success"
        >
          Changes Saved!
        </Alert>
      </Snackbar>
    </div>
  );
}
export default GeneralProfile;
