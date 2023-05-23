import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// core ../../components
import GridItem from '../../../components/Grid/GridItem.js';
import GridContainer from '../../../components/Grid/GridContainer.js';
// import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from '../../../components/CustomButtons/Button.js';
import Card from '../../../components/Card/Card.js';
import CardHeader from '../../../components/Card/CardHeader.js';
import CardBody from '../../../components/Card/CardBody.js';
import CardFooter from '../../../components/Card/CardFooter.js';

import {
  Tooltip,
  TextField,
  MenuItem,
  FormControl,
  Typography,
  Grid,
} from '@mui/material';
// import NativeSelect from "@material-ui/core/NativeSelect";
import MultipleSelect from '../Component/MultipleSelect.js';
// import { AttachFileOutlined, Image } from "@material-ui/icons";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm } from 'react-hook-form';
import { ColorPicker, createColor } from 'material-ui-color';
import AddIcon from '@mui/icons-material/Add';
import Spinner from 'react-spinkit';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import '../Rfq.css';
import AutoCompleteComp from '../Component/AutoCompleteComp.js';
import { useAuth } from '../../../../../lib/auth.js';
import { useHistory, useParams } from 'react-router';
import Preloader from '../../../../../Preloader/Preloader.js';

const categories = {
  options: ['Shirt', 'T-shirt', 'Skirt', 'Top', 'Jumpsuit'],
};
const productTypes = {
  options: ['Casual', 'Party', 'Cotton', 'Half', 'Full selves'],
};
const productGroups = {
  options: ["Men's", "Women's", "Boy's", "Girl's"],
};
const sourcingTypes = {
  options: [
    'Customized Product',
    ' Non-customized Product',
    ' Total Solution',
    ' Business Service',
  ],
};

const sourcingPurposes = {
  options: [
    'Wholesale',
    'Retail',
    'Production Equipment',
    'Raw Materials for Production',
    'Corporate Consumption',
    'Personal Use',
  ],
};
const customizedDesigns = {
  options: [
    'Customized Logo',
    'Customized Packaging',
    'Graphic Customization',
    'OEM',
    'Assembling',
    'Customized Function',
  ],
};

const measurementOption = [
  'Acres',
  'Amperes',
  'Bags',
  'Barrels',
  'Blades',
  'Boxes',
  'Bushels',
  'Carats',
  'Cartons',
  'Cases',
  'Centimeters',
  'Chains',
  'Combos',
  'Cubic Centimeters',
  'Cubic Feet',
  'Cubic Inches',
  'Cubic Meters',
  'Cubic Yards',
  'Degrees Celsius',
  'Degrees Fahrenheit',
  'Dozens',
  'Drams',
  'Fluid Ounces',
  'Feet',
  'Forty-Foot Container',
  'Furlongs',
  'Gallons',
  'Gills',
  'Grains',
  'Grams',
  'Gross',
  'Hectares',
  'Hertz',
  'Inches',
  'Kiloamperes',
  'Kilograms',
  'Kilohertz',
  'Kilometers',
  'Kiloohms',
  'Kilovolts',
  'Kilowatts',
  'Liters',
  'Long Tons',
  'Megahertz',
  'Meters',
  'Metric Tons',
  'Miles',
  'Milliamperes',
  'Milligrams',
  'Millihertz',
  'Milliliters',
  'Millimeters',
  'Milliohms',
  'Millivolts',
  'Milliwatts',
  'Nautical Miles',
  'Ohms',
  'Ounces',
  'Packs',
  'Pairs',
  'Pallets',
  'Parcels',
  'Perches',
  'Pieces',
  'Pints',
  'Plants',
  'Poles',
  'Pounds',
  'Quarts',
  'Quarters',
  'Rods',
  'Rolls',
  'Sets',
  'Sheets',
  'Short Tons',
  'Square Centimeters',
  'Square Feet',
  'Square Inches',
  'Square Meters',
  'Square Miles',
  'Square Yards',
  'Stones',
  'Strands',
  'Tons',
  'Tonnes',
  'Trays',
  'Twenty-Foot Container',
  'Units',
  'Volts',
  'Watts',
  'Wp',
  'Yards',
];

