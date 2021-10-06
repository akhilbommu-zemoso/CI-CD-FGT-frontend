import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { isLogin } from '../utils/index'
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles({
    color:{
        backgroundColor: "rgba(182,32,224,0.71)",

    }
});
export default function ProfilePicture(props) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      {isLogin() && user.profilePicture.photoContentLength ? (
        <div>
          <Avatar
            alt={user.name}
            src={"data:"+user.profilePicture.photoContentType+";base64," + user.profilePicture.photoBlob}
            className={props.pictureStyle}
          />
        </div>
      ) : (
        <Avatar aria-label="label" className={props.pictureStyle}>
          {user.name.substring(0,2).toUpperCase()}
        </Avatar>
      )}
    </>
  );
}
