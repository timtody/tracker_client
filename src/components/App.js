import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import tracker from "../apis/tracker";

import TaskList from "./tasks/TaskList";
import TaskDelete from "./tasks/TaskDelete";
import TaskEdit from "./tasks/TaskEdit";
import TaskShow from "./tasks/TaskShow";
import TaskCreate from "./tasks/TaskCreate";

import Home from "./Home";

const App = () => {
  return (
    <div className="uk-container">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasks" exact component={TaskList} />
          <Route path="/tasks/new" exact component={TaskCreate} />
          <Route path="/tasks/edit/:id" exact component={TaskEdit} />
          <Route path="/tasks/delete/:id" exact component={TaskDelete} />
          <Route path="/tasks/:id" exact component={TaskShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