const budgetOptions = [
  '<1000',
  '1000~5000',
  '5000~10000',
  '10000~50000',
  '>50000',
];
const currencyOption = [
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'ANG',
  'AOA',
  'ARS',
  'AUD',
  'AWG',
  'AZN',
  'BAM',
  'BBD',
  'BDT',
  'BGN',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BRL',
  'BSD',
  'BTN',
  'BWP',
  'BZD',
  'CAD',
  'CHF',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CUC',
  'CUP',
  'CVE',
  'CZK',
  'DJF',
  'DKK',
  'DOP',
  'DZD',
  'EGP',
  'ERN',
  'ETB',
  'EUR',
  'FJD',
  'FKP',
  'GBP',
  'GEL',
  'GHS',
  'GIP',
  'GMD',
  'GNF',
  'GTQ',
  'GYD',
  'HKD',
  'HNL',
  'HRK',
  'HTG',
  'IDR',
  'ILS',
  'INR',
  'IQD',
  'IRR',
  'ISK',
  'JMD',
  'JOD',
  'JPY',
  'KES',
  'KMF',
  'KPW',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LAK',
  'LBP',
  'LKR',
  'LSL',
  'LYD',
  'MAD',
  'MDL',
  'MMK',
  'MNT',
  'MOP',
  'MUR',
  'MVR',
  'MXN',
  'MYR',
  'NAD',
  'NGN',
  'NIO',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PAB',
  'PEN',
  'PGK',
  'PHP',
  'PKR',
  'PLN',
  'PYG',
  'QAR',
  'RON',
  'RSD',
  'RUB',
  'RWF',
  'SAR',
  'SBD',
  'SCR',
  'SDG',
  'SEK',
  'SGD',
  'SHP',
  'SLL',
  'SOS',
  'SRD',
  'STD',
  'SVC',
  'SYP',
  'SZL',
  'THB',
  'TJS',
  'TMT',
  'TND',
  'TOP',
  'TRY',
  'TTD',
  'TWD',
  'TZS',
  'UAH',
  'UGX',
  'USD',
  'UYU',
  'UZS',
  'VEF',
  'VND',
  'VUV',
  'WST',
  'XAF',
  'XCD',
  'XOF',
  'XPF',
  'YER',
  'ZAR',
];

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

