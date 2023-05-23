import React from "react";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";
// import Timeline from "@material-ui/lab/Timeline";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import DoneIcon from "@material-ui/icons/Done";

const Message = ({ setMessage }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 700,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    small: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      backgroundColor: "green",
      marginRight: 5,
    },
    pink: {
      color: "#fff",
      backgroundColor: "pink",
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 5,
    },
    green: {
      color: "#fff",
      backgroundColor: "green",
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 5,
    },
    timeline: {
      transform: "rotate(-90deg)",
    },
    timelineContentContainer: {
      textAlign: "left",
    },
    timelineContent: {
      display: "inline-block",
      transform: "rotate(90deg)",
      textAlign: "center",
      minWidth: 50,
    },
    timelineIcon: {
      transform: "rotate(90deg)",
    },
  }));
  const classes = useStyles();
  return (
    <>
      <div style={{ background: "off-white", display: "flex", padding: 10 }}>
        <span
          onClick={() => setMessage(false)}
          style={{
            background: "grey",
            padding: "6px 15px",
            cursor: "pointer",
            marginRight: 10,
            color: "white",
            width: 100,
          }}
        >
          <ArrowBackIcon style={{ fontSize: 15 }} /> Back{" "}
        </span>{" "}
        <Typography variant="h5">
          SW555 | Trims & Accessories | Approve Trims & Accessories
        </Typography>
      </div>
      <Grid
        container
        style={{ height: "auto", boxSizing: "border-box", background: "white" }}
        //  bgcolor="background.paper"
      >
        <Grid style={{ padding: 0 }} item xs={12} sm={3}>
          <Typography variant="h6" gutterBottom>
            <Button style={{ width: "100%" }} component="span">
              {" "}
              + add task
            </Button>
          </Typography>
          <Box
            style={{ height: "auto", padding: "15px 0px" }}
            bgcolor="grey.500"
          >
            <Box className="bill_of_material">
              <GridItem style={{ margin: "3px 0px" }} xs={12}>
                <Card className={classes.root}>
                  <Box
                    bgcolor="grey.200"
                    style={{ boxSizing: "border-box", padding: 7 }}
                    //  bgcolor="background.paper"
                  >
                    {" "}
                    <Box>
                      <Typography variant="body1" gutterBottom>
                        Approve Trims & Accessories
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Need approve of trims and accessories for next step
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ display: "flex" }}>
                          {" "}
                          <Avatar className={classes.small}>
                            <DoneIcon style={{ fontSize: 10 }} />
                          </Avatar>
                          {new Date(Date.now()).toLocaleString().split(",")[0]}
                        </span>
                        <span style={{ display: "flex" }}>
                          {" "}
                          <Avatar
                            style={{ fontSize: 10 }}
                            alt="Rem"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                          />
                          <Avatar
                            style={{ fontSize: 10 }}
                            alt="B"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                          />
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </GridItem>
              <GridItem style={{ margin: "3px 0px" }} xs={12}>
                <Card className={classes.root}>
                  <Box
                    bgcolor="grey.200"
                    style={{ boxSizing: "border-box", padding: 7 }}
                    //  bgcolor="background.paper"
                  >
                    {" "}
                    <Box>
                      <Typography variant="body1" gutterBottom>
                        PP-Sample
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Need PP sample to test the product quality
                      </Typography>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ display: "flex" }}>
                          {" "}
                          <Avatar className={classes.small}>
                            <DoneIcon style={{ fontSize: 10 }} />
                          </Avatar>
                          {new Date(Date.now()).toLocaleString().split(",")[0]}
                        </span>
                        <span style={{ display: "flex" }}>
                          {" "}
                          <Avatar
                            style={{ fontSize: 10 }}
                            alt="Rem"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                          />
                          <Avatar
                            style={{ fontSize: 10 }}
                            alt="B"
                            src="/static/images/avatar/1.jpg"
                            className={classes.small}
                          />
                        </span>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              </GridItem>
            </Box>
          </Box>
        </Grid>
        <Grid style={{ padding: "0px 15px" }} item xs={12} sm={9}>
          <Typography variant="h6" gutterBottom>
            Message
          </Typography>{" "}
          <div
            style={{
              border: "1px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              padding: 10,
            }}
          >
            <div style={{ height: "60vh", overflowY: "scroll" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "evenly",
                  padding: 5,
                }}
              >
                <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: 5,
                    marginLeft: 5,
                  }}
                >
                  <Typography variant={"body1"}>Inzamamul</Typography>
                  <Typography variant={"body2"}>
                    Hello, We need PP sample as soon as possible. Is it
                    possible?
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "evenly",
                  padding: 5,
                }}
              >
                <Avatar
                  style={{ background: "orange" }}
                  alt="A"
                  src="/static/images/avatar/1.jpg"
                />
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: 5,
                    marginLeft: 5,
                  }}
                >
                  <Typography variant={"body1"}>Aminul Islam</Typography>
                  <Typography variant={"body2"}>
                    Sure sir. I will send you PP sample as soon as possible
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "flex-end",
                  padding: 5,
                }}
              >
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    padding: 5,
                    margin: 5,
                  }}
                >
                  <Typography variant={"body1"}>You</Typography>
                  <Typography variant={"body2"}>
                    Can you specify an exact date when we can see the sample?
                  </Typography>
                </div>
                <Avatar
                  style={{ background: "green" }}
                  alt="Y"
                  src="/static/images/avatar/1.jpg"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Type a message"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button style={{ padding: 8 }} component="span">
                {" "}
                <SendIcon style={{ fontSize: 16 }} />{" "}
              </Button>
            </div>
          </div>
        </Grid>{" "}
      </Grid>
    </>
  );
};

export default Message;
