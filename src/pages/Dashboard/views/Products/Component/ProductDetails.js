import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../../../components/Grid/GridItem.js';

import Button from '../../../components/CustomButtons/Button';
import DropButton from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import Typography from '@material-ui/core/Typography';

import EditIcon from '@material-ui/icons/Edit';
import PaletteIcon from '@material-ui/icons/Palette';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@material-ui/core';
import Close from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const ProductDetails = () => {
  const classes = useStyles();

  const [viewImg, setViewImg] = useState(
    'https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg'
  );
  const allImg = [
    'https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg',
    'https://www.thoughtco.com/thmb/emcF2d4nKJ-S-jvIfm7zC_cAsII=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/a-section-of-blue-denim-jeans-483446419-f91daac7b1234bc98260f036f622f508.jpg',
    'https://cdn.shopify.com/s/files/1/0313/5561/files/The_Fabric_Snob-82_1024x1024.jpg?v=1618242560',
  ];

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

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 10,
        minHeight: '100%',
        width: '100%',
        background: '#000000c4',
        zIndex: 5,
        marginTop: 15,
      }}
    >
      <Box
        display="flex"
        style={{ height: 500, boxSizing: 'border-box' }}
        //  bgcolor="background.paper"
      >
        <Box style={{ height: '100%' }} p={1} flexGrow={0.3} bgcolor="grey.200">
          {allImg.map((img, i) => (
            <Box
              className="product_img"
              style={{ padding: 2, marginBottom: '10px' }}
              tabIndex="5"
              key={i}
            >
              <img
                style={{ height: '100px', width: '100%' }}
                src={img}
                alt=""
                onClick={() => setViewImg(img)}
              />
            </Box>
          ))}
        </Box>
        <Box p={1} flexGrow={2} bgcolor="grey.300">
          <img
            style={{ height: '100%', width: 'auto', margin: 'auto' }}
            src={viewImg}
            alt=""
          />
        </Box>
        <Box p={5} flexGrow={2} bgcolor="grey.100">
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
          <Typography style={{ marginTop: 20 }} variant="body2" gutterBottom>
            Size Run
          </Typography>{' '}
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <div className="size">S</div>
            <div className="size">M</div>
            <div className="size">L</div>
          </div>{' '}
          <div
            style={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'center',
            }}
          >
            <div>
              <DropButton
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                component="span"
                style={{
                  marginTop: 17,
                  padding: '7px 14px',
                  background: '#b3b3b3',
                  color: 'white',
                  borderRadius: 2,
                }}
              >
                + Start sourcing with this product
              </DropButton>
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
                        placement === 'bottom' ? 'center top' : 'center bottom',
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
                            <MenuItem style={{ padding: 10 }}>
                              Submit RFQ
                            </MenuItem>
                          </Link>
                          <Link to="/admin/digital-studio">
                            <MenuItem style={{ padding: 10 }}>
                              {' '}
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
                marginTop: 20,
                padding: 10,
                background: 'white',
                border: '1px solid grey',
                marginLeft: 5,
              }}
              component="span"
            >
              <EditIcon style={{ color: 'grey' }} />
            </Button>
          </div>
        </Box>
      </Box>
      <Box style={{ height: '100%' }} p={5} bgcolor="grey.100">
        <Typography variant="h6" gutterBottom>
          Description
        </Typography>
        <Typography variant="body2" gutterBottom>
          This is a floral full sleeve shirt. The materials are sourced from
          bangladesh.
        </Typography>
      </Box>

      <Box p={5} bgcolor="grey.200">
        <Typography variant="h6" gutterBottom>
          Bill of Materials
        </Typography>
        <Box className="bill_of_material">
          <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <Box
                display="flex"
                style={{ height: 130, boxSizing: 'border-box' }}
                //  bgcolor="background.paper"
              >
                {' '}
                <Box flexGrow={2} bgcolor="grey.200">
                  <img
                    style={{
                      height: '100%',
                      width: 'auto',
                      margin: 'auto',
                    }}
                    src="https://sc04.alicdn.com/kf/Hca8d17f1447143a7b5be5414944f2102C.jpg"
                    alt=""
                  />
                </Box>
                <Box p={1} flexGrow={0} bgcolor="grey.200">
                  <Typography variant="body1" gutterBottom>
                    BTW-067
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Viscos shirt/ Blouse poplin fabric
                  </Typography>
                  <Typography
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    <span>
                      {' '}
                      <PaletteIcon />
                      white
                    </span>
                    <span>
                      <AspectRatioIcon /> 100 gsm
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Card>
          </GridItem>
          <GridItem style={{ marginBottom: 20 }} xs={12} sm={6} md={4}>
            <Card className={classes.root}>
              <Box
                display="flex"
                style={{ height: 130, boxSizing: 'border-box' }}
                //  bgcolor="background.paper"
              >
                {' '}
                <Box flexGrow={2} bgcolor="grey.200">
                  <img
                    style={{
                      height: '100%',
                      width: 'auto',
                      margin: 'auto',
                    }}
                    src="https://cdn.shopify.com/s/files/1/0151/0741/products/b772b3a23ac34b30ffc8b4e5102a1202_a27f9848-2cc7-4701-91bb-fd65975657ad_1024x1024.jpg?v=1578649736"
                    alt=""
                  />
                </Box>
                <Box p={1} flexGrow={0} bgcolor="grey.200">
                  <Typography variant="body1" gutterBottom>
                    BTW-069
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    BLOSSOM WATERCOLOR FLORAL ART
                  </Typography>
                  <Typography
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                    variant="body2"
                    gutterBottom
                  >
                    <span>
                      {' '}
                      <PaletteIcon />
                      white floral
                    </span>
                    <span>
                      <AspectRatioIcon /> 100 gsm
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Card>
          </GridItem>
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetails;
