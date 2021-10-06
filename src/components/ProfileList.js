import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { ProfileFooter, ProfileHeader } from "../atoms/ProfileAtom";
import ProfileListItem from "./ProfileListItem";
import List from "@material-ui/core/List";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minWidth: 340,
    margin: 15,
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    marginTop: 10,
  },
}));

export default function ProfileList() {
  const classes = useStyles();
  const listItems = [
    "Profile settings",
    "Manage transactions",
    "Manage categories",
    "Manage bank account",
    "Support",
    "Privacy",
  ];
  const [selected, setSelected] = React.useState(0);
  return (
    <div className={classes.root}>
      <ProfileHeader />
      <Divider />
      <List component="nav">
        {listItems.map((listItem, index) => {
          index += 1;
          return (
            <ProfileListItem
              index={index}
              itemName={listItem}
              selected={selected}
              setSelected={(updatedIndex) => setSelected(updatedIndex)}
            />
          );
        })}
      </List>
      <Divider />
      <ProfileFooter />
    </div>
  );
}