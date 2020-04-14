import React from "react";
import { Field, reduxForm } from "redux-form";

class TaskForm extends React.Component {
  renderInput({ label, input }) {
    return (
      <div className="uk-margin">
        <label className="uk-form-label" htmlFor="form-horizontal-text">
          {label}
        </label>
        <input className="uk-input k-form-width-medium" {...input} />
      </div>
    );
  }
  render() {
    return (
      <form
        className="uk-grid uk-grid-small"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <div className="uk-heading-small">{this.props.formName}</div>
        <div class="uk-width-1-1">
          <Field name="summary" component={this.renderInput} label="Summary" />
        </div>
        <div class="uk-width-1-1@s">
          <Field
            name="description"
            component={this.renderInput}
            label="Description"
          />
        </div>

        <div class="uk-width-1-2@s">
          <Field
            name="target_resolution_date"
            component={this.renderInput}
            label="Target resolution date"
          />
        </div>

        <div class="uk-width-1-2@s">
          <Field
            name="actual_resolution_date"
            component={this.renderInput}
            label="Actual resolution date"
          />
        </div>

        <div class="uk-width-1-1@s">
          <Field
            name="progress"
            component={this.renderInput}
            label="Progress"
          />
        </div>

        <div class="uk-width-1-1@s">
          <Field
            name="resolution_summary"
            component={this.renderInput}
            label="Resolution summary"
          />
        </div>

        <div class="uk-width-1-1@s">
          <Field name="author" component={this.renderInput} label="Author" />
        </div>

        <div class="uk-width-1-1@s">
          <Field name="project" component={this.renderInput} label="Project" />
        </div>

        <div class="uk-width-1-1@s">
          <Field
            name="assignee"
            component={this.renderInput}
            label="Assignee"
          />
        </div>

        <div class="uk-width-1-1@s">
          <Field name="status" component={this.renderInput} label="Status" />
        </div>

        <div class="uk-width-1-1@s">
          <Field
            name="priority"
            component={this.renderInput}
            label="Priority"
          />
        </div>
        <div className="uk-margin">
          <button class="uk-button uk-button-default">Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "editTask" })(TaskForm);
