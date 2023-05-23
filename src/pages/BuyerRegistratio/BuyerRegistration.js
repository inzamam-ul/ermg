import { Grid, MobileStepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import './BuyerRegistration.css';
import OptionComponent from './OptionComponent';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Fade } from 'react-slideshow-image';
import BackgroundTexture from './BackgroundTexture';
import { ArrowForwardIos } from '@material-ui/icons';
import './BuyerRegistration.css';
import Axios from 'axios';
import { useAuth } from '../../lib/auth';
import logo from '../../assets/img/1.png';
import logo_2 from '../../assets/img/6.png';
import { useHistory } from 'react-router';
import Preloader from '../../Preloader/Preloader';

//option data
const roles = {
  title: "Are you a super User ?",
  options: [
    { text: "I am an Enterprise Buyer", value: "buyer" },
    { text: "I am an Enterprise Supplier", value: "supplier" },
  ],
  value: [],
};

const categories = {
  title: "How would you categorize yourself ?",

  options: [
    "I have a personal Label Brand",

    "I am an Apparel Printer",

    "I am a Dedicated Wholesale Distributor",

    "Others",
  ],
};

const teamOption = {
  title: "How big is your team ?",

  options: [
    "I am a one man Army",

    "I have a squad of 1-10",

    "My team is 11-50 members strong",

    "My Organization has more than 50+ members",
  ],
};
const targetedBuyers = {
  title: "Who Do You Sell Your Product to? People who ",

  options: [
    "want would prefer luxurious apparel",

    "would want to buy cheap but in volume",

    "prefer fast fashion",

    "want to buy cheap and easy products",
    "would prefer sustainability over everything ",
    "Others",
  ],
};
const productTypes = {
  title: "What's Your Product Line ?",

  options: [
    "Shirts,T-Shirts, Tops, Tanks and Products Similar to that",

    "sweaters, jumpers, Trench Coat, Suits and Products akin to that.",

    "lingerie, Socks, Pajama, Shawl, Hat Bikini and products like that",

    "Button, Belt, Fabrics and materials like that",

    "Others",
  ],
};
const priceRange = {
  title: "What's the Price Range you Operate in ?",

  options: [
    "Discount Clothing",

    "Value for Money Apparel",

    "Mid-Market",

    "Mass Market which is High End",
    "Luxury Market which is High End",

    "Others",
  ],
};
const coreFactorOfSourcing = {
  title: "What do you think is the core factor of sourcing ?",

  options: [
    "Cost should be the most important element",

    "Sustainability is my Core factor while sourcing",

    "I Prefer sourcing experience with high product development capabilities",

    "I need faster delivery and lower lead time",

    "Others",
  ],
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const BuyerRegistration = ({ setFetchUser }) => {
  const [controlState, setControlState] = useState(0);
  const [step, setStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    role: "",
    category: "",
    team: "",
    targetedBuyer: "",
    productLine: "",
    priceRange: "",
    coreFactorOfSourcing: "",
    name: "",
    email: "",
    secondEmail:"",
    city: "",
    region: "",
    country: "",
    phoneNumber: "",
  });

  const [textField, setTextField] = useState(false);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  //handle  selected option states
  // const [team, setTeam] = useState("");
  // const [buyer, setBuyer] = useState("");
  // const [myProductType, setProductType] = useState("");
  // const [myPriceRange, setMyPriceRange] = useState("");
  // const [coreFactor, setCoreFactor] = useState("");

  //handle stepper

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(step + 1);
    setStep(step + 1);
  };

  const handleBack = () => {
    setActiveStep(step - 1);
    setStep(step - 1);
  };

  // handle steps states //
  let selectedCategoryItem = [];

  selectedCategoryItem = [
    ...categories.options.filter((c) => c === userInfo.category),
  ];
  if (textField) selectedCategoryItem = ["Others"];

  let selectedRole = [];

  selectedRole = [...roles.options.filter((c) => c.value === userInfo.role)];
  console.log(selectedRole);
  const handleRoleOption = (e) => {
    userInfo.role = e;
    setUserInfo(userInfo);
    setControlState(controlState + 1);
  };

  const handleOption = (e) => {
    userInfo.category = e.currentTarget.textContent;
    setUserInfo(userInfo);
    setControlState(controlState + 1);

    if (e.currentTarget.textContent === "Others") {
      setTextField(true);
    } else {
      setTextField(false);
    }
  };
  const handleCountry = (e) => {
    setCountry(e);
  };
  const handleRegion = (e) => {
    setRegion(e);
  };
  const handlePhoneNumber = (e) => {
    userInfo.phoneNumber = e;
    setUserInfo(userInfo);
  };

  const handleInputValues = (e) => {
    if (e.target.name === "category") {
      userInfo.category = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "name") {
      userInfo.name = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "email") {
      let inputFieldValid = true;

      inputFieldValid =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          e.target.value
        );

      if (inputFieldValid === true) {
        userInfo.email = e.target.value;
        setUserInfo(userInfo);
      }
      if (inputFieldValid === false) alert("Email address in not valid");
    }
    if (e.target.name === "city") {
      userInfo.city = e.target.value;
      setUserInfo(userInfo);
    }
    if (e.target.name === "secondaryEmail") {
      if (e.target.value !== "") {
        let inputFieldValid = true;

        inputFieldValid =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            e.target.value
          );

        if (inputFieldValid === true) {
          userInfo.secondEmail = e.target.value;
          setUserInfo(userInfo);
        }
        if (inputFieldValid === false) alert("Email address in not valid");
      }
    }
  };

  // handle selected data and pushing them into info object
  const handleRole = () => {
    if (userInfo.role === "") {
      alert("please select One Role");
    } else {
      handleNext();
    }
  };
  const handleCategory = () => {
    if (userInfo.category === "" || userInfo.category === "Others") {
      alert("please select One category");
    } else {
      handleNext();
    }
  };
  const handleTeam = () => {
    if (userInfo.category === "") {
      alert("please select One");
    } else {
      handleNext();
    }
  };
  const handleTargetedBuyer = () => {
    if (userInfo.targetedBuyer === "" || userInfo.targetedBuyer === "Others") {
      alert("please select One");
    } else {
      handleNext();
    }
  };

  const handleProductType = () => {
    if (userInfo.productLine === "" || userInfo.productLine === "Others") {
      alert("please select One");
    } else {
      handleNext();
      // userInfo.productLine = myProductType;
      // setUserInfo(userInfo);
    }
  };
  const handlePriceRange = () => {
    if (userInfo.priceRange === "" || userInfo.priceRange === "Others") {
      alert("please select One");
    } else {
      handleNext();
      // userInfo.priceRange = myPriceRange;
      // setUserInfo(userInfo);
    }
  };
  const handleCoreFactor = () => {
    if (
      userInfo.coreFactorOfSourcing === "" ||
      userInfo.coreFactorOfSourcing === "Others"
    ) {
      alert("please select One");
    } else {
      handleNext();
      // userInfo.coreFactorOfSourcing = coreFactor;
      // setUserInfo(userInfo);
    }
  };
  const handleInputName = () => {
    if (userInfo.name === "") {
      alert("Name can not be empty");
    } else {
      handleNext();
    }
  };
  const handleInputEmail = () => {
    if (userInfo.email === "") {
      alert("Email can not be empty");
    } else {
      handleNext();
    }
  };
  const handleAddress = () => {
    if (country && region && userInfo.city) {
      userInfo.country = country;
      userInfo.region = region;
      setUserInfo(userInfo);
      handleNext();
    } else {
      if (country === "") alert("country can not be empty");
      if (region === "") alert("region can not be empty");
      if (userInfo.city === "") alert("city name can not be empty");
    }
  };
  const handleSecondaryInfo = () => {
    handleNext();
  };
  const [preloader, setPreloader] = useState(true);
  const { user, setUser } = useAuth();
  const history = useHistory();
  const url = `http://localhost:4000/addUser`;

  useEffect(() => {
    setPreloader(true);
    setUser({ ...user, role: "none" });
    const url = `http://localhost:4000/fetchUser/${user.email}`;
    Axios.get(url).then((res) => {
      if (res.data) {
        history.push("/admin");
      } else {
        setPreloader(false);
      }
    });
  }, []);
  const handleSubmit = () => {
    setPreloader(true);
    const userdata = { ...user, userInfo };
    console.log(userdata);
    Axios.post(url, userdata).then((res) => {
      history.push("/admin/dashboard");
      setPreloader(false);
    });
  };

  console.log(userInfo);

  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <Grid
          container
          className="registrationContainer"
          style={{
            alignItems: "center",
            justifyContent: "center",
            background: "#e5e5e5",
          }}
        >
          <BackgroundTexture />
          <Grid
            data-aos="zoom-in"
            data-aos-delay="20"
            style={{
              background: "white",
              boxShadow:
                "2px 0px 12px 1px #80808063, 0px 1px 12px 1px #4f4f4f30",
              zIndex: 1,
            }}
            container
          >
            <Grid
              item
              style={{
                background: "#e0e0e0",
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
              xs={12}
            >
              {" "}
              <span
                style={{ color: "#8f8f8f", fontSize: 30 }}
                className="material-icons"
              >
                stop
              </span>
              <span
                style={{ color: "#8f8f8f", fontSize: 21 }}
                className="material-icons"
              >
                lens
              </span>
              <span
                style={{
                  color: "#8f8f8f",
                  fontSize: 33,
                  transform: "rotate(90deg)",
                }}
                className="material-icons"
              >
                play_arrow
              </span>
            </Grid>
            <Grid container>
              <Grid
                style={{ padding: 10, background: "#331c41" }}
                item
                xs={12}
                md={6}
              >
                <AutoPlaySwipeableViews index={activeStep}>
                  <div
                    style={{
                      textAlign: "left",
                      color: "white",
                      padding: "0px 50px",
                      margin: "auto",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "center",
                      flexDirection: "column",
                      height: "100%",
                    }}
                    className="stepContent"
                  >
                    <Typography
                      style={{ marginBottom: 50 }}
                      variant="h3"
                      component="h2"
                    >
                      Hey, {user.name}
                    </Typography>
                    <Typography
                      style={{
                        paddingBottom: "50px",
                      }}
                      variant="body1"
                      component="h2"
                    >
                      Excited to see you interested in our platform. Every
                      single of us is here to help you. Let's introduce
                      ourselves and get to know you better!
                    </Typography>

                    <Button
                      style={{ marginTop: 20, padding: "10px 50px" }}
                      onClick={() => handleNext()}
                      variant="contained"
                      color="secondary"
                    >
                      {" "}
                      Let's Continue
                      <ArrowForwardIos style={{ width: "16px" }} />
                    </Button>
                  </div>

                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="stepContent"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      {roles.title}
                    </Typography>

                    {roles.options.map((option) => (
                      <p onClick={(e) => handleRoleOption(option?.value)}>
                        {option?.value === selectedRole[0]?.value ? (
                          <Button className={"selectedBtn"} variant="outlined">
                            {option.text}
                          </Button>
                        ) : (
                          <Button className={"optionBtn"} variant="outlined">
                            {option.text}
                          </Button>
                        )}
                      </p>
                    ))}

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleRole}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "center",
                      color: "white",
                      padding: "0px 50px",
                      margin: "auto",
                    }}
                    className="stepContent"
                  >
                    <Typography variant="h3" component="h2">
                      <img style={{ height: 100 }} src={logo} alt="" />
                    </Typography>
                    <Typography
                      style={{ marginTop: 20, textAlign: "left" }}
                      variant="body1"
                    >
                      As a Superuser {userInfo.role}, You will be able to
                      manage, organize, control all the actions inside the
                      platform. You will be able to invite your{" "}
                      {userInfo.role === "buyer" && "suppliers"}
                      {userInfo.role === "supplier" && "buyers"} and get through
                      the order management process without breaking a sweat. So,
                      enjoy your time! <br />
                      Best Wishes from eRMG.
                    </Typography>

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleNext}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="stepContent"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      {categories.title}
                    </Typography>

                    {categories.options.map((option) => (
                      <p onClick={(e) => handleOption(e)}>
                        {option === selectedCategoryItem[0] ? (
                          <Button className={"selectedBtn"} variant="outlined">
                            {option}
                          </Button>
                        ) : (
                          <Button className={"optionBtn"} variant="outlined">
                            {option}
                          </Button>
                        )}
                      </p>
                    ))}
                    {textField && (
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        className="otherTextFld"
                      >
                        <input
                          autoFocus
                          onChange={(e) => handleInputValues(e)}
                          name="category"
                          style={{ padding: "15px 5px" }}
                          placeholder="Write your category"
                        />
                      </form>
                    )}

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleCategory}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>
                  {/* 
                  <OptionComponent
                    handleOptionSubmitBtn={handleTeam}
                    step={teamOption}
                    back={handleBack}
                    selectedData={userInfo.team}
                    name={"team"}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                  ></OptionComponent>

                  <OptionComponent
                    handleOptionSubmitBtn={handleProductType}
                    step={productTypes}
                    back={handleBack}
                    name={"productLine"}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                  ></OptionComponent>

                  <OptionComponent
                    handleOptionSubmitBtn={handleTargetedBuyer}
                    step={targetedBuyers}
                    back={handleBack}
                    name={"targetedBuyer"}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                  ></OptionComponent>

                  <OptionComponent
                    handleOptionSubmitBtn={handlePriceRange}
                    step={priceRange}
                    back={handleBack}
                    name={"priceRange"}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                  ></OptionComponent>

                  <OptionComponent
                    handleOptionSubmitBtn={handleCoreFactor}
                    step={coreFactorOfSourcing}
                    back={handleBack}
                    name={"coreFactorOfSourcing"}
                    setUserInfo={setUserInfo}
                    userInfo={userInfo}
                  ></OptionComponent> */}

                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="inputContent"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      What would you want your profile name to be ?
                    </Typography>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="inputTextFld"
                    >
                      <input
                        onChange={(e) => handleInputValues(e)}
                        name="name"
                        style={{ marginBottom: "40px", padding: "15px 5px" }}
                        placeholder="Enter your name here"
                        type="text"
                        required
                      />
                    </form>

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleInputName}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="inputContent"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      What is your mail address?
                    </Typography>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="inputTextFld"
                    >
                      <input
                        onBlur={(e) => handleInputValues(e)}
                        name="email"
                        type="email"
                        style={{ marginBottom: "40px", padding: "15px 5px" }}
                        placeholder="Enter your email here"
                        required
                      />
                    </form>

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleInputEmail}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>

                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="inputContent"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      Where are you Based?
                    </Typography>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="inputTextFld"
                    >
                      <CountryDropdown
                        placeholder=""
                        style={{
                          display: "block",
                          marginBottom: "20px",
                          padding: "15px 5px",
                        }}
                        value={country}
                        onChange={handleCountry}
                      />
                      {country && (
                        <RegionDropdown
                          style={{
                            display: "block",
                            marginBottom: "20px",
                            padding: "15px 5px",
                          }}
                          country={country}
                          value={region}
                          onChange={handleRegion}
                        />
                      )}

                      {region && (
                        <input
                          onChange={(e) => handleInputValues(e)}
                          name="city"
                          type="text"
                          style={{ marginBottom: "20px", padding: "15px 5px" }}
                          placeholder="City"
                          required
                        />
                      )}
                    </form>

                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleAddress}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div>
                  {/* 
                  <div
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                    }}
                    className="inputContent_phn"
                  >
                    <Typography
                      style={{
                        paddingBottom: "20px",
                        textTransform: "capitalize",
                        paddingTop: "10px",
                      }}
                      variant="h5"
                      component="h2"
                    >
                      Your Secondary Contact Information ?
                    </Typography>

                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="inputTextFld"
                    >
                      <input
                        onBlur={(e) => handleInputValues(e)}
                        name="secondaryEmail"
                        type="email"
                        style={{ marginBottom: "40px", padding: "15px 5px" }}
                        placeholder="Enter your email address  (Optional)"
                        required
                      />
                      <PhoneInput
                        style={{ marginBottom: "40px" }}
                        className="PhnInputTextFld"
                        placeholder="Enter phone number"
                        value={userInfo.phoneNumber}
                        onChange={handlePhoneNumber}
                      />
                    </form>

                    <div
                      className="next_prev_btn"
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleBack}
                      >
                        <ArrowBackIosIcon style={{ width: "12px" }} />
                        Previous
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="secondary"
                        onClick={handleSecondaryInfo}
                      >
                        Continue
                        <ArrowForwardIos style={{ width: "12px" }} />
                      </Button>
                    </div>
                  </div> */}

                  <div
                    className="stepContent"
                    style={{
                      color: "white",
                      margin: "auto",
                      padding: "0px 30px",
                      textAlign: "left",
                    }}
                  >
                    <img
                      style={{ height: "110px", margin: "15px 0px" }}
                      src={logo}
                      alt=""
                    />
                    <Typography
                      variant="h3"
                      style={{
                        fontFamily: "'Train One', cursive",
                        margin: "20px 0px",
                      }}
                    >
                      Thanks for Registration
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        fontFamily: "'Train One', cursive",
                        margin: "20px 0px",
                      }}
                    >
                      Let's start your journey with eRMG
                    </Typography>
                    <Button
                      onClick={handleSubmit}
                      variant="contained"
                      color="secondary"
                    >
                      Go To Dashboard
                    </Button>
                  </div>
                </AutoPlaySwipeableViews>
                <MobileStepper
                  className="registrationStepper"
                  style={{
                    justifyContent: "center",
                    position: "relative",
                    backgroundColor: "rgb(0 0 0 / 0%)",
                  }}
                  steps={8}
                  position="static"
                  activeStep={activeStep}
                />
              </Grid>
              <Grid
                style={{ padding: "30px 50px", background: "#e6eefb" }}
                item
                xs={12}
                md={6}
                className="reg_right_container"
              >
                <div className="slide-container">
                  <Fade>
                    <div className="each-fade">
                      <div className="img_container">
                        <img style={{ height: 100 }} src={logo_2} alt="" />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="img_container">
                        <img
                          src="https://i.ibb.co/v4Kr2vK/web-sample-2-transparency-01-01-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="img_container">
                        <img
                          src="https://i.ibb.co/xjk23DG/web-sample1-transparency-01-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="each-fade">
                      <div className="img_container">
                        <img
                          src="https://i.ibb.co/x5BWmXJ/web-sample3-transparency-01-01-1.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </Fade>
                </div>
                <div style={{ textAlign: "center", padding: "5%" }}>
                  <Typography
                    style={{
                      fontSize: 18,
                      fontWeight: 400,
                      color: "#472f83",
                      fontFamily: "'Maven Pro', sans-serif",
                    }}
                    variant="body1"
                  >
                    Upgrade Your Business Platform with eRMG
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 30,
                      marginTop: 15,
                      fontWeight: "600",
                      color: "#rgb(107 107 107)",
                      fontFamily: "'Maven Pro', sans-serif",
                    }}
                    variant="h5"
                  >
                    Reduce your risk, prevent breaches <br />
                    and get better quality
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 16,
                      marginTop: 20,
                      fontWeight: 500,
                      color: "rgb(65 65 65)",
                      fontFamily: "'Maven Pro', sans-serif",
                      padding: "0px 22px",
                    }}
                    variant="body1"
                  >
                    Use eRMG to continuously improve your business, be hassle
                    free, and control third-party risk
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default BuyerRegistration;
