import React, { useState, useEffect } from "react";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import { FormControl, InputLabel, Input, InputBase } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import { isLogin } from '../utils/index'
const useStyles = makeStyles({
  circle: {
    height: "150px",
    width: "150px",
    backgroundColor: "rgba(182,32,224,0.71)",
    borderRadius: "50%",
    fontSize: 50,
  },
});
export default function Avtar(props) {
  const classes = useStyles();
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [initialSetUp, setInitialSetUp] = useState();
  const [picObject, setPicObject] = useState({
    id: 0,
    photoBlob: null,
    photoContentLength: 0,
    photoContentType: null,
  });
  const handleImageUpload = async (event) => {
    const [file] = event.target.files;
    const { current } = uploadedImage;
    const reader = new FileReader();
    if (file && file.type.match("image.*")) {
      reader.readAsDataURL(file);
      reader.onload = async (event) => {
        getData(event.target.result, file.type).then((data) => {
          setPicObject(data);
          props.handleChangePicture(data);
        });
      };
    }
  };
  const getData = async (result, fileType) => {
    let photoData = result.split(",")[1];
    let temp = { ...picObject };
    temp.photoContentType = fileType;
    temp.photoContentLength = photoData.length;
    temp.photoBlob = await photoData;
    return temp;
  };
  useEffect(() => {
    picObject.id=props.imageData.id;
    if (props.imageData.photoContentLength) {
      setPicObject(props.imageData);
    }
  }, [initialSetUp]);
   
  useEffect(() => {
    console.log(picObject.photoContentLength);
    if (picObject.photoContentLength) {
      const { current } = uploadedImage;
      current.src = "data:"+picObject.photoContentType+";base64," + picObject.photoBlob;
    }
  }, [picObject]);
  return (
    <div>
      <input
        id="inputfile"
        data-testid="avtarinput"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={imageUploader}
        style={{ display: "none" }}
      />
      <div data-testid="uploadclick" onClick={() => imageUploader.current.click()}>
        {picObject.photoContentLength ? (
          <div>
            <img ref={uploadedImage} className={classes.circle} />
          </div>
        ) : (
          <Avatar aria-label="label" className={classes.circle}>
            {isLogin() && JSON.parse(localStorage.getItem('user')).name.substring(0,2).toUpperCase()}
          </Avatar>
        )}
      </div>
    </div>
  );
}