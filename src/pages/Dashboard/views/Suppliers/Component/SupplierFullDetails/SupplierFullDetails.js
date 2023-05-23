import { Box, CardMedia, Container, Grid } from "@material-ui/core";
import React from "react";
import icon from "../../photos/x-mark.png";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import picture1 from "../../photos/1.jpg";
import picture2 from "../../photos/2.jpg";
import picture3 from "../../photos/3.jpg";
import picture4 from "../../photos/4.jpg";
import picture5 from "../../photos/5.jpg";
import { Typography } from "@material-ui/core";
import Lists from "../Lists/Lists";
import Iframe from "react-iframe";
import "./SupplierFullDetails.css";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import CardHeader from "../../../../components/Card/CardHeader";
import Close from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
}));

const SupplierFullDetails = ({ fullDetails, closeFullDetails, profile }) => {
  const itemData = [
    {
      img: picture1,

      author: "author",
    },
    {
      img: picture2,

      author: "author",
    },
    {
      img: picture3,

      author: "author",
    },
    {
      img: picture4,

      author: "author",
    },
    {
      img: picture5,

      author: "author",
    },
  ];
  const list1 = [
    {
      listTitle: "Foundation Year",
      listValue1: "2012",
    },
    {
      listTitle: " #of Production Lines",
      listValue1: "5",
    },
    {
      listTitle: " Bulk Capacity/Month in pcs",
      listValue1: "150.000",
    },
    {
      listTitle: "Sampling Capacity/ Month in pcs",
      listValue1: "150",
    },
    {
      listTitle: " #of Employees",
      listValue1: "350",
    },

    {
      listTitle: " #MoQ in pcs",
      listValue1: "",
    },
  ];
  const list2 = [
    {
      listTitle: "Winding",
      listValue1: "outsourced",
    },
    {
      listTitle: "Knitting",
      listValue1: "outsourced",
    },
    {
      listTitle: "Dyeing",
      listValue1: "outsourced",
    },
    {
      listTitle: "Cut,Make & Trim",
      listValue1: "inhouse",
    },
    {
      listTitle: "Printing",
      listValue1: "outsourced",
    },

    {
      listTitle: "Embroidery",
      listValue1: "outsourced",
    },
    {
      listTitle: "Washing",
      listValue1: "outsourced",
    },
  ];
  const list3 = [
    {
      listTitle: "Fabric Types this factory Works With",
      listValue1: "Circular Knit",
      listValue2: "Woven",
    },
  ];
  const list4 = [
    {
      listTitle: "Additional Service provided",
      listValue1: "Pattern-Grading & Accessories & Sourcing",
      listValue2: "Pattern-Making",
      listValue3: "Fabric,Trims & Accessories Sourcing",
      listValue4: "Original Design Manufacturer(ODM)",
      listValue5: "Original Equipment Manufacturer(OEM)",
      listValue6: "Fully-Factored production",
    },
  ];
  const list5 = [
    {
      listTitle: "Special Capabilities,Finshing Methods & Expertise",
      listValue1: "Taped Seams",
    },
  ];

  const classes = useStyles();
  return (
    <>
      {" "}
      {profile && (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Container plain>
              <CardHeader
                plain
                color="primary"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0px 10px",
                  height: 50,
                  marginTop: 10,
                }}
              >
                <Typography variant="h5">{fullDetails.title}</Typography>

                <div
                  style={{
                    paddingBottom: 10,
                    position: "absolute",
                    right: 6,
                    top: 15,
                  }}
                >
                  <span
                    onClick={closeFullDetails}
                    style={{
                      background: "#bdbcbc",
                      color: "#ff0000a3",
                      padding: "10px 10px",
                      cursor: "pointer",
                    }}
                  >
                    <Close style={{ fontSize: 18 }} />
                  </span>
                </div>
              </CardHeader>
            </Container>
          </GridItem>
        </GridContainer>
      )}
      <div style={{ width: "95%", margin: "auto" }}>
        {fullDetails.img ? (
          <CardMedia
            style={{
              height: "500px",

              margin: "auto",
              marginTop: "20px",
            }}
            className={classes.media}
            image={fullDetails.img}
            title="industry Img"
          />
        ) : (
          <Typography
            style={{
              display: "flex",
              alignItems:'center',
              color: "#36404E",
              margin: "auto",
              marginTop: "50px",
              height: "300px",

             
              
            }}
            variant="subtitle1"
            gutterBottom
          >
            This manufacturer doesn't hold any Photo . please Upload a photo
          </Typography>
        )}

        {profile && (
          <ImageList
            style={{
              marginTop: "10px",
              marginBottom: "20px",
            }}
            className={classes.imageList}
            cols={2.5}
          >
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
        <Grid style={{ marginTop: !profile ? 20 : 0 }} container spacing={1}>
          <Grid item xs={12} md={6} sm={6}>
            <Typography
              style={{
                color: "#5A6166",
                fontSize: "25px",
                marginBottom: "50px",
              }}
              variant="subtitle1"
              gutterBottom
            >
              {fullDetails.title}
            </Typography>

            <Typography
              style={{ color: "#5B4A46", fontSize: "20px" }}
              variant="subtitle2"
              gutterBottom
            >
              Address:
            </Typography>
            <Typography
              style={{
                color: "#5A6166",
                fontSize: "15px",
                marginBottom: "40px",
              }}
              variant="subtitle1"
              gutterBottom
            >
              {fullDetails.fullAddress}
            </Typography>
            <Typography
              style={{ color: "#5B4A46", fontSize: "15px" }}
              variant="subtitle1"
              gutterBottom
            >
              About:
            </Typography>
            <Typography
              style={{ color: "#5A6166", marginBottom: "20px" }}
              variant="body2"
              gutterBottom
            >
              {fullDetails.about}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12288.071434365638!2d90.51816977805042!3d23.702211253383627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b688efba4bff%3A0xd6cdc48fac88e35f!2sSinha%20Textile%20%26%20Opex%20Group!5e0!3m2!1sen!2s!4v1631093698089!5m2!1sen!2s"
              height="400px"
              width="100%"
              id="myId"
              className="map"
              display="initial"
              position="relative"
            />
          </Grid>
        </Grid>
        {profile && (
          <>
            {" "}
            <Grid style={{ marginTop: "30px" }} container spacing={3}>
              <Grid style={{ marginBottom: "30px" }} item xs={12} md={6} sm={6}>
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "700",
                    marginBottom: "30px",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  stats
                </Typography>
                {list1.map((list) => (
                  <Lists list={list}></Lists>
                ))}
              </Grid>
              <Grid style={{ marginBottom: "30px" }} item xs={12} md={6} sm={6}>
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "700",
                    marginBottom: "30px",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Processes
                </Typography>
                {list2.map((list) => (
                  <Lists list={list}></Lists>
                ))}
              </Grid>
            </Grid>
            <Grid style={{ marginTop: "30px" }} container spacing={3}>
              <Grid style={{ marginBottom: "30px" }} item xs={12} md={6} sm={6}>
                <Box style={{ marginBottom: "50px" }}>
                  {list3.map((list) => (
                    <Lists list={list}></Lists>
                  ))}
                </Box>

                <Box style={{ marginBottom: "50px" }}>
                  {list4.map((list) => (
                    <Lists list={list}></Lists>
                  ))}
                </Box>
                <Box style={{ marginBottom: "50px" }}>
                  {list5.map((list) => (
                    <Lists list={list}></Lists>
                  ))}
                </Box>
              </Grid>
              <Grid style={{ marginBottom: "30px" }} item xs={12} md={6} sm={6}>
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "700",
                    marginBottom: "30px",
                  }}
                  variant="subtitle1"
                  gutterBottom
                >
                  Certification & Compliance
                </Typography>
                {fullDetails.certificateImg ? (
                  <img
                    style={{
                      height: "400px",
                      width: "100%",
                    }}
                    src={fullDetails.certificateImg}
                    alt="certificateImg"
                  />
                ) : (
                  <>
                    <Typography
                      style={{
                        color: "#36404E",
                        marginTop: "50px",
                      }}
                      variant="subtitle1"
                      gutterBottom
                    >
                      This manufacturer doesn't hold any relevent certicifation
                    </Typography>
                  </>
                )}
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default SupplierFullDetails;
