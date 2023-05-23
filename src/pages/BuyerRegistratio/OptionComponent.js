import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ArrowForwardIos } from "@material-ui/icons";

const OptionComponent = ({
  handleOptionSubmitBtn,
  step,
  back,
  setUserInfo,
  userInfo,
  name,
}) => {
  const data = [...step.options];
  const [state, setState] = useState(0);

  const [textField, setTextField] = useState(false);
  const handleOption = (e) => {
    if (e.currentTarget.textContent === "Others") {
      setTextField(true);
    } else {
      setTextField(false);
    }
    if (name === "team") userInfo.team = e.currentTarget.textContent;
    if (name === "targetedBuyer")
      userInfo.targetedBuyer = e.currentTarget.textContent;
    if (name === "productLine")
      userInfo.productLine = e.currentTarget.textContent;
    if (name === "priceRange")
      userInfo.priceRange = e.currentTarget.textContent;
    if (name === "coreFactorOfSourcing")
      userInfo.coreFactorOfSourcing = e.currentTarget.textContent;
    setUserInfo(userInfo);
    setState(state + 1);
  };
  let selectedItem = [];
  if (name === "team")
    selectedItem = [...data.filter((c) => c === userInfo.team)];
  if (name === "targetedBuyer")
    selectedItem = [...data.filter((c) => c === userInfo.targetedBuyer)];
  if (name === "productLine")
    selectedItem = [...data.filter((c) => c === userInfo.productLine)];
  if (name === "priceRange")
    selectedItem = [...data.filter((c) => c === userInfo.priceRange)];
  if (name === "coreFactorOfSourcing")
    selectedItem = [...data.filter((c) => c === userInfo.coreFactorOfSourcing)];

  if (textField) selectedItem = ["Others"];

  const handleInputValues = (e) => {
    console.log(e.target.name);
    if (e.target.name === "team") userInfo.team = e.currentTarget.value;
    if (e.target.name === "targetedBuyer")
      userInfo.targetedBuyer = e.currentTarget.value;
    if (e.target.name === "productLine")
      userInfo.productLine = e.currentTarget.value;
    if (e.target.name === "priceRange")
      userInfo.priceRange = e.currentTarget.value;
    if (e.target.name === "coreFactorOfSourcing")
      userInfo.coreFactorOfSourcing = e.currentTarget.value;
  };

  return (
    <div style={{ color: "white", margin: "auto" }} className="stepContent">
      <Typography
        style={{
          paddingBottom: "20px",
          textTransform: "capitalize",
          paddingTop: "10px",
        }}
        variant="h5"
        component="h2"
      >
        {step.title}
      </Typography>

      {data.map((option) => (
        <p onClick={(e) => handleOption(e)}>
          {option === selectedItem[0] ? (
            <Button className={"selectedBtn"} variant="outlined">
              {option}
            </Button>
          ) : (
            <Button className={"optionBtn"} variant="outlined">
              {option}
            </Button>
          )}
        </p>
      ))}
      {textField && (
        <form onSubmit={(e) => e.preventDefault()} className="otherTextFld">
          <input
            autoFocus
            onChange={(e) => handleInputValues(e)}
            name={name}
            style={{ padding: "15px 5px" }}
            placeholder="Write here"
          />
        </form>
      )}
      <div
        style={{
          paddingTop: "20px",
          paddingBottom: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          onClick={() => {
            back();
          }}
        >
          <ArrowBackIosIcon style={{ width: "12px" }} />
          Previous
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="secondary"
          onClick={handleOptionSubmitBtn}
        >
          Continue
          <ArrowForwardIos style={{ width: "12px" }} />
        </Button>
      </div>
    </div>
  );
};

export default OptionComponent;
