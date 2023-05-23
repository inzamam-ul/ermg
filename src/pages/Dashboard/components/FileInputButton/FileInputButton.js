import React from "react";
import Button from "../../components/CustomButtons/Button";
const FileInputButton = ({ text, handleUpload }) => {
  return (
    <>
      <label style={{ margin: 0 }} htmlFor="myFile">
        <Button component="span">{text}</Button>
      </label>
      <input
        style={{ display: "none" }}
        onChange={handleUpload}
        type="file"
        id="myFile"
        name="myFile"
      />
    </>
  );
};

export default FileInputButton;
