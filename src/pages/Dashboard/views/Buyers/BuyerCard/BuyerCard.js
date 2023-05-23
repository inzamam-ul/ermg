import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

const useStyles = makeStyles({
  media: {
    height: 140,
  },
});

const BuyerCard = ({ element, fullDetails, handleFullDetails }) => {
  const classes = useStyles();
  return (
    <>
      {!fullDetails.name ? (
        <Grid item xs={12} md={3} sm={6}>
          <Card
            onClick={() => handleFullDetails(element)}
            className={classes.root}
          >
            <CardActionArea>
              <CardMedia
                style={{ height: '300px', width: '100%' }}
                className={classes.media}
                image={element.img}
                title="industry Img"
              />
              <CardContent>
                <Typography
                  style={{ height: '100px', textTransform: 'capitalize' }}
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {element.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {element.address.country},{element.address.region},
                  {element.address.city}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions></CardActions>
          </Card>
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default BuyerCard;
