import React from 'react';
import GridItem from '../../../components/Grid/GridItem.js';

import Button from '../../../components/CustomButtons/Button';

import { makeStyles } from '@material-ui/core/styles';

import PaletteIcon from '@material-ui/icons/Palette';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Timeline from './Timeline.js';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Avatar, Card, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ProjectDetails = ({ project, setProject }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 5,
    },
    pink: {
      color: '#fff',
      backgroundColor: 'pink',
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 5,
    },
    green: {
      color: '#fff',
      backgroundColor: 'green',
      width: theme.spacing(3),
      height: theme.spacing(3),
      marginRight: 5,
    },
    timeline: {
      transform: 'rotate(-90deg)',
    },
    timelineContentContainer: {
      textAlign: 'left',
    },
    timelineContent: {
      display: 'inline-block',
      transform: 'rotate(90deg)',
      textAlign: 'center',
      minWidth: 50,
    },
    timelineIcon: {
      transform: 'rotate(90deg)',
    },
  }));
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        width: '100%',
        background: '#000000c4',
        zIndex: 99,
        padding: '0px 0px',
      }}
    >
      <div
        style={{
          padding: 10,
          background: 'grey',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span
          onClick={() => setProject(false)}
          style={{
            background: 'white',
            padding: '6px 15px',
            cursor: 'pointer',
          }}
        >
          <ArrowBackIcon style={{ fontSize: 15 }} /> Back to Project Page
        </span>
      </div>
      <Grid
        container
        style={{ height: 'auto', boxSizing: 'border-box', background: 'white' }}
        //  bgcolor="background.paper"
      >
        <Grid style={{ padding: 25 }} item xs={12} sm={4}>
          <Typography variant="h6" gutterBottom>
            Reference picture
          </Typography>{' '}
          <img
            style={{ height: '300px', width: 'auto', margin: 'auto' }}
            src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
            alt=""
          />
        </Grid>
        <Grid p={5} style={{ padding: 25 }} item xs={12} sm={8}>
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>{' '}
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <span style={{ width: 110 }}> Category</span>
            <span>Men/Shirt/Printed Shirt</span>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
                marginRight: 50,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Project Team</span>
              <span>
                <div style={{ display: 'flex' }}>
                  <Avatar alt="Remy Sharp" className={classes.small}>
                    +
                  </Avatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    className={classes.pink}
                  />
                  <Avatar
                    alt="Akon rock"
                    src="/static/images/avatar/1.jpg"
                    className={classes.green}
                  />
                </div>
              </span>
            </Typography>
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 'auto' }}>eRMG sourcing expert </span>
              <span
                style={{
                  display: 'flex',
                  alignItems: ' center',
                  padding: 10,
                }}
              >
                {' '}
                <Avatar
                  alt="E"
                  src="/static/images/avatar/1.jpg"
                  className={classes.green}
                />
                Aminul Islam
              </span>
            </Typography>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
                marginRight: 83,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Season</span>
              <span>SS 2021</span>
            </Typography>
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Price/piece</span>
              <span
                style={{
                  display: 'flex',
                  alignItems: ' center',
                }}
              >
                tbd
              </span>
            </Typography>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
                marginRight: 87,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Quantity</span>
              <span>300 pcs</span>
            </Typography>
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Total order price</span>
              <span
                style={{
                  display: 'flex',
                  alignItems: ' center',
                }}
              >
                tbd
              </span>
            </Typography>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
                marginRight: 75,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Delivery</span>
              <span>
                {new Date().getDate()},{new Date().getMonth()},
                {new Date().getFullYear()}{' '}
              </span>
            </Typography>
            <Typography
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                marginTop: 10,
              }}
              variant="body2"
              gutterBottom
            >
              <span style={{ width: 110 }}> Target price</span>
              <span
                style={{
                  display: 'flex',
                  alignItems: ' center',
                }}
              >
                $ 9999
              </span>
            </Typography>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <span style={{ width: 110 }}> Order type</span>
            <span
              style={{
                display: 'flex',
                alignItems: ' center',
              }}
            >
              Full Production Run
            </span>
          </Typography>
          <Typography
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              marginTop: 10,
            }}
            variant="body2"
            gutterBottom
          >
            <span style={{ width: 110 }}> Project Status</span>
            <Timeline />
          </Typography>
        </Grid>
      </Grid>
      <Box style={{ height: '100%', width: '100%' }} p={5} bgcolor="grey.100">
        <Typography variant="h6" gutterBottom>
          Products in this project
        </Typography>
        <Typography variant="body2" gutterBottom>
          No Product available
        </Typography>
      </Box>

      <Grid
        container
        style={{ height: 'auto', boxSizing: 'border-box', background: 'white' }}
        //  bgcolor="background.paper"
      >
        <Grid style={{ padding: 25 }} item xs={12} sm={5}>
          <Typography variant="h6" gutterBottom>
            Comments & Notes
          </Typography>{' '}
          <div
            style={{
              border: '1px solid grey',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              padding: 10,
            }}
          >
            <div style={{ height: '250px', overflowY: 'scroll' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'evenly',
                  padding: 5,
                }}
              >
                <Avatar alt="Aminul" src="/static/images/avatar/1.jpg" />
                <div
                  style={{
                    border: '1px solid grey',
                    borderRadius: '10px',
                    padding: 5,
                    marginLeft: 5,
                  }}
                >
                  <Typography variant={'body1'}>Aminul Islam</Typography>
                  <Typography variant={'body2'}>
                    Is this product using dry wash?
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'evenly',
                  padding: 5,
                }}
              >
                <Avatar alt="Inzamamul" src="/static/images/avatar/1.jpg" />
                <div
                  style={{
                    border: '1px solid grey',
                    borderRadius: '10px',
                    padding: 5,
                    marginLeft: 5,
                  }}
                >
                  <Typography variant={'body1'}>Inzamamul</Typography>
                  <Typography variant={'body2'}>
                    Yes sir, This product is dry wash
                  </Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <TextField
                id="standard-full-width"
                style={{ margin: 8 }}
                placeholder="Add your comment"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button style={{ padding: 8 }} component="span">
                {' '}
                <AddCommentIcon style={{ fontSize: 16 }} />{' '}
              </Button>
            </div>
          </div>
        </Grid>{' '}
        <Grid style={{ padding: 25 }} item xs={12} sm={7}>
          <Typography variant="h6" gutterBottom>
            Bill of Materials
          </Typography>
          <Box p={3} bgcolor="grey.200">
            <Box className="bill_of_material">
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={6}>
                <Card className={classes.root}>
                  <Box
                    display="flex"
                    style={{ height: 130, boxSizing: 'border-box' }}
                    //  bgcolor="background.paper"
                  >
                    {' '}
                    <Box flexGrow={2} bgcolor="grey.200">
                      <img
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 'auto',
                        }}
                        src="https://sc04.alicdn.com/kf/Hca8d17f1447143a7b5be5414944f2102C.jpg"
                        alt=""
                      />
                    </Box>
                    <Box p={1} flexGrow={0} bgcolor="grey.200">
                      <Typography variant="body1" gutterBottom>
                        BTW-067
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Viscos shirt/ Blouse poplin fabric
                      </Typography>
                      <Typography
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                        variant="body"
                        gutterBottom
                      >
                        <span>
                          {' '}
                          <PaletteIcon />
                          white
                        </span>
                        <span>
                          <AspectRatioIcon /> 100 gsm
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </GridItem>
              <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={6}>
                <Card className={classes.root}>
                  <Box
                    display="flex"
                    style={{ height: 130, boxSizing: 'border-box' }}
                    //  bgcolor="background.paper"
                  >
                    {' '}
                    <Box flexGrow={2} bgcolor="grey.200">
                      <img
                        style={{
                          height: '100%',
                          width: 'auto',
                          margin: 'auto',
                        }}
                        src="https://cdn.shopify.com/s/files/1/0151/0741/products/b772b3a23ac34b30ffc8b4e5102a1202_a27f9848-2cc7-4701-91bb-fd65975657ad_1024x1024.jpg?v=1578649736"
                        alt=""
                      />
                    </Box>
                    <Box p={1} flexGrow={0} bgcolor="grey.200">
                      <Typography variant="body1" gutterBottom>
                        BTW-069
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        BLOSSOM WATERCOLOR FLORAL ART
                      </Typography>
                      Season{' '}
                      <Typography
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                        variant="body"
                        gutterBottom
                      >
                        <span>
                          {' '}
                          <PaletteIcon />
                          white floral
                        </span>
                        <span>
                          <AspectRatioIcon /> 100 gsm
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </GridItem>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
