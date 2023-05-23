import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteSweepIcon from "@material-ui/icons//DeleteSweep";

const CertificateCard = ({ element,handleRemoveBtn }) => {
 
  return (
    <>
      <Grid item xs={12} md={3} sm={4}>
        <Card>
          <img
            style={{ height: "300px", width: "100%" }}
            src={element.certificateImg}
            alt="certificate Img"
          />
          <CardContent>
            <Typography
              style={{ height: "100px", textTransform: "capitalize" }}
              gutterBottom
              variant="h5"
              component="h2"
            >
              {element.certificateName}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" color="textSecondary" component="p">
                Issued at {new Date(element.IssueData).toDateString()}
              </Typography>
              <Button
                onClick={()=>handleRemoveBtn(element)}

                type="submit"
                style={{
                  padding: "7px 14px",
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 0, 0, 0.4)",
                  color: "rgb(111, 106, 105)",
                  fontSize: "13",
                  borderRadius: "2px",
                }}
                color="grey"
                variant="contained"
              
                startIcon={<DeleteSweepIcon />}
              >
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default CertificateCard;