const EditRFQ = () => {
  const { user, setUser } = useAuth();
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });
  const [Rfq, setRfq] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const [category, setCategory] = useState();
  const [productType, setProductType] = useState();
  const [productGroup, setProductGroup] = useState();
  const [sourcingType, setSourcingType] = useState();
  const [customizedDesign, setCustomizedDesign] = useState([]);
  const [sourcingPurpose, setSourcingPurpose] = useState();
  const [imageUpload, setImageUpload] = useState(false);
  const [image, setImage] = useState([]);

  const [quantityType, setQuantityType] = useState('Pieces');
  const [currency, setCurrency] = useState('USD');
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/singleQuotationDetails/' + id)
      .then(res => res.json())
      .then(data => {
        setRfq(data);
        handleSplit(data.budget, setBudget, setCurrency);
        handleSplit(data.quantity, setQuantity, setQuantityType);
        setImage(data.image);
        setCustomizedDesign(data.customizedDesign);
        handlePush(categories.options, data.category);
        handlePush(productTypes.options, data.productType);
        handlePush(productGroups.options, data.productGroup);
        handlePush(sourcingTypes.options, data.sourcingType);
        handlePush(sourcingPurposes.options, data.sourcingPurpose);
        setCategory(data.category);
        setProductType(data.productType);
        setProductGroup(data.productGroup);
        setSourcingType(data.sourcingType);
        setSourcingPurpose(data.sourcingPurpose);

        setPreloader(false);
      });
  }, [id]);
  const handlePush = (options, object) => {
    const search = options.find(ele => ele === object);
    if (!search) {
      options.push(object);
    }
  };
  const handleSplit = (string, functionNo1, functionNo2) => {
    const value = string.split(' ');
    functionNo1(value[0]);
    functionNo2(value[1]);
  };

  const min = 1;

  const [quantity, setQuantity] = useState();
  const [budget, setBudget] = useState();

  const handleQuantityType = event => {
    setQuantityType(event.target.value);
  };

  const { register, handleSubmit, reset } = useForm();
  const productImages = [];
  image.map(img => {
    if (productImages.indexOf(img) === -1) {
      productImages.push(img);
    }
  });

  const onSubmit = data => {
    if (sourcingType === 'Customized Product' && customizedDesign.length === 0)
      alert('please Select Custom design');
    if (
      (sourcingType === 'Customized Product' &&
        customizedDesign.length !== 0) ||
      sourcingType !== 'Customized Product'
    ) {
      setPreloader(true);
      data.user = user._id;
      data.createDate = Rfq.createDate;
      data.quantity = quantity + ' ' + quantityType;
      data.budget = budget + ' ' + currency;
      data.category = category;
      data.productType = productType;
      data.productGroup = productGroup;
      data.sourcingType = sourcingType;
      data.customizedDesign = customizedDesign;
      data.sourcingPurpose = sourcingPurpose;
      data.image = productImages;
      // data.size = size;
      // data.productColor = colorData;
      console.log(data);

      fetch(`http://localhost:4000/updateMyRfq/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
      })
        .then(res => res.json())
        .then(data => {
          if (data) {
            history.push(`/admin/RfqDetails/${id}`);
          } else {
            history.push(`/admin/RfqDetails/${id}`);
          }
        });
    }
  };

  const [size, setSize] = useState([]);
  const [color, setColor] = useState(createColor('#000'));
  const [colorData, setColorData] = useState('');

  const handleColorChange = value => {
    console.log('onChange=', value);
    setColor(value);
    setColorData('#' + value.hex);
  };

  const handleChange = event => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleDeleteImage = img => {
    const newArray = image.filter(ele => ele !== img);
    setImage(newArray);
  };

  // handleFile

  const handleFile = event => {
    setImageUpload(true);
    const imageData = new FormData();
    imageData.set('key', 'f16e0919dbce32c8326397f504a1e7b1');

    imageData.append('image', event.target.files[0]);
    axios
      .post(
        'https://api.imgbb.com/1/upload',

        imageData
      )
      .then(function (response) {
        const newImage = [...image];

        newImage.push(response.data.data.display_url);
        setImage(newImage);
        setImageUpload(false);
      })
      .catch(function (error) {
        alert('failed to upload. try again');
        setImageUpload(false);
      });
  };

  return (
    <>
      {preloader ? (
        <Preloader></Preloader>
      ) : (
        <GridContainer>
          <GridItem item xs={12} sm={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card>
                <CardHeader color="primary">
                  <Typography
                    variant="button"
                    className={classes.cardTitleWhite}
                  >
                    Edit your RFQ information
                  </Typography>
                </CardHeader>
                <CardBody style={{ padding: '0px 50px' }}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        defaultValue={Rfq.ProductName}
                        required
                        variant="standard"
                        placeholder="eg.Men's camp collar shirt"
                        label="Product Title"
                        name="ProductName"
                        id="ProductName"
                        {...register('ProductName')}
                      />
                    </GridItem>
                    {/* <Grid
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 10,
                  }}
                  item
                  xs={12}
                  sm={12}
                  md={4}
                  className="select_input"
                >
                  <MultipleSelect size={size} setSize={setSize} />
                </Grid> */}
                    {/* <Grid item xs={12} sm={12} md={4} className="select_input">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <TextField
                      style={{ width: "80%" }}
                      defaultValue={colorData ? "#" + colorData : ""}
                      value={colorData}
                      label="Product Color"
                    ></TextField>
                    <ColorPicker
                      hideTextfield
                      value={color}
                      onChange={handleColorChange}
                    />
                  </div>
                </Grid> */}
                    <GridItem xs={12} sm={12} md={4}>
                      <AutoCompleteComp
                        array={categories.options}
                        req={true}
                        setFunction={setCategory}
                        defaultValue={Rfq.category}
                        label={'Product Category'}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <AutoCompleteComp
                        req={true}
                        array={productGroups.options}
                        defaultValue={Rfq.productGroup}
                        setFunction={setProductGroup}
                        label={'Product Group'}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <AutoCompleteComp
                        defaultValue={Rfq.productType}
                        array={productTypes.options}
                        setFunction={setProductType}
                        label={'Product Type'}
                        req={true}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <AutoCompleteComp
                        defaultValue={Rfq.sourcingType}
                        array={sourcingTypes.options}
                        setFunction={setSourcingType}
                        label={'Sourcing Type'}
                        req={true}
                      />
                    </GridItem>
                    {sourcingType === 'Customized Product' && (
                      <Grid
                        style={{
                          display: 'flex',
                          alignItems: 'flex-end',
                          padding: 10,
                        }}
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        className="select_input"
                      >
                        <MultipleSelect
                          label={'Custom Design'}
                          array={customizedDesigns.options}
                          value={customizedDesign}
                          setValue={setCustomizedDesign}
                        />
                      </Grid>
                    )}
                    <GridItem xs={12} sm={12} md={4}>
                      <AutoCompleteComp
                        req={false}
                        defaultValue={Rfq.sourcingPurpose}
                        array={sourcingPurposes.options}
                        setFunction={setSourcingPurpose}
                        label={'Sourcing purpose'}
                      />
                    </GridItem>
                    <GridItem
                      style={{ display: 'flex', alignItems: 'end' }}
                      xs={12}
                      sm={12}
                      md={4}
                    >
                      <TextField
                        style={{
                          width: '60%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        type="number"
                        variant="standard"
                        inputProps={{ min }}
                        required
                        label="Quantity"
                        name="quantity"
                        id="quantity"
                        {...register('quantity')}
                        value={quantity}
                        onChange={e => {
                          var value = parseInt(e.target.value);
                          if (value < min) value = min;
                          setQuantity(value);
                        }}
                      />

                      <Autocomplete
                        style={{
                          width: '40%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        searchtext="example"
                        id="tags-filled"
                        options={measurementOption.map(option => option)}
                        getOptionLabel={option => option}
                        defaultValue={measurementOption.find(
                          v => v === quantityType
                        )}
                        // freeSolo
                        renderInput={params => (
                          <TextField
                            required
                            onBlur={e => setQuantityType(e.target.value)}
                            // label={categories.title}
                            id="standard-select-currency"
                            variant="standard"
                            // name="team"
                            {...params}
                          />
                        )}
                      />
                    </GridItem>
                    <GridItem
                      style={{ display: 'flex', alignItems: 'end' }}
                      xs={12}
                      sm={12}
                      md={4}
                    >
                      <TextField
                        style={{
                          width: '60%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        id="standard-select-currency"
                        variant="standard"
                        select
                        required
                        label="Max Budget"
                        value={budget}
                        onChange={e => setBudget(e.target.value)}
                      >
                        {budgetOptions.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>

                      <Autocomplete
                        style={{
                          width: '40%',
                          marginTop: '30px',
                          marginBottom: '10px',
                        }}
                        searchtext="example"
                        id="tags-filled"
                        options={currencyOption.map(option => option)}
                        getOptionLabel={option => option}
                        defaultValue={currencyOption.find(v => v === currency)}
                        // freeSolo
                        renderInput={params => (
                          <TextField
                            required
                            onBlur={e => setCurrency(e.target.value)}
                            // label={categories.title}
                            id="standard-select-currency"
                            variant="standard"
                            // name="team"
                            {...params}
                          />
                        )}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem item xs={12} sm={12} md={12}>
                      <TextField
                        required
                        style={{
                          width: '100%',
                          marginTop: '20px',
                          marginBottom: '10px',
                        }}
                        defaultValue={Rfq.productDescription}
                        variant="standard"
                        label="Product Description"
                        name="productDescription"
                        id="productDescription"
                        {...register('productDescription')}
                        multiline
                        rows={3}
                      />
                    </GridItem>
                    <GridItem item xs={12} sm={12} md={12}>
                      <TextField
                        style={{
                          width: '100%',
                          marginTop: '20px',
                          marginBottom: '10px',
                        }}
                        defaultValue={Rfq.fabricDescription}
                        variant="standard"
                        label="Fabric Description"
                        name="fabricDescription"
                        id="fabricDescription"
                        {...register('fabricDescription')}
                        multiline
                        rows={3}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem
                      style={{
                        marginBottom: '30px',
                      }}
                      item
                      xs={12}
                      sm={12}
                      md={12}
                    >
                      <div style={{ marginTop: '50px' }}>
                        <div style={{ display: 'flex' }}>
                          <input
                            onChange={handleFile}
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                            hidden
                          />
                          <label
                            style={{
                              border: '1px solid rgb(46 6 83)',
                              padding: '9px 16px',
                              fontSize: '17px',
                              backgroundColor: '#4847a430',
                              fontWeight: '400',
                            }}
                            htmlFor="contained-button-file"
                          >
                            <p style={{ padding: '5px' }}>
                              <FontAwesomeIcon
                                style={{ marginRight: '5px' }}
                                icon={faCloudUploadAlt}
                              />
                              Upload Photos
                            </p>
                          </label>
                          {productImages.map(ele => {
                            return (
                              <>
                                <div
                                  className="imgContainer"
                                  style={{ backgroundImage: `url(${ele})` }}
                                >
                                  <div className="content">
                                    <DeleteIcon
                                      onClick={() => handleDeleteImage(ele)}
                                      style={{
                                        color: 'white',
                                        fontSize: '30px',
                                      }}
                                    />
                                  </div>
                                </div>
                              </>
                            );
                          })}
                          {imageUpload && (
                            <div
                              style={{
                                marginLeft: '40px',
                              }}
                            >
                              <Spinner
                                style={{
                                  marginTop: '30px',
                                  marginBottom: '10px',
                                }}
                                name="line-spin-fade-loader"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </GridItem>
                  </GridContainer>
                </CardBody>

                <CardFooter
                  style={{
                    marginTop: 10,
                    display: 'flex',
                    justifyContent: 'start',
                    padding: '0px 34px',
                  }}
                >
                  <Button
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: 'rgb(255 0 0 / 40%)',
                      color: '#6F6A69',
                      marginRight: 5,
                    }}
                  >
                    {/* <Image  /> */}
                    {/* <FontAwesomeIcon icon={AttachFileOutlined} /> */}
                    <DeleteIcon
                      style={{ color: '#6F6A69', fontSize: 30 }}
                    />{' '}
                    Delete
                  </Button>

                  <Button
                    type="submit"
                    style={{
                      fontWeight: 'bold',
                      backgroundColor: '#388e3c',
                      color: 'primary',
                    }}
                  >
                    <SaveIcon style={{ color: 'white', fontSize: 30 }} />
                    Save
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

export default EditRFQ;
