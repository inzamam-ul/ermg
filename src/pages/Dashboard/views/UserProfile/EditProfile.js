import React, { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  FormControl,
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  Typography,
  Tooltip,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneInput from 'react-phone-number-input';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Autocomplete from '@mui/material/Autocomplete';
import Axios from 'axios';
import { useHistory } from 'react-router';
// @material-ui/core ../../components
import { makeStyles } from '@material-ui/core/styles';
// core ../../components
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import CustomInput from '../../components/CustomInput/CustomInput.js';
import Button from '../../components/CustomButtons/Button.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardAvatar from '../../components/Card/CardAvatar.js';
import CardBody from '../../components/Card/CardBody.js';
import CardFooter from '../../components/Card/CardFooter.js';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../../lib/auth.js';

import DragAndDrop from '../../components/DragAndDrop/DragAndDrop.js';
import SupplierFullDetails from '../Suppliers/Component/SupplierFullDetails/SupplierFullDetails.js';
import axios from 'axios';
var Spinner = require('react-spinkit');

const categories = {
  title: 'Category',

  options: [
    'I have a personal Label Brand',

    'I am an Apparel Printer',

    'I am a Dedicated Wholesale Distributor',
  ],
};
const teamOptions = {
  title: 'How big is your team ?',

  options: [
    'I am a one man Army',

    'I have a squad of 1-10',

    'My team is 11-50 members strong',

    'My Organization has more than 50+ members',
  ],
};

const targetedBuyersOptions = {
  title: 'Your Buyers ',

  options: [
    'would prefer luxurious apparel',

    'want to buy cheap but in volume',

    'prefer fast fashion',

    'wan to buy cheap and easy products',
    'would prefer sustainability over everything ',
  ],
};
const productTypesOptions = {
  title: 'Product Line',

  options: [
    'Shirts,T-Shirts, Tops, Tanks and Products Similar to that',

    'sweaters, jumpers, Trench Coat, Suits and Products akin to that.',

    'lingerie, Socks, Pajama, Shawl, Hat Bikini and products like that',

    'Button, Belt, Fabrics and materials like that',
  ],
};
const priceRangeOptions = {
  title: 'Price Range',

  options: [
    'Discount Clothing',

    'Value for Money Apparel',

    'Mid-Market',

    'Mass Market which is High End',
    'Luxury Market which is High End',
  ],
};
const coreFactorOfSourcingOptions = {
  title: 'Core factor of sourcing',

  options: [
    'Cost should be the most important element',

    'Sustainability is my Core factor while sourcing',

    'I Prefer sourcing experience with high product development capabilities',

    'I need faster delivery and lower lead time',
  ],
};

const styles = {
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0',
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none',
  },
};

const useStyles = makeStyles(styles);

