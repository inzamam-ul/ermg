import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// core components
import styles from '../../assets/jss/material-dashboard-react/components/tableStyle.js';
import { Checkbox } from '@mui/material';

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor } = props;
  return (
    <div className={classes.tableResponsive}>
      <TableContainer component={Paper}>
        <Table
          className={classes.table + ' nunito'}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
              <TableRow className={classes.tableHeadRow}>
                {props?.selector && (
                  <TableCell
                    className={classes.tableCell + ' ' + classes.tableHeadCell}
                  >
                    Select
                  </TableCell>
                )}
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
            {tableData.map((rowData, key) => {
              return (
                <TableRow
                  style={{ height: props.cellHeight, cursor: 'pointer' }}
                  key={key}
                  className={classes.tableBodyRow}
                >
                  {props?.selector && (
                    <TableCell
                      styles={{ padding: props.padding }}
                      className={classes.tableCell}
                    >
                      <Checkbox
                        color="default"
                        inputProps={{
                          'aria-label': 'checkbox with default color',
                        }}
                      />
                    </TableCell>
                  )}

                  {rowData.map((prop, key) => {
                    return (
                      <TableCell
                        onClick={() => props.onCellClick(rowData)}
                        className={classes.tableCell}
                        key={key}
                      >
                        {prop}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
