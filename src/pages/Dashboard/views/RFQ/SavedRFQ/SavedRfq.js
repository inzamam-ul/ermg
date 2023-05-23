import axios from 'axios';
import React, { useState, useEffect } from 'react';

import GridItem from '../../../components/Grid/GridItem.js';
import GridContainer from '../../../components/Grid/GridContainer.js';
import Table from '../Component/RFQTable';
import Card from '../../../components/Card/Card.js';
import CardHeader from '../../../components/Card/CardHeader.js';
import CardBody from '../../../components/Card/CardBody';

import SendIcon from '@material-ui/icons/Send';
import ImageIcon from '@material-ui/icons/Image';
import Button from '../../../components/CustomButtons/Button'
import SortAndSearch from '../../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import { useHistory } from 'react-router';

import { useAuth } from '../../../../../lib/auth';
import Preloader from '../../../../../Preloader/Preloader.js';
import { Link } from 'react-router-dom';

const SavedRfq = () => {
  const [myRFQs, setMyRFQs] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const history = useHistory();

  const { user, setUser } = useAuth();

  useEffect(() => {
    fetch('http://localhost:4000/myRFQ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: user._id }),
    })
      .then(res => res.json())
      .then(data => {
        setMyRFQs(data);
        setPreloader(false);
      });
  }, [user._id]);

  const handleQuotationDetails = element => {
    history.push(`/admin/RfqDetails/${element._id}`);
  };

  return (
    <>
      {preloader ? (
        <Preloader></Preloader>
      ) : (
        <>
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
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <Link to="/admin/RFQ">
                      <Button component="span">
                        <SendIcon style={{ color: 'white' }} /> Submit RFQ
                      </Button>
                    </Link>
                  </div>
                  <SortAndSearch
                    item={['by date', 'by quantity', 'by category', 'by Name']}
                  />
                </CardHeader>
                <CardBody>
                  <Table
                    selector={true}
                    onCellClick={handleQuotationDetails}
                    tableHeaderColor="primary"
                    tableHead={[
                      'Images',
                      'Name',
                      'Category',
                      'Quantity',
                      'Status',
                    ]}
                    tableData={myRFQs}
                  />
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </>
      )}
    </>
  );
};

export default SavedRfq;