const EditProfile = () => {
  const [userData, setUserData] = useState();
  const { user, signOut } = useAuth();

  const [expanded, setExpanded] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const history = useHistory();
  const handlePhoneNumber = e => {
    setPhoneNumber(e);
  };
  const handleCountry = e => {
    setCountry(e);
  };
  const handleRegion = e => {
    setRegion(e);
  };

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [category, setCategory] = useState();
  const [team, setTeam] = useState();
  const [targetedBuyer, setTargetedBuyer] = useState();
  const [productLine, setProductLine] = useState();
  const [priceRange, setPriceRange] = useState();
  const [coreFactorOfSourcing, setCoreFactorOfSourcing] = useState();

  // handle useEffect
  useEffect(() => {
    const url = `http://localhost:4000/fetchUser/${user.email}`;
    Axios.get(url).then(res => {
      if (res.data) {
        console.log(res.data.userInfo);
        const mainObject = res.data.userInfo;

        setUserData(mainObject);
        handlePush(categories.options, mainObject.category);
        handlePush(teamOptions.options, mainObject.team);
        handlePush(targetedBuyersOptions.options, mainObject.targetedBuyer);
        handlePush(productTypesOptions.options, mainObject.productLine);
        handlePush(priceRangeOptions.options, mainObject.priceRange);
        handlePush(
          coreFactorOfSourcingOptions.options,
          mainObject.coreFactorOfSourcing
        );
        setCountry(mainObject.country);
        setRegion(mainObject.region);
        setPhoneNumber(mainObject.phoneNumber);
      }
    });
  }, [user.email]);

  const handlePush = (options, object) => {
    const search = options.find(ele => ele === object);
    if (!search) {
      options.push(object);
    }
  };

  console.log('userData', userData);

  // handle image
  const [on, setOn] = useState(false);
  const [upload, setUpload] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState();
  let imgFile;
  const handleFile = event => {
    handleUpload(event.target.files[0]);
  };
  const handleDragOver = e => {
    e.preventDefault();
    setOn(true);
  };
  const handleDragLeave = e => {
    setOn(false);
    e.preventDefault();
  };
  const handleDrop = e => {
    e.preventDefault();

    imgFile = e.dataTransfer.files[0];
    handleUpload(imgFile);
    handleFileValidationAndUploading();
  };
  const handleFileValidationAndUploading = () => {
    setUpload(true);
  };
  const handleUpload = file => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set('key', 'f16e0919dbce32c8326397f504a1e7b1');
    imageData.append('image', file);
    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImage(response.data.data.display_url);
        handleFileValidationAndUploading();
        setImageUpload(false);
      })
      .catch(function (error) {
        alert('failed to upload. try again');
      });
  };

  // handleSubmit

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    data.role = userData.role;
    image ? (data.image = image) : (data.image = userData.image);

    category ? (data.category = category) : (data.category = userData.category);
    team ? (data.team = team) : (data.team = userData.team);
    targetedBuyer
      ? (data.targetedBuyer = targetedBuyer)
      : (data.targetedBuyer = userData.targetedBuyer);
    productLine
      ? (data.productLine = productLine)
      : (data.productLine = userData.productLine);
    priceRange
      ? (data.priceRange = priceRange)
      : (data.priceRange = userData.priceRange);
    coreFactorOfSourcing
      ? (data.coreFactorOfSourcing = coreFactorOfSourcing)
      : (data.coreFactorOfSourcing = userData.coreFactorOfSourcing);
    country ? (data.country = country) : (data.country = userData.country);
    region ? (data.region = region) : (data.region = userData.region);
    phoneNumber
      ? (data.phoneNumber = phoneNumber)
      : (data.phoneNumber = userData.phoneNumber);
    if (!data.name) data.name = userData.name;
    if (!data.email) data.email = userData.email;
    if (!data.about) data.about = userData.about;
    if (!data.city) data.city = userData.city;
    if (!data.companyWebsite) data.companyWebsite = userData.companyWebsite;
    if (!data.name) data.name = userData.name;

    fetch(`http://localhost:4000/updateUser/${user.email}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data }),
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          // alert('update successful');

          history.push('/admin/profile/user');
        } else {
          history.push('/admin/profile/user');
        }
      });
  };
  const classes = useStyles();
  return (
    <>
      {userData && (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                  <p className={classes.cardCategoryWhite}>
                    Complete your profile
                  </p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        defaultValue={userData.name}
                        name="name"
                        id="name"
                        label="Profile"
                        variant="standard"
                        {...register('name')}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        defaultValue={userData.email}
                        label="Email"
                        name="email"
                        id="email"
                        variant="standard"
                        {...register('email')}
                      />
                    </GridItem>
                    <GridItem
                      style={{
                        display: 'flex',
                        alignItems: 'end',
                        marginBottom: '15px',
                      }}
                      xs={12}
                      sm={12}
                      md={4}
                    >
                      <PhoneInput
                        style={{
                          borderBottom: '1px solid #80808085',
                          width: '100%',
                          marginTop: '30px',
                        }}
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                      />
                    </GridItem>
                  </GridContainer>

                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CountryDropdown
                        placeholder=""
                        style={{
                          borderBottom: '1px solid #80808085',
                          width: '100%',
                          marginTop: '50px',
                        }}
                        value={country}
                        onChange={handleCountry}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <RegionDropdown
                        style={{
                          borderBottom: '1px solid #80808085',
                          width: '100%',
                          marginTop: '50px',
                        }}
                        country={country}
                        value={region}
                        onChange={handleRegion}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '20px',
                          marginBottom: '10px',
                        }}
                        defaultValue={userData.city}
                        label="City"
                        name="city"
                        id="city"  variant="standard"
                        {...register('city')}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Autocomplete
                        style={{
                          width: '100%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        searchText="example"
                        id="tags-filled"
                        options={categories.options.map(option => option)}
                        getOptionLabel={option => option}
                        defaultValue={categories.options.find(
                          v => v === userData.category
                        )}
                        fullWidth
                        freeSolo
                        renderInput={params => (
                          <TextField
                            onBlur={e => setCategory(e.target.value)}
                            label={categories.title}
                            id="standard-select-currency"
                            name="team"
                            variant="standard"
                            {...params}
                          />
                        )}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={8}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '20px',
                          marginBottom: '10px',padding: '15px 0'
                        }}
                        defaultValue={userData.about}
                        label="Additional details about company"
                        name="about"
                        id="about"
                      
                        {...register('about')}
                        multiline
                        rows={5}
                      />
                    </GridItem>

                    <GridItem
                      xs={12}
                      sm={12}
                      md={4}
                      onDragOver={e => handleDragOver(e)}
                      onDragLeave={e => handleDragLeave(e)}
                      onDrop={e => handleDrop(e)}
                      item
                      style={{
                        backgroundColor: '#F6FAFB',
                        boxShadow:
                          '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                        padding: '100px 20px',
                        marginBottom: '10px',

                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      {imageUpload && (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px',
                          }}
                        >
                          <Spinner
                            // style={{ marginTop: "30px", marginBottom: "10px" }}
                            name="line-spin-fade-loader"
                          />
                        </div>
                      )}
                      {image ? (
                        <>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              style={{ height: '150px' }}
                              src={image}
                              alt=""
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            {!upload && !imageUpload ? (
                              <span>
                                {on ? (
                                  <Typography
                                    style={{
                                      fontWeight: '600',
                                      fontSize: '30px',
                                    }}
                                    variant="subtitle2"
                                  >
                                    Release To Upload File
                                  </Typography>
                                ) : (
                                  <>
                                    <div
                                      style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'center',
                                      }}
                                    >
                                      <span>
                                        <input
                                          onChange={handleFile}
                                          accept="image/*"
                                          className={classes.input}
                                          id="contained-button-file"
                                          multiple
                                          type="file"
                                          hidden
                                        />
                                        <label htmlFor="contained-button-file">
                                          <Tooltip
                                            title="Add Photo"
                                            placement="top"
                                          >
                                            <CloudUploadIcon
                                              style={{
                                                fontSize: '50px',
                                                marginBottom: '15px',
                                                cursor: 'pointer',
                                              }}
                                            />
                                          </Tooltip>
                                        </label>
                                      </span>

                                      <Typography
                                        style={{
                                          fontWeight: '600',
                                          marginBottom: '15px',
                                        }}
                                        variant="subtile1"
                                      >
                                        Add {userData.image ? 'New' : 'company'}{' '}
                                        Photo
                                      </Typography>
                                      <Typography
                                        style={{}}
                                        variant="subtitle2"
                                      >
                                        click on arrow or drag and drop
                                      </Typography>
                                    </div>
                                  </>
                                )}
                              </span>
                            ) : (
                              <></>
                            )}
                          </div>
                        </>
                      )}
                    </GridItem>
                  </GridContainer>
                  <Accordion
                    style={{ marginTop: 30 }}
                    expanded={expanded === 'panel1'}
                    onChange={handleChange('panel1')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography variant="button">
                        Additional Company Info
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ display: 'flex', flexDirection: 'column' }}
                    >
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                          <Autocomplete
                            style={{
                              width: '100%',
                              marginTop: '30px',
                              marginBottom: '10px',
                            }}
                            searchText="example"
                            id="tags-filled"
                            options={teamOptions.options.map(option => option)}
                            getOptionLabel={option => option}
                            defaultValue={teamOptions.options.find(
                              v => v === userData.team
                            )}
                            fullWidth
                            freeSolo
                            renderInput={params => (
                              <TextField
                                autoFocus
                                onBlur={e => setTeam(e.target.value)}
                                label="Number of Employee"
                                id="standard-select-currency"
                                name="team"  variant="standard"
                                {...params}
                              />
                            )}
                          />
                        </GridItem>

                        <GridItem xs={12} sm={12} md={6}>
                          <Autocomplete
                            style={{
                              width: '100%',
                              marginTop: '30px',
                              marginBottom: '10px',
                            }}
                            searchText="example"
                            id="tags-filled"
                            options={targetedBuyersOptions.options.map(
                              option => option
                            )}
                            getOptionLabel={option => option}
                            defaultValue={targetedBuyersOptions.options.find(
                              v => v === userData.targetedBuyer
                            )}
                            fullWidth
                            freeSolo
                            renderInput={params => (
                              <TextField
                                onBlur={e => setTargetedBuyer(e.target.value)}
                                label={targetedBuyersOptions.title}
                                id="standard-select-currency"  variant="standard"
                                name="team"
                                {...params}
                              />
                            )}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <TextField
                            style={{
                              width: '100%',
                              marginTop: '20px',
                              marginBottom: '10px',
                              padding: '15px 0'
                            }}
                            defaultValue={userData.companyWebsite}
                            label="Company Website"
                            name="companyWebsite"  
                            id="city"
                            {...register('companyWebsite')}
                          />
                        </GridItem>
                      </GridContainer>
                      {/* <GridContainer style={{ alignItems: "flex-end" }}>
                       <GridItem xs={12} sm={12} md={9}>
                         <CustomInput
                           labelText="Vertical Setup Information (please comment)"
                           id="about-me"
                           formControlProps={{
                             fullWidth: true,
                           }}
                           inputProps={{
                             multiline: true,
                             rows: 3,
                           }}
                         />
                       </GridItem>
                       <GridItem xs={12} sm={12} md={3}>
                       <Button color="primary">Save</Button>
                     </GridItem>
                     </GridContainer> */}
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    // style={{ marginTop: 30 }}
                    expanded={expanded === 'panel3'}
                    onChange={handleChange('panel3')}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      id="panel3bh-header"
                    >
                      <Typography variant="button">Production Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <GridContainer xs={12} sm={12} md={12}>
                        <GridItem xs={12} sm={12} md={6}>
                          <Autocomplete
                            style={{
                              width: '100%',
                              marginTop: '30px',
                              marginBottom: '10px',
                            }}
                            searchText="example"
                            id="tags-filled"
                            options={productTypesOptions.options.map(
                              option => option
                            )}
                            getOptionLabel={option => option}
                            defaultValue={productTypesOptions.options.find(
                              v => v === userData.productLine
                            )}
                            fullWidth
                            freeSolo
                            renderInput={params => (
                              <TextField
                                onBlur={e => setProductLine(e.target.value)}
                                label={productTypesOptions.title}
                                id="standard-select-currency"
                                name="productTypes"  variant="standard"
                                {...params}
                              />
                            )}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <Autocomplete
                            style={{
                              width: '100%',
                              marginTop: '30px',
                              marginBottom: '10px',
                            }}
                            searchText="example"
                            id="tags-filled"
                            options={priceRangeOptions.options.map(
                              option => option
                            )}
                            getOptionLabel={option => option}
                            defaultValue={priceRangeOptions.options.find(
                              v => v === userData.priceRange
                            )}
                            fullWidth
                            freeSolo
                            renderInput={params => (
                              <TextField
                                onBlur={e => setPriceRange(e.target.value)}
                                label={priceRangeOptions.title}
                                id="standard-select-currency"
                                name="priceRange"  variant="standard"
                                {...params}
                              />
                            )}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={6}>
                          <Autocomplete
                            style={{
                              width: '100%',
                              marginTop: '30px',
                              marginBottom: '10px',
                            }}
                            searchText="example"
                            id="tags-filled"
                            options={coreFactorOfSourcingOptions.options.map(
                              option => option
                            )}
                            getOptionLabel={option => option}
                            defaultValue={coreFactorOfSourcingOptions.options.find(
                              v => v === userData.coreFactorOfSourcing
                            )}
                            fullWidth
                            freeSolo
                            renderInput={params => (
                              <TextField
                                onBlur={e =>
                                  setCoreFactorOfSourcing(e.target.value)
                                }
                                label={coreFactorOfSourcingOptions.title}
                                id="standard-select-currency"
                                name="priceRange"  variant="standard"
                                {...params}
                              />
                            )}
                          />
                        </GridItem>

                        {/* <GridItem
                       style={{
                         display: "flex",
                         alignItems: "flex-end",
                         justifyContent: "flex-end",
                         alignContent: "flex-start",
                       }}
                       xs={12}
                       sm={12}
                       md={8}
                     >
                       <Button color="primary">Save</Button>
                     </GridItem> */}
                      </GridContainer>
                    </AccordionDetails>
                  </Accordion>
                  {/* <Accordion
                   // style={{ marginTop: 30 }}
                   expanded={expanded === "panel2"}
                   onChange={handleChange("panel2")}
                 >
                   <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2bh-content"
                     id="panel2bh-header"
                   >
                     <Typography variant="button">Certifications</Typography>
                   </AccordionSummary>
                   <AccordionDetails>
                     <div
                       style={{
                         height: 100,
                         display: "flex",
                         justifyContent: "start",
                       }}
                     >
                       <img
                         styles={{ height: "auto" }}
                         src="https://th.bing.com/th/id/R.603f3c314429e712442d258fe87bdd6e?rik=db%2fSHMVfbhIIJg&pid=ImgRaw&r=0"
                         alt=""
                       />
                       <img
                         src="https://th.bing.com/th/id/OIP.0uahyY2t_VTzIBEKIp_TYAHaFN?pid=ImgDet&w=1277&h=898&rs=1"
                         alt=""
                       />
                       <div
                         style={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center",
                         }}
                       >
                         <DragAndDrop />
                       </div>
                     </div>
                   </AccordionDetails>
                 </Accordion> */}
                </CardBody>
                <CardFooter>
                  <Button type="submit" color="primary">
                    Save Profile
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
        </GridContainer>
      )}
    </>
  );
};

export default EditProfile;
