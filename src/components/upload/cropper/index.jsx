import React, { useState, useRef, useContext } from "react";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import getCroppedImg, { generateDownload } from "../../../utils/cropImages";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import PropTypes from "prop-types";

import "./stiles.css";
import { SnackbarContext } from "../snackbar";
import { dataURLtoFile } from "../../../utils/dataURLtoFile";

const useStyles = makeStyles({
  iconButton: {
    position: "absolute",
    top: "2%",
    right: "2%",
  },
  cancelIcon: {
    color: "#00a3c8",
    fontSize: "50px",
    "&:hover": {
      color: "red",
    },
  },
});
const RenderCropper = ({ handleCropper }) => {
  const classes = useStyles();
  const inputRef = useRef();
  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const setStateSnackbarContext = useContext(SnackbarContext);

  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const onDownload = () => {
    if (!image) return setStateSnackbarContext(true, "Please select an image!", "warning");
    generateDownload(image, croppedArea);
    setImage(null);
  };

  const onClear = () => {
    if (!image) return setStateSnackbarContext(true, "Please select an image!", "warning");
    setImage(null);
  };

  const onUpload = async () => {
    if (!image) return setStateSnackbarContext(true, "Please select an image!", "warning");
    const canvas = await getCroppedImg(image, croppedArea);
    const canvasDataUrl = canvas.toDataURL("image/jpeg");
    const convertedUrlToFile = dataURLtoFile(canvasDataUrl, "cropped-image.jpeg");
    console.log(convertedUrlToFile);

    const formdata = new FormData();
    formdata.append("croppedImage", convertedUrlToFile);
  };

  return (
    <div className="container">
      <IconButton className={classes.iconButton} onClick={handleCropper}>
        <CancelIcon className={classes.cancelIcon} />
      </IconButton>
      <div className="container-cropper">
        {image ? (
          <>
            <div className="cropper">
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>{" "}
            <div className="slider">
              <Slider
                min={1}
                max={3}
                step={0.1}
                value={zoom}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div>
          </>
        ) : null}
      </div>

      <div className="container-buttons">
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={onSelectFile}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
          onClick={() => onClear()}
        >
          CLEAR
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={triggerFileSelectPopup}
          style={{ marginRight: "10px" }}
        >
          CHOOSE
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onDownload}
          style={{ marginRight: "10px" }}
        >
          DOWNLOAD
        </Button>
        <Button variant="contained" color="secondary" onClick={onUpload}>
          UPLOAD
        </Button>
      </div>
    </div>
  );
};
RenderCropper.propTypes = {
  handleCropper: PropTypes.func,
};

export default RenderCropper;
