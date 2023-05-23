import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  Chip,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const CollapsableTable = props => {
  const { row, select, onProductClick } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <TableRow
        style={{
          background: checked || open ? '#f4eaff' : '',
          transition: 'all 0.3s',
        }}
        className={classes.root + 'nunito table_row'}
      >
        {/* <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell> */}
        {select && (
          <TableCell>
            <Checkbox
              onChange={() => setChecked(!checked)}
              color="default"
              inputProps={{
                'aria-label': 'checkbox with default color',
              }}
            />
          </TableCell>
        )}
        {row.data.map((prop, i) => {
          return (
            <TableCell
              key={i}
              onClick={() => setOpen(!open)}
              component="th"
              scope="row"
              style={{ cursor: 'pointer' }}
            >
              {prop}
            </TableCell>
          );
        })}
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, background: '#f4eaff' }}
          colSpan={12}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom>
                Products
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Image</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Product Id</TableCell>
                    <TableCell align="right">Quantity(pcs)</TableCell>
                    <TableCell align="right">Color</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    style={{ cursor: 'poiner' }}
                    onClick={() => onProductClick(true)}
                    className="collapsible_table transition"
                  >
                    <TableCell component="th" scope="row">
                      {' '}
                      <img
                        style={{ height: 50 }}
                        src="https://www.makrom.co.uk/3775-home_default/sl-6563-Fitted-Floral-Branch-Print-Long-Sleeve-Shirt.jpg"
                        alt=""
                      />
                    </TableCell>
                    <TableCell>Men's camp collar shirt</TableCell>
                    <TableCell>SW044-001</TableCell>
                    <TableCell align="right">100</TableCell>
                    <TableCell align="right">white</TableCell>
                    <TableCell align="right">
                      <Chip label="PP sampling" color="primary" />
                    </TableCell>
                  </TableRow>
                  <TableRow
                    style={{ cursor: 'poiner' }}
                    onClick={() => onProductClick(true)}
                    className="collapsible_table transition"
                  >
                    <TableCell component="th" scope="row">
                      {' '}
                      <img
                        style={{ height: 50 }}
                        src="https://img2.exportersindia.com/product_images/bc-full/2019/12/6637265/mens-collar-t-shirt-1576573443-5210391.jpeg"
                        alt=""
                      />
                    </TableCell>
                    <TableCell>Men's collar T-shirts</TableCell>
                    <TableCell>SW044-002</TableCell>
                    <TableCell align="right">200</TableCell>
                    <TableCell align="right">Black</TableCell>
                    <TableCell align="right">
                      <Chip label="Production" color="secondary" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default CollapsableTable;
