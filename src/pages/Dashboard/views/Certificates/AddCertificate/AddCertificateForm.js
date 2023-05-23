import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const textileCertificateData = [
  {
    value: "RWS - Responsible Wool Standard",
  },
  {
    value: "RDS - Responsible Down Standard",
  },
  {
    value: "RCS 100 - Recycled Claim Standard",
  },
  {
    value: "RCS blended - Recycled Claim Standard",
  },
  {
    value: "OCS 100 - Organic Content Standard",
  },
  {
    value: "OCS Blended - Organic Content Standard",
  },
  {
    value: "IVN - Naturtextil",
  },
  {
    value: "GRS - Global Recycle Standard",
  },
  {
    value: "GOTS - Global Organic Textile Standard",
  },
  {
    value: "CCS - Content Claim Standard",
  },
  {
    value: "SFA - Sustainable Fibre Alliance (Sustainable Cashmere Standard)",
  },
];
const garmentsCertificateData = [
  {
    value: "ISO 9001 (2015)",
  },
  {
    value: "SA8000",
  },
  {
    value: "Fair Trade",
  },
  {
    value: "Global Organic Textile Standard (GOTS)",
  },
  {
    value: "FLOCERT",
  },
  {
    value: "Worldwide Responsible Apparel Production (WRAP)",
  },
  {
    value: "Fair Wear Foundation (FWF)",
  },
  {
    value: "BlueSign",
  },
];
const companyTypeData = [
  {
    value: "Textile",
  },
  {
    value: "Garments",
  },
];

const AddCertificateForm = ({
  image,
  handleClose,
  setCertificates,
  certificates,
}) => {
  const [optionData, setOptionData] = useState([]);
  const [companyType, setCompanyType] = useState("");
  const [certificateName, setCertificateName] = useState("");
  const [IssueDateValue, setIssueDateValue] = React.useState(new Date());
  const [expireDateValue, setExpireDateValue] = React.useState(new Date());
  const [expireDatePickerOpen, setExpireDatePickerOpen] = React.useState(false);
  const [issueDatePickerOpen, setIssueDatePickerOpen] = React.useState(false);


  // handle date pickers

  const handleExpireDatePickerOpen = expireDatePickerOpen;
  const handleIssueDatePicker = issueDatePickerOpen;

  const handleExpireDatePickerClose = () => {
    setExpireDatePickerOpen(false);
  };
  const handleIssueDatePickerPopUpClose = () => {
    setIssueDatePickerOpen(false);
  };

  //  handle date changes
  const handleIssueDateChange = (newValue) => {
    setIssueDateValue(newValue);
    handleIssueDatePickerPopUpClose();
  };
  const handleExpireDateChange = (newValue) => {
    setExpireDateValue(newValue);
    handleExpireDatePickerClose();
  };

  // handle add certificate form
  
  const { handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    if (!image) alert("please upload a image");

    if (image) {
      const certificateData = {
        certificateImg: image,
        certificateName: certificateName,
        CompanyType: companyType,
        IssueData: IssueDateValue,
        ExpiryData: expireDateValue,
      };
      setCertificateName("");
      setCompanyType("");
      const newCertificates = [...certificates];
      newCertificates.push(certificateData);
      setCertificates(newCertificates);
      reset();
      handleClose();
    }
  };

  const handleCertificateName = (event) => {
    setCertificateName(event.target.value);
  };
  console.log(certificateName);
  const handleCompanyType = (event) => {
    setCompanyType(event.target.value);
    if (event.target.value === "Textile") {
      setOptionData(textileCertificateData);
    }
    if (event.target.value === "Garments") {
      setOptionData(garmentsCertificateData);
    }
  };

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          style={{ marginBottom: "20px", padding: "15px 0" }}
          id="standard-select-currency"
          select
          label="Company"
          value={companyType}
          onChange={handleCompanyType}
          required
        >
          {companyTypeData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ marginBottom: "20px", padding: "15px 0" }}
          id="standard-select-currency"
          select
          label="Certificate"
          value={certificateName}
          onChange={handleCertificateName}
          required
        >
          {!companyType && <MenuItem>Select company name</MenuItem>}
          {optionData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{ marginBottom: "20px", padding: "15px 0" }}
          label="Date of Issue"
          value={IssueDateValue.toDateString()}
          onClick={()=> setIssueDatePickerOpen(true)}
        />
        <Popover
          open={handleIssueDatePicker}
          anchorEl={issueDatePickerOpen}
          onClose={handleIssueDatePickerPopUpClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <DatePicker
            inline
            selected={IssueDateValue}
            onChange={(newValue) => {
              handleIssueDateChange(newValue);
            }}
          />
        </Popover>

        
        <TextField
          style={{ marginBottom: "20px", padding: "15px 0" }}
          label="Date of Expire"
          value={expireDateValue.toDateString()}
          onClick={()=> setExpireDatePickerOpen(true)}
        />
        <Popover
          open={handleExpireDatePickerOpen}
          anchorEl={expireDatePickerOpen}
          onClose={handleExpireDatePickerClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <DatePicker
            inline
            selected={expireDateValue}
            onChange={(newValue) => {
              handleExpireDateChange(newValue);
            }}
          />
        </Popover>
        <Grid item xs={3}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#388e3c" }}
            color="primary"
          >
            save
          </Button>
        </Grid>
      </form>
    </div>
  );
};

export default AddCertificateForm;
