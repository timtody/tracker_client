import React from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import { list } from "../actions";

class Dropdown extends React.Component {
  componentDidMount() {
    this.getModelData();
  }

  getModelData() {
    this.props.list(this.props.model);
  }

  renderChildren(modelData) {
    return _.map(modelData, (e) => {
      return (
        <option key={e.id} value={e.id}>
          {e[this.props.displayKey]}
        </option>
      );
    });
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel htmlFor="age-native-simple">{this.props.label}</InputLabel>
        <Select {...this.props.input}>
          <option disabled value=""></option>
          {this.renderChildren(this.props.modelData)}
        </Select>
      </FormControl>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { modelData: state[ownProps.model] };
};

export default connect(mapStateToProps, {
  list,
})(Dropdown);
