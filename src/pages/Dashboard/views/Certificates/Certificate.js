import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CertificateCard from "./CertificateCard/CertificateCard";
import AddIcon from "@material-ui/icons/Add";
import "./Certificate.css";
import Iso from "./photos/iso.jpg";
import rws from "./photos/rws.jpg";
import { Modal } from "@material-ui/core";
import AddCertificate from "./AddCertificate/AddCertificate";
import SortAndSearch from "../Suppliers/Component/SortAndSearch/SortAndSearch";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Container from "../../components/Card/Card.js";
import ContainerHeader from "../../components/Card/CardHeader.js";

const Certificate = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [certificates, setCertificates] = useState([
    {
      certificateImg: Iso,
      certificateName: "ISO 9001 (2015)",
      IssueData: "2019-04-03",
    },
    {
      certificateImg: rws,
      certificateName: "RWS - Responsible Wool Standard",
      IssueData: "2020-04-03",
    },
  ]);

  const handleRemoveBtn = (data) => {
    const newArray = certificates.filter(
      (element) => element.certificateName !== data.certificateName
    );
    setCertificates(newArray);
  };

  console.log(certificates);
  return (
    <>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Container plain>
              <ContainerHeader
                plain
                color="primary"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "3px 10px",
                  flexWrap: "wrap",
                }}
              >
                {/* <p className={classes.cardCategoryWhite}>Part library</p> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Button
                      aria-controls={open ? "menu-list-grow" : undefined}
                      aria-haspopup="true"
                      onClick={handleOpen}
                      style={{
                        padding: "7px 14px",
                        background: "#b3b3b3",
                        color: "white",
                        borderRadius: 2,
                        marginRight: 10,
                        fontSize: 13,
                      }}
                    >
                      <AddIcon style={{ color: "white" }} />
                      Add new Certificate
                    </Button>
                  </div>
                </div>
                <SortAndSearch />
              </ContainerHeader>
            </Container>
          </GridItem>
        </GridContainer>

        {/* <div style={{ marginTop: "50px" }}>
          <Grid
            xs={12}
            sm={12}
            style={{ padding: "20px 10px", margin: "0px 10px" }}
            className="createBar"
          >
            <Button
              onClick={handleOpen}
              style={{
                color: "white",
                padding: "7px 14px",
                backgroundColor: "rgb(179, 179, 179)",
                fontSize: "13",
                borderRadius: "2px",
                
              }}
              variant="outlined"
              startIcon={<AddIcon />}
            >
              Add new Certificate
            </Button>
          </Grid>
        </div> */}
        <Box p={2} style={{ flexGrow: "1", marginTop: "20px" }}>
          <Grid container spacing={3}>
            {certificates.map((element) => (
              <CertificateCard
                key={element}
                handleRemoveBtn={handleRemoveBtn}
                element={element}
              ></CertificateCard>
            ))}
          </Grid>
        </Box>
      </div>
      <Modal
        style={{ display: "flex" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid
          xs={12}
          md={8}
          sm={10}
          style={{
            backgroundColor: "white",
            margin: "auto",
            padding: "20px 10px",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <AddCertificate
            handleClose={handleClose}
            setCertificates={setCertificates}
            certificates={certificates}
          ></AddCertificate>
        </Grid>
      </Modal>
    </>
  );
};

export default Certificate;
