import React, { useState, useEffect } from 'react';
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import AddIcon from '@material-ui/icons/Add';
import Button from '../../components/CustomButtons/Button';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import PaletteIcon from '@material-ui/icons/Palette';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import GestureIcon from '@material-ui/icons/Gesture';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import { useAuth } from '../../../../lib/auth.js';
import Preloader from '../../../../Preloader/Preloader'

const dummyData = [
  {
    user: 'ermg@gmail.com',
    materialImg:
      'https://cdn.shopify.com/s/files/1/0151/0741/products/b772b3a23ac34b30ffc8b4e5102a1202_a27f9848-2cc7-4701-91bb-fd65975657ad_1024x1024.jpg?v=1578649736',
    materialName: 'BLOSSOM WATERCOLOR FLORAL ART',
    materialType: 'Floral art work | BTW-069',
    composition: '100% cotton',
    weight: '100',
    materialColor: 'white floral',
    description:
      'LightWeight Single jersey Cotton Fabric(eg.for T-shirt,underWare,etc.)',
  },
  {
    user: 'ermg@gmail.com',
    materialImg:
      'https://sc04.alicdn.com/kf/Hca8d17f1447143a7b5be5414944f2102C.jpg',
    materialName: 'Viscos shirt/ Blouse poplin fabric',
    materialType: ' Main Fabric | BTW-067',
    composition: '100% cotton',
    weight: '100',
    materialColor: 'white',
    description:
      'LightWeight Single jersey Cotton Fabric(eg.for T-shirt,underWare,etc.)',
  },
];

const Parts = () => {
  const [parts, setParts] = useState([]);
  const[preloader  ,setPreloader] = useState(true);
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const { user, setUser } = useAuth();

  const PartsUser = user._id;
  useEffect(() => {
    fetch('https://calm-sea-09227.herokuapp.com/materialParts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: PartsUser }),
    })
      .then(res => res.json())
      .then(data => {
        setParts(data);
        setPreloader(false)
      });
  }, [PartsUser]);

  return (
    <>
    {
      preloader ? <Preloader></Preloader> :
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
              padding: '0px 10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
              }}
            >
              <Link to="/admin/addPartsMaterial">
                <Button component="span">
                  <AddIcon style={{ color: 'white' }} /> add yours
                  parts/material
                </Button>
              </Link>
            </div>

            <SortAndSearch color="white" />
          </CardHeader>
          {/* <Button component="span">
            <AddIcon style={{ color: 'white' }} /> add yours parts/material
          </Button> */}
          <Grid style={{ marginTop: 10 }} container spacing={1}>
            {parts.length === 0 && (
              <>
                {dummyData.map(part => {
                  return (
                    // <Link to={"/product/" + part._id}>
                    <Grid
                      style={{ cursor: 'pointer' }}
                      item
                      md={4}
                      sm={6}
                      xs={12}
                    >
                      <Box
                        display="flex"
                        style={{ height: 140, boxSizing: 'border-box' }}
                        //  bgcolor="background.paper"
                      >
                        {' '}
                        <Box flexGrow={0} bgcolor="grey.200">
                          <img
                            style={{
                              height: '100%',
                              width: '100%',
                              margin: 'auto',
                            }}
                            src={part.materialImg}
                            alt=""
                          />
                        </Box>
                        <Box p={1} flexGrow={1} bgcolor="grey.200">
                          <Typography variant="body2" gutterBottom>
                            {part.materialType}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {part.materialName}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            <GestureIcon /> {part.composition}
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
                              {part.materialColor}
                            </span>
                            <span>
                              <AspectRatioIcon /> {part.weight} gsm
                            </span>
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    // </Link>
                  );
                })}
              </>
            )}
            {parts.map(part => {
              return (
                // <Link to={}>
                <Grid
                  style={{ cursor: 'pointer' }}
                  onClick={() =>
                    history.push(`/admin/partsDetails/${part._id}`)
                  }
                  item
                  md={4}
                  sm={6}
                  xs={12}
                >
                  <Box
                    display="flex"
                    style={{ height: 140, boxSizing: 'border-box' }}
                    //  bgcolor="background.paper"
                  >
                    {' '}
                    <Box flexGrow={0} bgcolor="grey.200">
                      <img
                        style={{
                          height: '100%',
                          width: '200px',
                          margin: 'auto',
                        }}
                        src={part.materialImg}
                        alt=""
                      />
                    </Box>
                    <Box p={1} flexGrow={1} bgcolor="grey.200">
                      <Typography variant="body2" gutterBottom>
                        {part.materialType}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {part.materialName}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        <GestureIcon /> {part.composition}
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
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {' '}
                          <PaletteIcon />
                          <hr
                            style={{
                              backgroundColor: part.materialColor,
                              padding: '8px 25px',
                              marginLeft: '2px',
                              opacity: '1',
                            }}
                          ></hr>
                        </span>
                        <span>
                          <AspectRatioIcon /> {part.weight} gsm
                        </span>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                // </Link>
              );
            })}
          </Grid>
        </Card>
      </GridItem>
    </GridContainer>
    }
    </>
  );
};

export default Parts;
