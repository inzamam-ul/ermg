import { Grid, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, { useState } from 'react';
import Message from './Message.js';
import SingleProduct from './SingleProduct.js';

const ProductsUnderProject = ({ setProduct }) => {
  const [message, setMessage] = useState(false);
  return (
    <>
      {message ? (
        <Message setMessage={setMessage} />
      ) : (
        <>
          <div
            style={{ background: 'off-white', display: 'flex', padding: 10 }}
          >
            <span
              onClick={() => setProduct(false)}
              style={{
                background: 'grey',
                padding: '6px 15px',
                cursor: 'pointer',
                marginRight: 10,
                color: 'white',
                width: 100,
              }}
            >
              <ArrowBack style={{ fontSize: 15 }} /> Back
            </span>{' '}
            <Typography variant="h5">
              SW555 | Men's collar Shirt | Products under this project
            </Typography>
          </div>
          <Grid container spacing={2}>
            <SingleProduct setMessage={setMessage} />
          </Grid>
        </>
      )}
    </>
  );
};

export default ProductsUnderProject;
