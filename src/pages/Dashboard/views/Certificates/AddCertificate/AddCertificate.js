/* eslint-disable no-unused-vars */
import { Tooltip } from "@material-ui/core";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AddCertificateForm from "./AddCertificateForm";
var Spinner = require("react-spinkit");

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },

  input: {
    display: "none",
  },
}));

const AddCertificate = ({ setCertificates, handleClose, certificates }) => {
  const classes = useStyles();
  const [on, setOn] = useState(false);
  const [upload, setUpload] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState();
  let imgFile;
  const handleFile = (event) => {
    handleUpload(event.target.files[0]);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = (e) => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();

    imgFile = e.dataTransfer.files[0];
    handleUpload(imgFile);
    handleFileValidationAndUploading();
  };
  const handleFileValidationAndUploading = () => {
    setUpload(true);
  };
  const handleUpload = (file) => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set("key", "f16e0919dbce32c8326397f504a1e7b1");
    imageData.append("image", file);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        handleFileValidationAndUploading();
        setImageUpload(false);
      })
      .catch(function (error) {
        alert("failed to upload. try again");
      });
  };
  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 30px",
            marginBottom: "30px",
          }}
        >
          <Typography
            style={{
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
            }}
            variant="h6"
          >
            Add New Certificate
          </Typography>
          <Button onClick={handleClose} variant="contained">
            cancel
          </Button>
        </div>

        <Grid container justifyContent="center">
          <Grid
            onDragOver={(e) => handleDragOver(e)}
            onDragLeave={(e) => handleDragLeave(e)}
            onDrop={(e) => handleDrop(e)}
            item
            xs={12}
            md={5}
            style={{
              backgroundColor: "#F6FAFB",
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              padding: "100px 20px",
              marginBottom: "70px",
              margin: "0 10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {imageUpload && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <Spinner
                  style={{ marginTop: "30px", marginBottom: "10px" }}
                  name="line-spin-fade-loader"
                />
              </div>
            )}
            {image ? (
              <>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img style={{ height: "150px" }} src={image} alt="" />
                </div>
              </>
            ) : (
              <>
                <div>
                  {!upload && !imageUpload ? (
                    <span>
                      {on ? (
                        <Typography
                          style={{
                            fontWeight: "600",
                            fontSize: "30px",
                          }}
                          variant="subtitle2"
                        >
                          Release To Upload File
                        </Typography>
                      ) : (
                        <>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                            }}
                          >
                            <span>
                              <input
                                onChange={handleFile}
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                              />
                              <label htmlFor="contained-button-file">
                                <Tooltip title="Add Photo" placement="top">
                                  <ArrowUpwardIcon
                                    style={{
                                      fontSize: "50px",
                                      marginBottom: "15px",
                                      cursor: "pointer",
                                    }}
                                  />
                                </Tooltip>
                              </label>
                            </span>

                            <Typography
                              style={{
                                fontWeight: "600",
                                marginBottom: "15px",
                              }}
                              variant="subtile1"
                            >
                              Add Certificate Image
                            </Typography>
                            <Typography style={{}} variant="subtitle2">
                              click on arrow or drag and drop
                            </Typography>
                          </div>
                        </>
                      )}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              backgroundColor: "#fff",
              padding: "10px 20px",
              marginBottom: "30px",
              margin: "0 10px",
            }}
          >
            <AddCertificateForm
              handleClose={handleClose}
              setCertificates={setCertificates}
              certificates={certificates}
              image={image}
            ></AddCertificateForm>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AddCertificate;
