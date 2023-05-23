import React, { useState } from 'react';
// @material-ui/core ../../components
import { makeStyles } from '@material-ui/core/styles';
// core ../../components
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Container from '../../components/Card/Card.js';
import ContainerHeader from '../../components/Card/CardHeader.js';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import PaletteIcon from '@material-ui/icons/Palette';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import ProductDetails from './Component/ProductDetails.js';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import { Link, useRouteMatch, NavLink } from 'react-router-dom';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
}));

const Product = () => {
  const classes = useStyles();

  const [product, setProduct] = useState(false);

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

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const { path, url } = useRouteMatch();

  return (
    <>
      {/* {product && <ProductDetails setProduct={setProduct} />} */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Container plain>
            <ContainerHeader
              plain
              color="primary"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '3px 10px',
                flexWrap: 'wrap',
              }}
            >
              {/* <p className={classes.cardCategoryWhite}>Part library</p> */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'start',
                  alignItems: 'center',
                }}
              >
                <div>
                  <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{
                      padding: '7px 14px',
                      background: '#b3b3b3',
                      color: 'white',
                      borderRadius: 2,
                      marginRight: 10,
                      fontSize: 13,
                    }}
                  >
                    <AddIcon style={{ color: 'white' }} /> create new product
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
                            placement === 'bottom'
                              ? 'center top'
                              : 'center bottom',
                        }}
                      >
                        <Paper style={{ padding: 10 }}>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="menu-list-grow"
                              onKeyDown={handleListKeyDown}
                            >
                              <Link to="/admin/RFQ">
                                <MenuItem
                                  style={{ padding: 10 }}
                                  onClick={handleClose}
                                >
                                  Submit RFQ
                                </MenuItem>
                              </Link>
                              <Link to="/admin/digital-studio">
                                <MenuItem
                                  style={{ padding: 10 }}
                                  onClick={handleClose}
                                >
                                  Go to Digital Studio
                                </MenuItem>
                              </Link>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>

                <Button
                  style={{
                    padding: '7px 14px',
                    // background: "white",
                    background: '#b3b3b3',
                    color: 'white',
                    borderRadius: 2,
                    fontSize: 13,
                  }}
                >
                  <AddIcon style={{ color: 'white' }} /> select from library
                </Button>
              </div>
              <SortAndSearch />
            </ContainerHeader>
          </Container>
        </GridItem>
      </GridContainer>
      <Grid container spacing={2}>
        <Grid
          item
          onClick={() => setProduct(true)}
          style={{ marginBottom: 20 }}
          xs={12}
          sm={6}
          md={3}
        >
          <NavLink to={`${url}/details`}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyKONMQykP8G9mwrKaiOHIPYZJnG8UwauaFHsaO3kP5BMH1YHZ9bopKHx8fbMaI2aoWI&usqp=CAU"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle1" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle2" gutterBottom>
                  Men | Shirts | Casual
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
                  <span>
                    {' '}
                    <PaletteIcon />
                    white
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <AspectRatioIcon /> Style: A
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </NavLink>
        </Grid>
        <Grid
          item
          onClick={() => setProduct(true)}
          style={{ marginBottom: 20 }}
          xs={12}
          sm={6}
          md={3}
        >
          <Link to={`/admin/products/details`}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://media.istockphoto.com/photos/young-woman-with-fabric-samples-for-curtains-at-table-multiple-color-picture-id1137526672?k=6&m=1137526672&s=612x612&w=0&h=W9fQV5eCE3IippBcYQ19bpjFJvZKorv7sKJjpK-QWiQ="
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle1" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle2" gutterBottom>
                  Men | Shirts | Casual
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
                  <span>
                    {' '}
                    <PaletteIcon />
                    white
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <AspectRatioIcon /> Style: A
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid
          item
          onClick={() => setProduct(true)}
          style={{ marginBottom: 20 }}
          xs={12}
          sm={6}
          md={3}
        >
          <Link to={`/admin/products/details`}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://media.istockphoto.com/photos/young-woman-with-fabric-samples-for-curtains-at-table-multiple-color-picture-id1137526672?k=6&m=1137526672&s=612x612&w=0&h=W9fQV5eCE3IippBcYQ19bpjFJvZKorv7sKJjpK-QWiQ="
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle1" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle2" gutterBottom>
                  Men | Shirts | Casual
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
                  <span>
                    {' '}
                    <PaletteIcon />
                    white
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <AspectRatioIcon /> Style: A
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid
          item
          onClick={() => setProduct(true)}
          style={{ marginBottom: 20 }}
          xs={12}
          sm={6}
          md={3}
        >
          <Link to={`/admin/products/details`}>
            <Card>
              <CardMedia
                className={classes.media}
                image="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle1" gutterBottom>
                  Men's camp collar shirt
                </Typography>{' '}
                <Typography variant="subtitle2" gutterBottom>
                  Men | Shirts | Casual
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
                  <span>
                    {' '}
                    <PaletteIcon />
                    white
                  </span>
                  <span style={{ marginLeft: 20 }}>
                    <AspectRatioIcon /> Style: A
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
