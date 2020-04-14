import React from "react";
import { connect } from "react-redux";

import { getTask } from "../../actions/tasks";
import TaskForm from "./TaskForm";

class TaskEdit extends React.Component {
  componentDidMount() {
    this.props.getTask(this.props.match.params.id);
  }
  render() {
    console.log("task is", this.props.task);
    return (
      <TaskForm
        initialValues={this.props.task}
        onSubmit={() => console.log("bruh")}
        formName="Edit Task"
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { task: state.tasks[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getTask })(TaskEdit);
