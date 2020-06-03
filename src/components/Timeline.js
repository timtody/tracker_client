import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ImageIcon from "@material-ui/icons/Image";

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

const TableWrapper = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell align="left">{props.title}</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTableCell>
              <List>{props.children}</List>
            </StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const TimelineItem = (props) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.primary}
          secondary={props.secondary}
        ></ListItemText>
      </ListItem>
      <Divider />
    </>
  );
};

export default (props) => {
  return (
    <TableWrapper title={props.title}>
      <TimelineItem
        primary="Julius added a new issue."
        secondary="10 mins ago"
      />
      <TimelineItem
        primary="Linda was added to a project."
        secondary="2 mins ago"
      />
      <TimelineItem
        primary="Julius added a new issue."
        secondary="10 mins ago"
      />
      <TimelineItem
        primary="Linda was added to a project."
        secondary="2 mins ago"
      />
      <TimelineItem
        primary="Julius added a new issue."
        secondary="10 mins ago"
      />
      <TimelineItem
        primary="Linda was added to a project."
        secondary="2 mins ago"
      />
    </TableWrapper>
  );
};
