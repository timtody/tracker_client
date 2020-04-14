import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";

import { getTasks } from "../../actions/tasks";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  renderList = (listOfTasks) => {
    return _.map(listOfTasks, (e) => {
      return (
        <li key={e.id}>
          {e.summary}{" "}
          <Link
            className="uk-button uk-button-default uk-align-right"
            to={`tasks/edit/${e.id}`}
          >
            Edit
          </Link>
        </li>
      );
    });
  };

  render() {
    if (_.isEmpty(this.props.tasks)) {
      return <div>Loding...</div>;
    } else {
      return (
        <div className="uk-grid">
          <div className="uk-card uk-card-body uk-width-1-2">
            <div className="uk-card-title">A list of tasks</div>
          </div>

          <div className="uk-card uk-card-body uk-width-1-2">
            <Link
              className="uk-button uk-button-default uk-align-right"
              to="/tasks/new"
            >
              New task
            </Link>
          </div>

          <div className="uk-card uk-card-body uk-width-1-1">
            <div className="uk-list uk-list-divider">
              {this.renderList(this.props.tasks)}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { getTasks })(TaskList);
