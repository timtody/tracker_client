import React from "react";
import { connect } from "react-redux";

import { get, update } from "../../actions";

import TaskForm from "./TaskForm";
import ProjectForm from "./ProjectForm";
import UserForm from "./UserForm";
import StatusForm from "./StatusForm";
import PriorityForm from "./PriorityForm";

class ModelEdit extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.match.params.id;
    this.model = props.match.params.model;

    this.onSubmit = (formValues) => {
      this.props.update(this.id, formValues, this.model);
    };
    this.props.get(this.id, this.model);

    switch (this.props.match.params.model) {
      case "users":
        this.form = UserForm;
        break;
      case "projects":
        this.form = ProjectForm;
        break;
      case "statuses":
        this.form = StatusForm;
        break;
      case "priorities":
        this.form = PriorityForm;
        break;
      case "tasks":
        this.form = TaskForm;
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    this.props.get(this.id, this.model);
  }

  onSubmit = (formValues) => {
    this.props.update(this.props.match.params.id, formValues, this.model);
  };

  render() {
    if (!this.props.model) {
      return <div></div>;
    } else {
      return (
        <this.form
          initialValues={this.props.model}
          onSubmit={this.onSubmit}
          formName={`Edit ${this.props.match.params.model}`}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    model: state[ownProps.match.params.model][ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, {
  get,
  update,
})(ModelEdit);
