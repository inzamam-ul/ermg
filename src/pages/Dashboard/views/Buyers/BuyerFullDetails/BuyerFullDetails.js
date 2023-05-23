import { Box, CardMedia, createTheme, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { Typography } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Lists from '../../Lists/Lists';

// eslint-disable-next-line no-unused-vars
const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const BuyerFullDetails = ({ fullDetails, closeFullDetails }) => {
  const itemData = [
    {
      img: 'https://i.ibb.co/FgPdbc6/ladies1.jpg',

      author: 'author',
    },
    {
      img: 'https://i.ibb.co/9cV7S9r/ladies2.jpg',

      author: 'author',
    },
    {
      img: 'https://i.ibb.co/QbGD2cr/men1.jpg',

      author: 'author',
    },
    {
      img: 'https://i.ibb.co/B4VHLy0/fitting-Room.jpg',

      author: 'author',
    },
  ];
  const list1 = [
    {
      listTitle: 'Foundation Year',
      listValue1: fullDetails.foundationYear,
    },
    {
      listTitle: ' Number of targeted Buyer',
      listValue1: fullDetails.targetedBuyer,
    },

    {
      listTitle: ' Number of Team member',
      listValue1: fullDetails.teamSize,
    },

    {
      listTitle: 'Average revenue/month',
      listValue1: fullDetails.averageRevenue,
    },

    {
      listTitle: 'Annual Turnover',
      listValue1: fullDetails.AnnualTurnOver,
    },
  ];
  const list2 = [
    {
      listTitle: 'Categories',
      listValue1: fullDetails.category,
    },
    {
      listTitle: 'ProductLine',
      listValue1: fullDetails.productLine,
    },
    {
      listTitle: 'Type of Customer',
      listValue1: fullDetails.typeOfCustomer,
    },
    {
      listTitle: 'Price Range',
      listValue1: fullDetails.priceRange,
    },
  ];
  const list3 = [
    {
      listTitle: 'Core factor of company Sourcing',
      listValue1: fullDetails.coreFactorOfSourcing,
    },
  ];

  const classes = useStyles();
  return (
    <>
      {' '}
      <div
        style={{ backgroundColor: '#E7E6E7' }}
        className="d-flex align-items-center p-2 justify-content-between"
      >
        <h4>{fullDetails.name}</h4>
        <img
          onClick={closeFullDetails}
          style={{ height: '30px' }}
          src="https://i.ibb.co/y43gtPt/x-mark.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div style={{ width: '95%', margin: 'auto' }}>
        <CardMedia
          style={{
            height: '500px',

            margin: 'auto',
            marginTop: '20px',
          }}
          className={classes.media}
          image={fullDetails.img}
          title="industry Img"
        />
        <ImageList
          style={{
            marginTop: '10px',
            marginBottom: '20px',
          }}
          className={classes.imageList}
          cols={2.5}
        >
          {itemData.map(item => (
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
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} sm={6}>
            <Typography
              style={{
                color: '#5A6166',
                fontSize: '25px',
                marginBottom: '50px',
              }}
              variant="subtitle1"
              gutterBottom
            >
              {fullDetails.name}
            </Typography>

            <Typography
              style={{ color: '#5B4A46', fontSize: '20px' }}
              variant="subtitle2"
              gutterBottom
            >
              Address:
            </Typography>
            <Typography
              style={{
                color: '#5A6166',
                fontSize: '15px',
                marginBottom: '40px',
              }}
              variant="subtitle1"
              gutterBottom
            >
              {fullDetails.address.country},{fullDetails.address.region},
              {fullDetails.address.city}
            </Typography>
            <Typography
              style={{ color: '#5A6166', marginBottom: '20px' }}
              variant="body2"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
              voluptatum, vitae aspernatur obcaecati esse, neque ullam laborum,
              laudantium officiis iusto asperiores ratione eveniet qui quis.
              Molestias culpa voluptatibus et cum quibusdam laboriosam, aliquid
              non consectetur, voluptatem provident cupiditate laudantium velit
              iusto nulla quidem eveniet. Dolore illum esse hic sed vitae?
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            <CardMedia
              style={{
                height: '300px',
              }}
              className={classes.media}
              image={fullDetails.img}
              title="industry Img"
            />
          </Grid>
        </Grid>
        <Grid style={{ marginTop: '30px' }} container spacing={3}>
          <Grid style={{ marginBottom: '30px' }} item xs={12} md={6} sm={6}>
            <Typography
              style={{
                color: 'black',
                fontWeight: '700',
                marginBottom: '30px',
              }}
              variant="subtitle1"
              gutterBottom
            >
              stats
            </Typography>
            {list1.map(list => (
              <Lists list={list}></Lists>
            ))}
          </Grid>
          <Grid style={{ marginBottom: '30px' }} item xs={12} md={6} sm={6}>
            <Typography
              style={{
                color: 'black',
                fontWeight: '700',
                marginBottom: '30px',
              }}
              variant="subtitle1"
              gutterBottom
            >
              Info
            </Typography>
            {list2.map(list => (
              <Lists list={list}></Lists>
            ))}
          </Grid>
        </Grid>

        <Grid style={{ marginTop: '30px' }} container spacing={3}>
          <Grid style={{ marginBottom: '30px' }} item xs={12} md={6} sm={6}>
            <Box style={{ marginBottom: '50px' }}>
              {list3.map(list => (
                <Lists list={list}></Lists>
              ))}
            </Box>
            <Grid item xs={12} md={6} sm={6}>
              <Typography
                style={{
                  color: '#5B4A46',
                  fontSize: '20px',
                  fontWeight: 'bold',
                }}
                variant="subtitle2"
                gutterBottom
              >
                Contact:
              </Typography>
              <Typography
                style={{
                  color: '#5A6166',
                  fontSize: '15px',
                  marginBottom: '40px',
                }}
                variant="subtitle1"
                gutterBottom
              >
                Email: <br />
                {fullDetails.email.firstEmail} <br />
                {fullDetails.email.secondEmail}
                <br />
                <br />
                Phone: <br />
                {fullDetails.phoneNumber}
              </Typography>
            </Grid>
          </Grid>
          <Grid style={{ marginBottom: '30px' }} item xs={12} md={6} sm={6}>
            <Typography
              style={{
                color: 'black',
                fontWeight: '700',
                marginBottom: '30px',
              }}
              variant="subtitle1"
              gutterBottom
            >
              Awards & Certification
            </Typography>
            {fullDetails.certificateImg ? (
              <img
                style={{
                  height: '400px',
                  width: '100%',
                }}
                src={fullDetails.certificateImg}
                alt="certificateImg"
              />
            ) : (
              <>
                <Typography
                  style={{
                    color: '#36404E',
                    marginTop: '50px',
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
      </div>
    </>
  );
};

export default BuyerFullDetails;
