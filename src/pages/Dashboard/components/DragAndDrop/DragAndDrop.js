import React, { useState } from "react";

const DragAndDrop = () => {
  const [on, setOn] = useState(false);

  const [upload, setUpload] = useState(false);

  let imgFile;
  const handleFile = (event) => {
    setUpload(true);
    imgFile = event.target.files[0];
    handleFileValidationAndUploading();
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
    handleFileValidationAndUploading();
  };
  const handleFileValidationAndUploading = () => {
    setUpload(true);
  };

  return (
    <div
      style={{ padding: 5 }}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
      className="dropBox text-center"
    >
      {!upload ? (
        <h1 className="Drop-content">
          {on ? "Release To Upload  File" : "Drag & Drop"}
        </h1>
      ) : (
        <h1 className="Drop-content text-success">File uploaded</h1>
      )}
      or
      <br />
      <label
        style={{
          backgroundColor: "#E7E6E7",
          color: "#6F6A69",
          //   width: "80%",
          padding: 5,
          marginTop: 5,
        }}
        className="btn  "
        htmlFor="ImgFile"
      >
        Browse
      </label>
      <input
        type="file"
        onChange={handleFile}
        name="file"
        id="ImgFile"
        hidden
      />
    </div>
  );
};

export default DragAndDrop;
