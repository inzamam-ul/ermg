import React from 'react';
import GridItem from '../../components/Grid/GridItem.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import Container from '../../components/Card/Card.js';
import ContainerHeader from '../../components/Card/CardHeader.js';
import { useState } from 'react';
import ProjectDetails from './Component/ProjectDetails.js';
import SortAndSearch from '../Suppliers/Component/SortAndSearch/SortAndSearch.js';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import CollapsableTable from './Component/CollapsableTable.js';
import {
  Button,
  Chip,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

export default function Projects() {
  function createData(...args) {
    console.log(args);
    return {
      data: [...args],
      history: [
        { date: '2020-01-05', customerId: '11091700', amount: 3 },
        { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      ],
    };
  }

  const tableData = [
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
      <Chip label="Laying and marking" color="green" />,
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
  ];
  const rows = [
    createData(
      <img
        style={{ height: 80 }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RUrqdefxKnN63zaU2Wnxvp0kmNkZGwKi2w&usqp=CAU"
        alt=""
      />,
      'SW044',
      'Women tracksuit',
      '300 pcs',
      `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      <Chip label="Laying and marking" color="default" />
    ),
    createData(
      <img
        style={{ height: 80 }}
        src="https://image.made-in-china.com/202f0j00slofQegzVpcE/High-Quality-V-Neck-Loose-Winter-Women-Sweaters.jpg"
        alt=""
      />,
      'SW555',
      'Women sweater',
      '300 pcs',
      `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      <Chip label="PP sampling" color="primary" />
    ),
    createData(
      <img
        style={{ height: 80 }}
        src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
        alt=""
      />,
      'SW555',
      "Men's collar shirt",
      '300 pcs',
      `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
      <Chip label="Production" color="secondary" />
    ),
  ];

  const tableHead = [
    'Select',
    'Images',
    'Project Id',
    'Description',
    'Quantity',
    'Date',
    'Status',
  ];

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
  return (
    <>
      {product ? (
        <ProjectDetails project={product} setProject={setProduct} />
      ) : (
        <>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Container plain>
                <ContainerHeader
                  plain
                  color="primary"
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '3px 10px',
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
                        <AddIcon style={{ color: 'white' }} /> start new project
                      </Button>

                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        transition
                        disablePortal
                        style={{ width: 180, zIndex: '99' }}
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
                  </div>
                  <SortAndSearch />
                </ContainerHeader>
              </Container>
            </GridItem>
          </GridContainer>
          <div style={{ height: '65vh', width: '100%' }}>
            {/* <Table
          selector={true}
          onCellClick={(data) => setProject(data)}
          tableHeaderColor="primary"
          cellHeight={100}
          tableHead={[
            "Images",
            "Project ID",
            "Description",
            "Quantity",
            "Date",
            "Status",
          ]}
          tableData={[
            [
              <img
                style={{ height: 80 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0RUrqdefxKnN63zaU2Wnxvp0kmNkZGwKi2w&usqp=CAU"
                alt=""
              />,
              "SW044",
              "Women tracksuit",
              "300 pcs",
              `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
              <Chip label="Laying and marking" color="green" />,
            ],
            [
              <img
                style={{ height: 80 }}
                src="https://image.made-in-china.com/202f0j00slofQegzVpcE/High-Quality-V-Neck-Loose-Winter-Women-Sweaters.jpg"
                alt=""
              />,
              "SW555",
              "Women sweater",
              "300 pcs",
              `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
              <Chip label="PP sampling" color="primary" />,
            ],
            [
              <img
                style={{ height: 80 }}
                src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
                alt=""
              />,
              "SW555",
              "Men's collar shirt",
              "300 pcs",
              `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
              <Chip label="Production" color="secondary" />,
            ],
          ]}
        /> */}

            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    {tableHead.map((prop, i) => {
                      return <TableCell key={i}>{prop}</TableCell>;
                    })}
                    {/* <TableCell />
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <CollapsableTable
                      onProductClick={setProduct}
                      select={true}
                      key={i}
                      row={row}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
    </>
  );
}
