import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import List from "./objects/List";
import Create from "./objects/Create";
import Edit from "./objects/Edit";
import Delete from "./objects/Delete";
import Show from "./objects/Show";

import history from "../history";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Sidebar from "./Drawer";

import Moment from "moment";
import momentLocalizer from "react-widgets-moment";

Moment.locale("en");
momentLocalizer();

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Sidebar>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/:model" exact component={List} />
          <Route path="/:model/new" exact component={Create} />
          <Route path="/:model/edit/:id" exact component={Edit} />
          <Route path="/:model/delete/:id" exact component={Delete} />
          <Route path="/tasks/:id" exact component={Show} />
        </Switch>
      </Sidebar>
    </Router>
  );
};

export default App;
