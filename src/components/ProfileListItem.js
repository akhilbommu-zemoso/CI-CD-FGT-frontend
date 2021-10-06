import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  linksclass: {
    color: "black",
    paddingTop: "0px",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      textDecoration: "none",
    },
  },
  active: {
    backgroundColor: "rgb(4,136,255)",
    color: "white",
    "&:hover": {
      backgroundColor: "rgb(4,136,255)",
      opacity: 0.9,
    },
  },
  font: {
    fontSize: "14px",
  },
}));
export default function ProfileListItem(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Link className={classes.linksclass}>
          <ListItem
            data-testid="listitem"
            button={(props.selected >> props.index) & 1}
            classes={{ button: props.active }}
            onClick={() => {
              props.setSelected(2 ** props.index);
            }}
          >
            <ListItemText
              classes={{ primary: classes.font }}
              primary={props.itemName}
            />
          </ListItem>
        </Link>
      </div>
    </div>
  );
}
