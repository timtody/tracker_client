import React from "react";
import { connect } from "react-redux";

import TaskForm from "./TaskForm";
import { createTask } from "../../actions/tasks";

class TaskCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createTask(formValues);
  };
  render() {
    return <TaskForm onSubmit={this.onSubmit} formName="Create New Task" />;
  }
}

export default connect(null, { createTask })(TaskCreate);
