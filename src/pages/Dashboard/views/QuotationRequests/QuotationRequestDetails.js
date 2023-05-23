import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Preloader from '../../../../Preloader/Preloader';
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';

import AssistantIcon from '@material-ui/icons/Assistant';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import CustomButton from '../../components/CustomButtons/Button';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PaletteIcon from '@material-ui/icons/Palette';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Button } from '@mui/material';

const QuotationRequestDetails = () => {
  const [user, setUser] = useState();
  const [documents, setDocuments] = useState([]);
  const [customizedDesign, setCustomizedDesign] = useState([]);
  const [quotationDetails, setQuotationDetails] = useState([]);
  const { id } = useParams();
  const [preloader, setPreloader] = useState(true);
  const [open, setOpen] = React.useState(false);

  const anchorRef = React.useRef(null);
  const history = useHistory();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };
  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleDate = getDate => {
    let date = new Date(getDate);

    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  };

  useEffect(() => {
    fetch('http://localhost:4000/singleQuotationDetails/' + id)
      .then(res => res.json())
      .then(data => {
        setQuotationDetails(data);
        setDocuments(data.image);
        setCustomizedDesign(data.customizedDesign);
      });
  }, [id]);
  useEffect(() => {
    if (quotationDetails.user) {
      fetch('http://localhost:4000/User/' + quotationDetails.user)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setPreloader(false);
        });
    }
  }, [quotationDetails.user]);
  console.log('user', user);
  console.log('details', quotationDetails);

  console.log(quotationDetails.image);

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

  console.log(documents);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <CardHeader
                plain
                color="primary"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px',
                  flexWrap: 'wrap',
                }}
              >
                <GridContainer
                  xs={12}
                  sm={12}
                  md={5}
                  style={{
                    justifyContent: 'start',
                    alignItems: 'center',
                  }}
                >
                  <GridItem xs={12} sm={6} md={6}>
                    <Button
                      style={{
                        padding: '7px 14px',
                        background: '#b3b3b3',
                        color: 'white',
                        borderRadius: 2,

                        fontSize: 13,
                      }}
                      onClick={() => history.push(`/admin/quotation-Requests`)}
                      component="span"
                    >
                      <ArrowBackIcon style={{ color: 'white' }} /> Back
                      Quotation Requests
                    </Button>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                    <Button
                      style={{
                        padding: '7px 14px',
                        background: '#b3b3b3',
                        color: 'white',
                        borderRadius: 2,

                        fontSize: 13,
                      }}
                      component="span"
                    >
                      <SendIcon style={{ color: 'white' }} /> Send invitation
                    </Button>
                  </GridItem>
                </GridContainer>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p
                    style={{
                      display: 'flex',
                      padding: '7px 14px',
                      alignItems: 'center',
                      color: 'white',
                      borderRadius: 2,
                      marginRight: 10,
                      fontSize: 13,
                    }}
                  >
                    POSTED BY :{' '}
                    <Avatar
                      style={{ margin: '0px 5px' }}
                      alt="E"
                      src={user.userInfo.image}
                      className={classes.green}
                    />{' '}
                    {user.userInfo.name}
                  </p>
                  {/* <Button
                    ref={anchorRef}
                    aria-controls={open ? "menu-list-grow" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{
                      padding: "7px 14px",
                      background: "#b3b3b3",
                      color: "white",
                      borderRadius: 2,
                      marginRight: 10,
                      fontSize: 13,
                    }}
                  >
                    <AssistantIcon
                      style={{ color: "white", marginRight: "5px" }}
                    />{" "}
                    INQUIRE
                  </Button>

                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    style={{ width: 180 }}
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom"
                              ? "center top"
                              : "center bottom",
                        }}
                      >
                        <Paper style={{ padding: 10 }}>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem
                                style={{ padding: 10 }}
                                onClick={handleClose}
                              >
                                Buyers Profile
                              </MenuItem>
                              <MenuItem
                                style={{ padding: 10 }}
                                onClick={handleClose}
                              >
                                Quote Record
                              </MenuItem>
                              <MenuItem
                                style={{ padding: 10 }}
                                onClick={handleClose}
                              >
                                Contact Us
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper> */}
                </div>
              </CardHeader>
              <CardBody style={{ padding: 0 }}>
                <Grid
                  container
                  style={{
                    height: 'auto',
                    boxSizing: 'border-box',
                    background: 'white',
                  }}
                  //  bgcolor="background.paper"
                >
                  <Grid style={{ padding: '20px 15px' }} item xs={12} sm={4}>
                    <img
                      style={{ height: '300px', width: 'auto', margin: 'auto' }}
                      src={quotationDetails.image[0]}
                      alt=""
                    />
                  </Grid>
                  <Grid p={5} style={{ padding: 25 }} item xs={12} sm={8}>
                    <Typography variant="h4" component="h6" gutterBottom>
                      {quotationDetails.ProductName}
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
                      <span style={{ width: 110 }}>Created At</span>
                      <span>{handleDate(quotationDetails.createDate)}</span>
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
                      <span style={{ width: 110 }}>Category</span>
                      <span>
                        {quotationDetails.productGroup}/
                        {quotationDetails.category}/
                        {quotationDetails.productType}
                      </span>
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
                        <span style={{ width: 110 }}> Quantity</span>
                        <span>{quotationDetails.quantity}</span>
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
                        <span style={{ width: 110 }}>Budget</span>
                        <span>{quotationDetails.budget}</span>
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
                      ></Typography>
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
                        <span style={{ width: 110 }}> Sourcing Type </span>
                        <span>{quotationDetails.sourcingType}</span>
                      </Typography>
                    </Typography>
                    <Typography
                      style={{
                        display: 'flex',
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
                        {quotationDetails.customizedDesign.length ? (
                          <>
                            <span style={{ width: 110 }}> Custom Designs </span>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                              }}
                            >
                              {quotationDetails.customizedDesign.map(design => (
                                <p>{design}</p>
                              ))}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
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
                      {quotationDetails.sourcingPurpose && (
                        <>
                          <span style={{ width: 110 }}>Sourcing Purpose</span>
                          <span>{quotationDetails.sourcingPurpose}</span>
                        </>
                      )}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  bgcolor="grey.100"
                  style={{
                    height: 'auto',
                    boxSizing: 'border-box',
                  }}
                >
                  <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={6}>
                    <Box p={5}>
                      <Typography variant="h6" gutterBottom>
                        Product Description
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {quotationDetails.productDescription}
                      </Typography>
                    </Box>
                  </GridItem>
                  <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={6}>
                    <Box p={5}>
                      <Typography variant="h6" gutterBottom>
                        Fabric Description
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {quotationDetails.fabricDescription}
                      </Typography>
                    </Box>
                  </GridItem>
                </Grid>

                <Grid
                  container
                  style={{
                    height: 'auto',
                    boxSizing: 'border-box',
                    background: 'white',
                  }}
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
                          <Avatar
                            alt="Aminul"
                            src="/static/images/avatar/1.jpg"
                          />
                          <div
                            style={{
                              border: '1px solid grey',
                              borderRadius: '10px',
                              padding: 5,
                              marginLeft: 5,
                            }}
                          >
                            <Typography variant={'body1'}>
                              Aminul Islam
                            </Typography>
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
                          <Avatar
                            alt="Inzamamul"
                            src="/static/images/avatar/1.jpg"
                          />
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
                      RFQ Documents
                    </Typography>
                    <Box p={3}>
                      <Box className="bill_of_material">
                        {documents.length === 0 ? (
                          <p>No Documents available</p>
                        ) : (
                          documents.map(img => {
                            return (
                              <GridItem
                                style={{ marginBottom: 20 }}
                                xs={12}
                                sm={6}
                                md={3}
                              >
                                <img
                                  style={{ height: '150px' }}
                                  src={img}
                                  alt=""
                                />
                              </GridItem>
                            );
                          })
                        )}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )}
    </>
  );
};

export default QuotationRequestDetails;
