import axios from "axios";
import React, { useState, useEffect } from "react";
import Preloader from "../../../../Preloader/Preloader";

import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "./Component/QuotationTable";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

import SendIcon from "@material-ui/icons/Send";
import ImageIcon from "@material-ui/icons/Image";

import SortAndSearch from "../Suppliers/Component/SortAndSearch/SortAndSearch.js";
import { useHistory } from "react-router";
import { Button } from "@mui/material";

const QuotationRequest = () => {
  const [quotationReq, setQuotationReq] = useState([]);
  const [preloader, setPreloader] = useState(true);
  const history = useHistory();
  

  

  useEffect(() => {
    const url = `http://localhost:4000/quotation-Requests`;
    setPreloader(true);
    axios.get(url).then((res) => {
      setQuotationReq(res.data);
    });
    setPreloader(false);
  }, []);

  const handleQuotationDetails =(element)=>{
    
    history.push(`/admin/quotation-request-details/${element._id}`)


  }

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
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px 10px",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <Button
                     style={{
                      padding: '7px 14px',
                      background: '#b3b3b3',
                      color: 'white',
                      borderRadius: 2,
                      marginRight: 10,
                      fontSize: 13,
                    }} component="span">
                 
                      <SendIcon  style={{ color: 'white' }} /> Send invitation
                    </Button>
                  </div>
                  <SortAndSearch
                    item={["by date", "by quantity", "by category", "by Name"]}
                  />
                </CardHeader>
                <CardBody>
                  <Table
                    selector={true}
                    onCellClick={handleQuotationDetails}
                    tableHeaderColor="primary"
                    tableHead={[
                      "Images",
                      "Name",
                      "Category",
                      "Quantity",
                      "Uploaded on",
                    ]}
                    tableData={quotationReq}
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

export default QuotationRequest;
