import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { ProfileFooter, ProfileHeader } from "../atoms/ProfileAtom";
import ProfileListItem from "./ProfileListItem";
import List from "@material-ui/core/List";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 340,
    height: 560,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgb(234,237,243)",
  },
  label: {
    marginTop: 15,
    marginBottom: 10,
    textAlign: "left",
    color: "rgb(158,160,165)",
    fontSize: 14,
    marginLeft: 15,
  },
  active: {
    backgroundColor: "rgb(4,136,255)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(4,136,255)",
      opacity: 0.9,
    },
  },
}));
export default function DetailsProfileList() {
  const classes = useStyles();
  const listItems = [
    "Profile settings",
    "Manage transactions",
    "Manage categories",
    "Manage bank account",
    "Support",
    "Privacy",
  ];
  const [selected, setSelected] = React.useState(2);
  return (
    <div className={classes.root}>
      <div className={classes.label}>YOUR DETAILS</div>
      <List component="nav">
        {listItems.map((listItem, index) => {
          index += 1;
          return (
            <ProfileListItem
              index={index}
              itemName={listItem}
              active={classes.active}
              selected={selected}
              setSelected={(updatedIndex) => setSelected(updatedIndex)}
            />
          );
        })}
      </List>
      <div className={classes.margin}>
        <Divider />
      </div>
      <ProfileFooter />
    </div>
  );
}