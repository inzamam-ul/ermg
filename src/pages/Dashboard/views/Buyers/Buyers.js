/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { createTheme } from '@material-ui/core/styles';
import FilterListIcon from '@material-ui/icons/FilterList';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import BusinessIcon from '@material-ui/icons/Business';
import AppsIcon from '@material-ui/icons/Apps';
import './Buyers.css';
import { grey } from '@material-ui/core/colors';
import BuyerCard from './BuyerCard/BuyerCard';

import BuyerFullDetails from './BuyerFullDetails/BuyerFullDetails';

// core ../../components
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Container from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';

const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    primary: {
      main: grey[400],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    marginRight: theme.spacing(2),
  },

  link: {
    display: 'flex',
    color: theme.palette.secondary,
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Buyers = () => {
  const buyers = [
    {
      img: 'https://i.ibb.co/vqFL8dP/shop-Banner1.jpg',
      address: { city: 'Mohammadpur', region: 'Dhaka', country: 'Bangladesh' },
      category: 'Apparel Printer',
      coreFactorOfSourcing: 'Sustainability',
      email: {
        firstEmail: 'mark45@gmail.com',
        secondEmail: 'mark.soldout@gmail.com',
      },
      name: 'GreenWood fashion',
      phoneNumber: '+12345687543435',
      priceRange: 'Mid-Market',
      productLine: 'sell cheap but in volume',
      targetedBuyer: '5',
      typeOfCustomer: 'B2B',
      foundationYear: '2015',
      teamSize: '10-15',
      averageRevenue: '600-700k $',
      AnnualTurnOver: '5 to 10 million $',
      certificateImg: 'https://i.ibb.co/hVpGSRf/award.png',
    },
    {
      img: 'https://i.ibb.co/yPBzyTg/shop-Banner.jpg',
      address: { city: 'Chadni chowk', region: 'Delhi', country: 'India' },
      category: 'personal Brand',
      coreFactorOfSourcing: 'faster delivery',
      email: {
        firstEmail: 'meera.fashionhouse@gmail.com',
        secondEmail: 'meera1997@gmail.com',
      },
      name: "Meera's Fashion House",
      phoneNumber: '+91765345665',
      priceRange: 'Discount Clothing',
      productLine: 'prefer fast fashion',
      targetedBuyer: '4',
      typeOfCustomer: 'B2C',
      foundationYear: '2010',
      teamSize: '10 members',
      averageRevenue: '200-500k $',
      AnnualTurnOver: '3 to 6 million $',
      certificateImg: 'https://i.ibb.co/vjFS9FL/certificate.jpg',
    },
  ];
  const classes = useStyles();
  const [fullDetails, setFullDetails] = useState({});

  const handleFullDetails = element => {
    setFullDetails(element);
  };
  const closeFullDetails = () => {
    setFullDetails({});
  };
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

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

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      {fullDetails.name ? (
        <BuyerFullDetails
          closeFullDetails={closeFullDetails}
          fullDetails={fullDetails}
        ></BuyerFullDetails>
      ) : (
        <>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Container plain>
                <CardHeader
                  plain
                  color="primary"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0px 10px',
                  }}
                >
                  <div></div>
                  <SortAndSearch
                    item={[
                      'Verified',
                      'With Compliance Certificates',
                      'Popular',
                    ]}
                  />
                </CardHeader>
              </Container>
            </GridItem>
          </GridContainer>

          <Box p={2} style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              {buyers.map((element, i) => (
                <BuyerCard
                  key={i}
                  fullDetails={fullDetails}
                  handleFullDetails={handleFullDetails}
                  element={element}
                ></BuyerCard>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Buyers;
