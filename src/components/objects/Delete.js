import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteTask } from "../../actions/tasks";
import { deleteProject } from "../../actions/projects";
import { deleteUser } from "../../actions/users";
import { deletePriority } from "../../actions/priorities";
import { deleteStatus } from "../../actions/status";

import Modal from "../Modal";
import List from "./List";
import history from "../../history";

class ModelDelete extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    const { id } = this.props.match.params;
    switch (this.props.match.params.model) {
      case "users":
        this.onDelete = () => {
          this.props.deleteUser(id);
          history.push("/users");
        };
        break;
      case "projects":
        this.onDelete = () => {
          this.props.deleteProject(id);
          history.push("/projects");
        };
        break;
      case "statuses":
        this.onDelete = () => {
          this.props.deleteStatus(id);
          history.push("/statuses");
        };
        break;
      case "priorities":
        this.onDelete = () => {
          this.props.deletePriority(id);
          history.push("/priorities");
        };
        break;
      case "tasks":
        this.onDelete = () => {
          this.props.deleteTask(id);
          history.push("/tasks");
        };
        break;
    }
  }

  renderActions() {
    return (
      <div>
        <div className="ui button red" onClick={this.onDelete}>
          Delete
        </div>
        <Link className="ui button primary" to="/tasks">
          Abort
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <List match={this.props.match} />
        <Modal
          header="Delete task"
          content={`Are you sure you want to delete this ${this.props.match.params.model}?`}
          actions={this.renderActions()}
          onDismiss={() => history.push(`/${this.props.match.params.model}`)}
        />
      </div>
    );
  }
}

export default connect(null, {
  deleteTask,
  deleteProject,
  deleteUser,
  deleteStatus,
  deletePriority,
})(ModelDelete);
