import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { getTasks } from "../../actions/tasks";

class TaskList extends React.Component {
  componentDidMount() {
    this.props.getTasks();
  }

  renderList = (listOfTasks) => {
    return _.map(listOfTasks, (e) => {
      return <li key={e.id}>{e.description}</li>;
    });
  };

  render() {
    if (_.isEmpty(this.props.tasks)) {
      return <div>Loding...</div>;
    } else {
      return <ul>{this.renderList(this.props.tasks)}</ul>;
    }
  }
}

const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { getTasks })(TaskList);
