import React from "react";
import { connect } from "react-redux";

import TaskForm from "./TaskForm";
import ProjectForm from "./ProjectForm";
import UserForm from "./UserForm";
import StatusForm from "./StatusForm";
import PriorityForm from "./PriorityForm";

import { create } from "../../actions";

import { createTask } from "../../actions/tasks";
import { createUser } from "../../actions/users";
import { createProject } from "../../actions/projects";
import { createStatus } from "../../actions/status";
import { createPriority } from "../../actions/priorities";

class ModelCreate extends React.Component {
  constructor(props) {
    super(props);
    switch (this.props.match.params.model) {
      case "users":
        this.form = UserForm;
        this.onSubmit = (formValues) => {
          this.props.createUser(formValues);
        };
        break;
      case "projects":
        this.form = ProjectForm;
        this.onSubmit = (formValues) => {
          this.props.createProject(formValues);
        };
        break;
      case "statuses":
        this.form = StatusForm;
        this.onSubmit = (formValues) => {
          this.props.createStatus(formValues);
        };
        break;
      case "priorities":
        this.form = PriorityForm;
        this.onSubmit = (formValues) => {
          this.props.createPriority(formValues);
        };
        break;
      case "tasks":
        this.form = TaskForm;
        this.onSubmit = (formValues) => {
          this.props.createTask(formValues);
        };
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <this.form
        onSubmit={this.onSubmit}
        formName={`Create New ${this.props.match.params.model}`}
      />
    );
  }
}

export default connect(null, {
  create,
})(ModelCreate);
