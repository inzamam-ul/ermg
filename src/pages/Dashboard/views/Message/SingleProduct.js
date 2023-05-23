import React from "react";
// @material-ui/core ../../components
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

import PaletteIcon from "@material-ui/icons/Palette";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const SingleProduct = ({ setMessage }) => {
  const classes = useStyles();

  return (
    <Grid
      onClick={() => setMessage(true)}
      item
      style={{ marginBottom: 20 }}
      xs={12}
      sm={6}
      md={3}
    >
      <Card>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyKONMQykP8G9mwrKaiOHIPYZJnG8UwauaFHsaO3kP5BMH1YHZ9bopKHx8fbMaI2aoWI&usqp=CAU"
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Men's camp collar shirt
          </Typography>{" "}
          <Typography variant="subtitle1" gutterBottom>
            Men's camp collar shirt
          </Typography>{" "}
          <Typography variant="subtitle2" gutterBottom>
            Men | Shirts | Casual
          </Typography>{" "}
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <span>
              {" "}
              <PaletteIcon />
              white
            </span>
            <span style={{ marginLeft: 20 }}>
              <AspectRatioIcon /> Style: A
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SingleProduct;
