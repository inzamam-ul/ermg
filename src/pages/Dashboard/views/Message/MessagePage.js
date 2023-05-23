import * as React from 'react';
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Container from '../../components/Card/Card.js';
import ContainerHeader from '../../components/Card/CardHeader.js';
import Button from '../../components/CustomButtons/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import Chip from '@material-ui/core/Chip';
import { useState } from 'react';
import ProductsUnderProject from './ProductsUnderProject.js';

// core ../../components
import Table from '../../components/Table/Table.js';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import CardHeader from '../../components/Card/CardHeader.js';

export default function MessagePage() {
  const [product, setProduct] = useState(false);
  return (
    <>
      {product ? (
        <ProductsUnderProject product={product} setProduct={setProduct} />
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
                    flexWrap: 'wrap',
                  }}
                >
                  {/* <p className={classes.cardCategoryWhite}>Part library</p> */}
                  <div
                    className="message_header"
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Button component="span">+ start new message</Button>
                    {/* <DeleteIcon style={{ fontSize: "40px" }} /> */}
                    <Button
                      style={{
                        // marginTop: 20,
                        padding: '11px 10px',
                        // background: "white",
                        border: '1px solid grey',

                        // marginLeft: 5,
                      }}
                      component="span"
                    >
                      <DeleteIcon style={{ color: 'white' }} />
                    </Button>
                  </div>
                  <SortAndSearch
                    item={[
                      'Material',
                      'Main Fabric',
                      'Favorite',
                      'Legal Document',
                    ]}
                  />
                </CardHeader>
              </Container>
            </GridItem>
          </GridContainer>
          <div style={{ height: '65vh', width: '100%' }}>
            <Table
              selector={true}
              onCellClick={data => setProduct(data)}
              tableHeaderColor="primary"
              cellHeight={100}
              tableHead={[
                'Images',
                'Project ID',
                'Description',
                'Quantity',
                'Date',
                'Status',
              ]}
              tableData={[
                [
                  <img
                    style={{ height: 80 }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RUrqdefxKnN63zaU2Wnxvp0kmNkZGwKi2w&usqp=CAU"
                    alt=""
                  />,
                  'SW044',
                  'Women tracksuit',
                  '300 pcs',
                  `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                  <Chip label="Laying and marking" />,
                ],
                [
                  <img
                    style={{ height: 80 }}
                    src="https://image.made-in-china.com/202f0j00slofQegzVpcE/High-Quality-V-Neck-Loose-Winter-Women-Sweaters.jpg"
                    alt=""
                  />,
                  'SW555',
                  'Women sweater',
                  '300 pcs',
                  `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                  <Chip label="PP sampling" color="primary" />,
                ],
                [
                  <img
                    style={{ height: 80 }}
                    src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
                    alt=""
                  />,
                  'SW555',
                  "Men's collar shirt",
                  '300 pcs',
                  `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
                  <Chip label="Production" color="secondary" />,
                ],
              ]}
            />
          </div>
        </>
      )}
    </>
  );
}
