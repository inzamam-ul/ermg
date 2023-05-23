import React, { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import './Suplier.css';

import garmentImg from './photos/garment.jpg';
import industryImg from './photos/china.gif';
import Certificate from './photos/certificate.jpg';
import SupplierFullDetails from './Component/SupplierFullDetails/SupplierFullDetails';
import SupplierCard from './Component/SupplierCard/SupplierCard';
import SortAndSearch from './Component/SortAndSearch/SortAndSearch';
// core ../../components
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Container from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';

const Suplier = () => {
  const supliers = [
    {
      img: garmentImg,
      title: 'Sinha Textile & Opex Group',
      location: 'Dhaka,Bangladesh',
      fullAddress: 'Dhaka - Sylhet Hwy,Narayangonj,Dhaka,Bangladesh',
      certificateImg: '',
    },
    {
      img: industryImg,
      title: 'Xianshui Talent knitting Garment Co. limited',
      location: 'shandong,china',
      fullAddress: 'yantai,Laishan,shandong,china',
      certificateImg: Certificate,
    },
  ];
  const [fullDetails, setFullDetails] = useState({});

  const handleFullDetails = element => {
    setFullDetails(element);
  };
  const closeFullDetails = () => {
    setFullDetails({});
  };

  return (
    <>
      {fullDetails.title ? (
        <SupplierFullDetails
          closeFullDetails={closeFullDetails}
          fullDetails={fullDetails}
          profile={true}
        ></SupplierFullDetails>
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

          <Box style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              {supliers.map(element => (
                <SupplierCard
                  fullDetails={fullDetails}
                  handleFullDetails={handleFullDetails}
                  element={element}
                ></SupplierCard>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </>
  );
};

export default Suplier;
