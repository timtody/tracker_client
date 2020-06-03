import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import BookIcon from "@material-ui/icons/Book";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { Link } from "react-router-dom";

const drawerWidth = 170;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <Link to="/">
              <ListItem button key="0">
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>

            <Link to="/tasks">
              <ListItem button key="1">
                <ListItemIcon>
                  <ConfirmationNumberIcon />
                </ListItemIcon>
                <ListItemText primary="Tickets" />
              </ListItem>
            </Link>

            <Link to="/projects">
              <ListItem button key="2">
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {props.children}
      </main>
    </div>
  );
}
