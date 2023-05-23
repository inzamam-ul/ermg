import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import ImageIcon from '@mui/icons-material/Image';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// core components
import styles from '../../../assets/jss/material-dashboard-react/components/tableStyle';
import { Checkbox ,Chip } from '@mui/material';

const useStyles = makeStyles(styles);

export default function RFQTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  const handleDate = getDate => {
    let date = new Date(getDate);

    return date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  };
  return (
    <div className={classes.tableResponsive}>
      <TableContainer component={Paper}>
        <Table className={classes.table + ' nunito'}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
              <TableRow className={classes.tableHeadRow}>
              
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={
                        classes.tableCell + ' ' + classes.tableHeadCell
                      }
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((ele, key) => {
              return (
                <TableRow
                  style={{ height: props.cellHeight, cursor: 'pointer' }}
                  key={key}
                  className={classes.tableBodyRow}
                >
               

                  <TableCell
                    onClick={() => props.onCellClick(ele)}
                    className={classes.tableCell}
                  >
                    {ele.image.length !== 0 ? (
                      <img
                        style={{ height: 50, width: '100px' }}
                        src={ele.image[0]}
                        alt=""
                      />
                    ) : (
                      <ImageIcon style={{ fontSize: 50, width: '100px' }} />
                    )}
                  </TableCell>

                  <TableCell
                    onClick={() => props.onCellClick(ele)}
                    className={classes.tableCell}
                  >
                    {ele.ProductName}
                  </TableCell>
                  <TableCell
                    onClick={() => props.onCellClick(ele)}
                    className={classes.tableCell}
                  >
                    {ele.category}
                  </TableCell>
                  <TableCell
                    onClick={() => props.onCellClick(ele)}
                    className={classes.tableCell}
                  >
                    {ele.quantity}
                  </TableCell>
                  <TableCell
                    onClick={() => props.onCellClick(ele)}
                    className={classes.tableCell}
                  >
                    <Chip style={{color: 'white'}} label="Approved" color="success" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
