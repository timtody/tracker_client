import React from "react";

import tracker from "../apis/tracker";
import TaskList from "./tasks/TaskList";

const App = () => {
  return (
    <div className="uk-container">
      <TaskList />
    </div>
  );
};

export default App;
