import React, { useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
import { server } from "../../variables/general.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
} from "../../variables/charts.js";
import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBinoculars,
  faCalendarPlus,
  faCartPlus,
  faChartPie,
  faCheckSquare,
  faExternalLinkAlt,
  faFileInvoiceDollar,
  faMapMarkedAlt,
  faProjectDiagram,
  faServer,
  faTasks,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Chip, Typography } from "@material-ui/core";
import CustomButton from "../../components/CustomButtons/Button.js";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Link } from "react-router-dom";
import Map from "../../../AboutUs/components/Map.js";
import ReactTooltip from "react-tooltip";
import mapLogo from "../../assets/img/map.png";
import Chart from "react-google-charts";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [content, setContent] = useState("");
  const teamMembers = [
    {
      name: "Alice garments limited",
      image:
        "https://ermg-www-images.s3-ap-southeast-1.amazonaws.com/team/CEO.jpg",
      title: "Co-Founder | CEO",
      city: "New York",
    },
    {
      name: "another garments bd",
      image:
        "https://ermg-www-images.s3-ap-southeast-1.amazonaws.com/team/Yusuf.jpg",
      title: "Co-Founder | COO",
      city: "Bangladesh",
    },
    {
      name: "Mumbai knitting company",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQGo79KEbI2nVw/profile-displayphoto-shrink_800_800/0/1604845487694?e=1617840000&v=beta&t=l70upq4WIHQ3MA4n-xluAgSSOpLUjxL2QD_Le4vNVHc",
      title: "Junior Business Development Executive",
      city: "India",
    },
    {
      name: "Singapore knitting company",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQGo79KEbI2nVw/profile-displayphoto-shrink_800_800/0/1604845487694?e=1617840000&v=beta&t=l70upq4WIHQ3MA4n-xluAgSSOpLUjxL2QD_Le4vNVHc",
      title: "Junior Business Development Executive",
      city: "Singapore",
    },
  ];

  const [task, setTask] = useState(server);
  const [taskText, setTaskText] = useState("");

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                {/* <Icon>content_copy</Icon> */}
                <FontAwesomeIcon icon={faServer} />
              </CardIcon>
              <p className={classes.cardCategory}>Project Overview</p>
              <h3 className={classes.cardTitle}>
                19 <small>Projects With</small>10 <small>Buyer</small>
              </h3>
              <div>
                <select
                  style={{
                    color: "grey",
                    background: "#80808026",
                    marginTop: 10,
                  }}
                >
                  <option value="books">last Month</option>
                  <option value="books">90 Days</option>
                  <option value="html">180 days</option>
                  <option value="css">Last Year</option>
                </select>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  {/* <Warning /> */}
                  <FontAwesomeIcon icon={faBinoculars} />
                </Danger>
                <Link to="/admin/projects">
                  <Typography variant="button">See more Details</Typography>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                {/* <Store /> */}
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
              <div>
                <select
                  style={{
                    color: "grey",
                    background: "#80808026",
                    marginTop: 10,
                  }}
                >
                  <option value="books">last Month</option>
                  <option value="books">90 Days</option>
                  <option value="html">180 days</option>
                  <option value="css">Last Year</option>
                </select>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  {/* <Warning /> */}
                  <FontAwesomeIcon icon={faBinoculars} />
                </Danger>
                <Link to="/admin/projects" onClick={(e) => e.preventDefault()}>
                  <Typography variant="button">See more Details</Typography>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <FontAwesomeIcon icon={faCartPlus} />
              </CardIcon>
              <p className={classes.cardCategory}>Completed Orders</p>
              <h3 className={classes.cardTitle}>75</h3>
              <div>
                <select
                  style={{
                    color: "grey",
                    background: "#80808026",
                    marginTop: 10,
                  }}
                >
                  <option value="books">last Month</option>
                  <option value="books">90 Days</option>
                  <option value="html">180 days</option>
                  <option value="css">Last Year</option>
                </select>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  {/* <Warning /> */}
                  <FontAwesomeIcon icon={faBinoculars} />
                </Danger>
                <Link to="/admin/projects" onClick={(e) => e.preventDefault()}>
                  <Typography variant="button">See more Details</Typography>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <FontAwesomeIcon icon={faProjectDiagram} />
              </CardIcon>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p className={classes.cardCategory}>Start Project</p>
                <Link
                  style={{
                    backgroundImage:
                      "linear-gradient( 45deg , #93f1ff, #35aec3)",
                    paddingRight: 10,
                    padding: "3px 10px",
                    color: "white",
                  }}
                  to="/admin/RFQ"
                  className={classes.cardTitle + " d_link"}
                >
                  Upload RFQ
                </Link>
                <Link
                  style={{
                    backgroundImage:
                      "linear-gradient( 45deg , #93f1ff, #35aec3)",
                    paddingRight: 10,
                    padding: "3px 10px",
                    color: "white",
                  }}
                  to="/admin/digital-studio"
                  className={classes.cardTitle + " d_link"}
                >
                  Digital Studio
                </Link>
              </div>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  {/* <Warning /> */}
                  <FontAwesomeIcon icon={faBinoculars} />
                </Danger>
                <Link to="/admin/projects" onClick={(e) => e.preventDefault()}>
                  <Typography variant="button">See more Details</Typography>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomTabs
            title="Activity :"
            headerColor="primary"
            tabs={[
              {
                tabName: "Recent Projects",
                tabIcon: faTasks,
                tabContent: (
                  <>
                    <Link
                      style={{ position: "absolute", right: -5 }}
                      to="/admin/projects"
                    >
                      <CustomButton
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E7E6E7",
                          color: "#6F6A69",
                          padding: "10px 20px",
                        }}
                        className="viewall d-flex align-items-center"
                      >
                        <FontAwesomeIcon
                          style={{ fontSize: 15 }}
                          icon={faExternalLinkAlt}
                        />{" "}
                        <Typography
                          variant="button"
                          className="viewall_btn"
                          style={{
                            width: 0,
                            overflow: "hidden",
                            height: 20,
                            transition: "all 0.2s",
                            marginLeft: 7,
                          }}
                        >
                          view all
                        </Typography>
                      </CustomButton>
                    </Link>

                    <Table
                      onCellClick={(data) =>
                        alert("This functionality is under maintenance")
                      }
                      selector={false}
                      tableHeaderColor="primary"
                      cellHeight={40}
                      padding="0px 10px"
                      select
                      tableHead={[
                        "Images",
                        "Project ID",
                        "Description",
                        "Quantity",
                        "Status",
                      ]}
                      tableData={[
                        [
                          <img
                            style={{ height: 40 }}
                            src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
                            alt=""
                          />,
                          "SW789",
                          "Men's collar shirt",
                          "300 pcs",

                          <Chip label="PP sampling" color="primary" />,
                        ],
                        [
                          <img
                            style={{ height: 40 }}
                            src="https://image.made-in-china.com/202f0j00slofQegzVpcE/High-Quality-V-Neck-Loose-Winter-Women-Sweaters.jpg"
                            alt=""
                          />,
                          "SW555",
                          "Women sweater",
                          "300 pcs",

                          <Chip label="Production" color="secondary" />,
                        ],
                        [
                          <img
                            style={{ height: 40 }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RUrqdefxKnN63zaU2Wnxvp0kmNkZGwKi2w&usqp=CAU"
                            alt=""
                          />,
                          "SW044",
                          "Women tracksuit",
                          "300 pcs",

                          <Chip label="Laying and marking" color="default" />,
                        ],
                      ]}
                    />
                  </>
                ),
              },
              {
                tabName: "Company Location",
                tabIcon: faMapMarkedAlt,
                tabContent: (
                  <div>
                    <a
                      target="__"
                      style={{ position: "absolute", right: -5 }}
                      href="https://www.google.com/maps/@39.9983935,116.3237724,16z"
                    >
                      <CustomButton
                        style={{
                          fontWeight: "bold",
                          backgroundColor: "#E7E6E7",
                          color: "#6F6A69",
                          padding: "8px 20px",
                        }}
                        className="viewall d-flex align-items-center"
                      >
                        <img style={{ width: 25 }} src={mapLogo} alt="" />
                        <Typography
                          variant="button"
                          className="viewMap_btn"
                          style={{
                            width: 0,
                            overflow: "hidden",
                            height: 20,
                            transition: "width 0.2s",
                            marginLeft: 7,
                          }}
                        >
                          view in google map
                        </Typography>
                      </CustomButton>
                    </a>
                    <Map
                      teamMembers={teamMembers}
                      setTooltipContent={setContent}
                    />
                    <ReactTooltip>{content}</ReactTooltip>
                  </div>
                ),
              },
              {
                tabName: "Tasks",
                tabIcon: faCheckSquare,
                tabContent: (
                  <>
                    <CustomButton
                      style={{
                        position: "absolute",
                        right: -5,
                        fontWeight: "bold",
                        backgroundColor: "#E7E6E7",
                        color: "#6F6A69",
                        padding: "8px 10px",
                        zIndex: 99,
                      }}
                      onClick={handleClickOpen}
                      className="viewall d-flex align-items-center"
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: 15, marginLeft: 3 }}
                        icon={faCalendarPlus}
                      />{" "}
                      <Typography
                        variant="button"
                        className="viewall_btn"
                        style={{
                          width: 0,
                          overflow: "hidden",
                          height: 20,
                          transition: "all 0.2s",
                          marginLeft: 7,
                        }}
                      >
                        Add task
                      </Typography>
                    </CustomButton>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="form-dialog-title"
                    >
                      <DialogTitle id="form-dialog-title">
                        Add new task
                      </DialogTitle>
                      <DialogContent>
                        <TextField
                          onChange={(e) => setTaskText(e.target.value)}
                          autoFocus
                          margin="dense"
                          id="name"
                          label="Enter your task"
                          type="text"
                          fullWidth
                          inputProps={{
                            multiline: true,
                            rows: 5,
                          }}
                        />
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary">
                          Cancel
                        </Button>
                        <Button
                          onClick={() => {
                            setTask([taskText, ...server]);
                            handleClose();
                          }}
                          color="primary"
                        >
                          save
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={task}
                    />
                  </>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle + "nunito"}>
                <div>
                  <select
                    style={{
                      color: "grey",
                      background: "#80808026",
                      marginTop: 10,
                    }}
                  >
                    <option value="books">last Week Sales</option>
                    <option value="books">last Month Sales</option>
                    <option value="books">90 Days Sales</option>
                    <option value="html">180 days Sales</option>
                    <option value="css">Last Year Sales</option>
                  </select>
                </div>
              </h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in last month sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 1 minute ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader className="completed_task" color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Task</h4>
              <span className={classes.cardCategory}>
                <h4 className={classes.cardTitle + "nunito"}>
                  <div>
                    <select
                      style={{
                        color: "grey",
                        background: "#80808026",
                        marginTop: 10,
                      }}
                    >
                      <option value="books">last Week </option>
                      <option value="books">last Month </option>
                      <option value="books">90 Days </option>
                      <option value="html">180 days </option>
                      <option value="css">Last Year </option>
                    </select>
                  </div>
                </h4>
              </span>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated 1 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={8}>
          <CustomTabs
            title="Updates :"
            headerColor="danger"
            tabs={[
              {
                tabName: "Gantt chart",
                tabIcon: faChartPie,
                tabContent: (
                  <>
                    <CustomButton
                      style={{
                        position: "absolute",
                        right: -5,
                        fontWeight: "bold",
                        backgroundColor: "#E7E6E7",
                        color: "#6F6A69",
                        padding: "8px 10px",
                        zIndex: 99,
                      }}
                      onClick={() => alert("Gantt data in not available")}
                      className="viewall d-flex align-items-center"
                    >
                      <FontAwesomeIcon
                        style={{ fontSize: 15, marginLeft: 3 }}
                        icon={faCalendarPlus}
                      />{" "}
                      <Typography
                        variant="button"
                        className="viewall_btn"
                        style={{
                          width: 0,
                          overflow: "hidden",
                          height: 20,
                          transition: "all 0.2s",
                          marginLeft: 7,
                        }}
                      >
                        View all
                      </Typography>
                    </CustomButton>
                    <Chart
                      width={"100%"}
                      height={"auto"}
                      chartType="Gantt"
                      loader={<div>Loading Chart</div>}
                      data={[
                        [
                          { type: "string", label: "Task ID" },
                          { type: "string", label: "Task Name" },
                          { type: "string", label: "Resource" },
                          { type: "date", label: "Start Date" },
                          { type: "date", label: "End Date" },
                          { type: "number", label: "Duration" },
                          { type: "number", label: "Percent Complete" },
                          { type: "string", label: "Dependencies" },
                        ],
                        [
                          "toTrain",
                          "Trims approval",
                          null,
                          new Date(2021, 8, 2),
                          new Date(2021, 8, 14),
                          null,
                          100,
                          null,
                        ],

                        [
                          "wait",
                          "PP sampling",
                          null,
                          new Date(2021, 8, 14),
                          new Date(2021, 8, 20),
                          null,
                          100,
                          "toTrain",
                        ],
                        [
                          "train",
                          "Marking and cutting",
                          null,
                          new Date(2021, 8, 20),
                          new Date(2021, 8, 29),
                          null,
                          75,
                          "wait",
                        ],
                        [
                          "toWork",
                          "Production",
                          null,
                          new Date(2021, 8, 29),
                          new Date(2021, 9, 5),
                          null,
                          0,
                          "train",
                        ],
                        [
                          "work",
                          "Shipping",
                          null,
                          new Date(2021, 9, 5),
                          new Date(2021, 9, 10),
                          null,
                          0,
                          "toWork",
                        ],
                      ]}
                      options={{
                        height: 275,
                        gantt: {
                          defaultStartDateMillis: new Date(2021, 3, 28),
                        },
                      }}
                      rootProps={{ "data-testid": "4" }}
                    />
                  </>
                ),
              },

              {
                tabName: "Employee",
                tabIcon: faUserCog,
                tabContent: (
                  <>
                    <Table
                      tableHeaderColor="warning"
                      tableHead={["ID", "Name", "Working on", "Country"]}
                      tableData={[
                        ["1", "Aminul Islam", "SW789", "Bangladesh"],
                        ["2", "Inzamamul Haque", "SW789", "Bangladesh"],
                        ["3", "Moinuddin Robin", "SW555", "Bangladesh"],
                        ["4", "Sanjida", "SW044", "Bangladesh"],
                      ]}
                    />
                  </>
                ),
              },
            ]}
          />
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle + "nunito"}>
                <div>
                  <select
                    style={{
                      color: "grey",
                      background: "#80808026",
                      marginTop: 10,
                    }}
                  >
                    <option value="books">last Week Sales</option>
                    <option value="books">last Month Sales</option>
                    <option value="books">90 Days Sales</option>
                    <option value="html">180 days Sales</option>
                    <option value="css">Last Year Sales</option>
                  </select>
                </div>
              </h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in last month sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 1 minute ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}
