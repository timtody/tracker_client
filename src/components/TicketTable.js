import React, { useEffect } from "react";

import { connect } from "react-redux";
import { list } from "../actions";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import _ from "lodash";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const renderHeaders = (props) => {
  var items = [];
  var i = 0;

  for (var property in props.keys) {
    items.push(
      <StyledTableCell align="left" key={property}>
        {i > 0 ? "" : props.title}
      </StyledTableCell>
    );
    i++;
  }
  return items;
};

const renderRow = (row, keys) => {
  var items = [];
  var i = 0;

  keys.forEach((key) => {
    items.push(
      <StyledTableCell align={i > 0 ? "right" : "left"} key={key}>
        {row[key]}
      </StyledTableCell>
    );
    i++;
  });
  return items;
};

const renderChildren = (props) => {
  if (!props.tickets) {
    return "";
  }
  return _.values(props.tickets).map((e) => {
    return (
      <StyledTableRow key={e.id}>{renderRow(e, props.keys)}</StyledTableRow>
    );
  });
};

const TicketTable = (props) => {
  useEffect(() => {
    props.list("tasks");
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <StyledTableRow>{renderHeaders(props)}</StyledTableRow>
        </TableHead>
        <TableBody>{renderChildren(props)}</TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return { tickets: ownProps.filter(state["tasks"]) };
};

export default connect(mapStateToProps, { list })(TicketTable);
