import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Preloader from '../../../../../Preloader/Preloader';
import GridItem from '../../../components/Grid/GridItem.js';
import GridContainer from '../../../components/Grid/GridContainer.js';
import Card from '../../../components/Card/Card.js';
import CardHeader from '../../../components/Card/CardHeader.js';
import CardBody from '../../../components/Card/CardBody.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import EditIcon from '@mui/icons-material/Edit';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';
import AddCommentIcon from '@material-ui/icons/AddComment';
import Button from '../../../components/CustomButtons/Button'

const RfqDetails = () => {
  const [user, setUser] = useState();
  const [documents, setDocuments] = useState([]);
  const [customizedDesign, setCustomizedDesign] = useState([]);
  const [RFQDetails, setRFQDetails] = useState([]);
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
        setRFQDetails(data);
        setDocuments(data.image);
        setCustomizedDesign(data.customizedDesign);
      });
  }, [id]);
  useEffect(() => {
    if (RFQDetails.user) {
      fetch('http://localhost:4000/User/' + RFQDetails.user)
        .then(res => res.json())
        .then(data => {
          setUser(data);
          setPreloader(false);
        });
    }
  }, [RFQDetails.user]);

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

// handleDelete
const handleDelete =(element)=>{

    fetch(`http://localhost:4000/deleteMyRfq/${element}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            history.push('/admin/MyRFQ');
          } else {
              
          }
        });


}

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
                  md={8}
                  style={{
                    justifyContent: 'start',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{
                      padding: '7px 14px',
                      background: '#b3b3b3',
                      color: 'white',
                      borderRadius: 2,
                      margin: '0 10px',

                      fontSize: 13,
                    }}
                    onClick={() => history.push(`/admin/MyRFQ`)}
                    component="span"
                  >
                    <ArrowBackIcon style={{ color: 'white' }} /> Back
                  </Button>

                  <Button
                    onClick={() => history.push(`/admin/editRFQ/${id}`)}
                    style={{
                      padding: '7px 14px',
                      background: '#b3b3b3',
                      color: 'white',
                      borderRadius: 2,
                      margin: '0 10px',

                      fontSize: 13,
                    }}
                    component="span"
                  >
                    <EditIcon style={{ color: 'white' }} /> Edit RFQ
                  </Button>

                  <Button
                  onClick={()=>{handleDelete(id)}}
                    style={{
                      padding: '7px 14px',
                      background: '#b3b3b3',
                      color: 'white',
                      borderRadius: 2,
                      margin: '3px 10px',

                      fontSize: 13,
                    }}
                    component="span"
                  >
                    <DeleteSweepIcon  style={{ color: 'white' }} /> delete
                  </Button>
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
                      src={RFQDetails.image[0]}
                      alt=""
                    />
                  </Grid>
                  <Grid p={5} style={{ padding: 25 }} item xs={12} sm={8}>
                    <Typography variant="h4" component="h6" gutterBottom>
                      {RFQDetails.ProductName}
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
                      <span>{handleDate(RFQDetails.createDate)}</span>
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
                        {RFQDetails.productGroup}/{RFQDetails.category}/
                        {RFQDetails.productType}
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
                        <span>{RFQDetails.quantity}</span>
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
                        <span>{RFQDetails.budget}</span>
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
                        <span>{RFQDetails.sourcingType}</span>
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
                        {RFQDetails.customizedDesign.length ? (
                          <>
                            <span style={{ width: 110 }}> Custom Designs </span>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                              }}
                            >
                              {RFQDetails.customizedDesign.map(design => (
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
                      {RFQDetails.sourcingPurpose && (
                        <>
                          <span style={{ width: 110 }}>Sourcing Purpose</span>
                          <span>{RFQDetails.sourcingPurpose}</span>
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
                        {RFQDetails.productDescription}
                      </Typography>
                    </Box>
                  </GridItem>
                  <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={6}>
                    <Box p={5}>
                      <Typography variant="h6" gutterBottom>
                        Fabric Description
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {RFQDetails.fabricDescription}
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

export default RfqDetails;
