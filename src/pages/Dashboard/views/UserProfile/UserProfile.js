import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router';
// @material-ui/core ../../components
import { makeStyles } from '@material-ui/core/styles';
// core ../../components
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Button from '../../components/CustomButtons/Button.js';
import Card from '../../components/Card/Card.js';
import CardAvatar from '../../components/Card/CardAvatar.js';
import CardBody from '../../components/Card/CardBody.js';
import { useAuth } from '../../../../lib/auth.js';
import SupplierFullDetails from '../Suppliers/Component/SupplierFullDetails/SupplierFullDetails.js';
import Preloader from '../../../../Preloader/Preloader.js';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import badgeImage from './check.png';

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

export default function UserProfile() {
  const [userData, setUserData] = useState();
  const [complete, setComplete] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [details, setDetails] = useState({
    img: 'https://i.pinimg.com/originals/c1/52/48/c15248e44e6e10e2c123deacb1fed860.jpg',
    title: 'Sinha Textile & Opex Group',
    location: 'Dhaka,Bangladesh',
    fullAddress: 'Dhaka - Sylhet Hwy,Narayangonj,Dhaka,Bangladesh',
    certificateImg: '',
    about: '',
  });
  const history = useHistory();

  // handle useEffect
  useEffect(() => {
    const url = `http://localhost:4000/fetchUser/${user.email}`;
    Axios.get(url).then(res => {
      if (res.data) {
        const mainObject = res.data.userInfo;
        setUserData(mainObject);
        const newDetails = {
          img: mainObject.image,

          title: mainObject.name,
          location: mainObject.city + '-' + mainObject.country,
          fullAddress:
            mainObject.city +
            ',' +
            mainObject.region +
            ',' +
            mainObject.country,
          certificateImg: '',
          about: mainObject.about,
        };
        setDetails(newDetails);
        if (
          mainObject.image &&
          mainObject.name &&
          mainObject.email &&
          mainObject.about &&
          mainObject.city &&
          mainObject.role &&
          mainObject.category &&
          mainObject.team &&
          mainObject.targetedBuyer &&
          mainObject.productLine &&
          mainObject.priceRange &&
          mainObject.coreFactorOfSourcing &&
          mainObject.country &&
          mainObject.region
        ) {
          setComplete(true);
        }
        setPreloader(false);
      }
    });
  }, []);

  const { user, signOut } = useAuth();

  const classes = useStyles();
  return (
    <div>
      {preloader ? (
        <Preloader></Preloader>
      ) : (
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            {userData && (
              <SupplierFullDetails profile={false} fullDetails={details} />
            )}
          </GridItem>

          {userData && (
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <div style={{ marginTop: 60 }}>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={
                      complete && (
                        <img
                          style={{ height: '20px' }}
                          src={badgeImage}
                          alt=""
                        />
                      )
                    }
                  >
                    <Avatar
                      style={{ height: '70px', width: '70px' }}
                      alt="user Image"
                      src={user.photoUrl}
                    />
                  </Badge>
                </div>

                <CardBody profile>
                  <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  <h4 className={classes.cardTitle}>{user.name}</h4>
                  <p className={classes.description}>
                    I'm {user.name}. I'm the CEO Of the company. Our company is
                    one fo the famous company in asia
                  </p>
                  <Button onClick={signOut} color="primary" round>
                    logout
                  </Button>
                  {complete ? (
                    <Button
                      style={{ marginLeft: 5 }}
                      onClick={() => history.push('/admin/edit-profile')}
                      color="secondary"
                      round
                    >
                      Edit profile
                    </Button>
                  ) : (
                    <Button
                      style={{ marginLeft: 5 }}
                      onClick={() => history.push('/admin/edit-profile')}
                      color="danger"
                      round
                    >
                      Complete Your profile
                    </Button>
                  )}
                </CardBody>
              </Card>
            </GridItem>
          )}
        </GridContainer>
      )}
    </div>
  );
}
