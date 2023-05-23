import React, { useState } from 'react';

import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Table from '../../components/Table/Table.js';
import Card from '../../components/Card/Card.js';
import CardHeader from '../../components/Card/CardHeader.js';
import CardBody from '../../components/Card/CardBody.js';
import Button from '../../components/CustomButtons/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import DocumentDetails from './Component/DocumentDetails.js';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import './Documents.css';

const Documents = () => {
  const [document, setDocument] = useState(false);

  return (
    <>
      {document ? (
        <DocumentDetails setDocument={setDocument} />
      ) : (
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
                  <Button component="span">
                    {' '}
                    <GetAppIcon /> download
                  </Button>
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
              <CardBody>
                <Table
                  selector={true}
                  onCellClick={data => setDocument(data)}
                  tableHeaderColor="primary"
                  tableHead={[
                    'Images',
                    'Name',
                    'Category',
                    'Uploaded by',
                    'Uploaded on',
                  ]}
                  tableData={[
                    [
                      <img
                        style={{ height: 50 }}
                        src="https://media.istockphoto.com/photos/young-woman-with-fabric-samples-for-curtains-at-table-multiple-color-picture-id1137526672?k=6&m=1137526672&s=612x612&w=0&h=W9fQV5eCE3IippBcYQ19bpjFJvZKorv7sKJjpK-QWiQ="
                        alt=""
                      />,
                      'doc_1.jpg',
                      'Legal document',
                      'Niger',
                      '12-12-21',
                    ],
                    [
                      <img
                        style={{ height: 50 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQGiUtM7O-N_IpgC12C45U4fEbbScyhhj8Q&usqp=CAU"
                        alt=""
                      />,
                      'doc_2.jpg',
                      'Main Fabric',
                      'Josef',
                      '12-12-21',
                    ],
                    [
                      <img
                        style={{ height: 50 }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjNma34tvAyRzf3ujWOAYv1GrX2jHstK60w&usqp=CAU"
                        alt=""
                      />,
                      'doc_3.jpg',
                      'Material',
                      'Martin',
                      '12-12-21',
                    ],
                    [
                      <img
                        style={{ height: 50 }}
                        src="https://cdn.shopify.com/s/files/1/0151/0741/products/b772b3a23ac34b30ffc8b4e5102a1202_a27f9848-2cc7-4701-91bb-fd65975657ad_1024x1024.jpg?v=1578649736"
                        alt=""
                      />,
                      'doc_4.jpg',
                      'Art work',
                      'John',
                      '12-12-21',
                    ],
                    [
                      <img
                        style={{ height: 50 }}
                        src="https://www.thoughtco.com/thmb/emcF2d4nKJ-S-jvIfm7zC_cAsII=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/a-section-of-blue-denim-jeans-483446419-f91daac7b1234bc98260f036f622f508.jpg"
                        alt=""
                      />,
                      'doc_5.jpg',
                      'Fabric',
                      'Robert',
                      '12-12-21',
                    ],
                  ]}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      )}
    </>
  );
};

export default Documents;
