import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import _ from "lodash";

import { list } from "../../actions";

/*
props:
  model: the name of the model this component handles
  listKey: the key of the model which is displayed inline in table
  description: the description above the list
*/

class ModelList extends React.Component {
  fetchModelData() {
    this.props.list(this.props.match.params.model);
    switch (this.props.match.params.model) {
      case "users":
        this.listKey = "first_name";
        break;
      case "projects":
        this.listKey = "summary";
        break;
      case "statuses":
        this.listKey = "status";
        break;
      case "priorities":
        this.listKey = "priority";
        break;
      case "tasks":
        this.listKey = "summary";
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    this.fetchModelData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.model !== this.props.match.params.model) {
      this.fetchModelData();
    }
  }

  renderList = (listOfModels) => {
    if (_.isEmpty(this.props.modelData)) {
      return <div>No entries yet...</div>;
    } else {
      return _.map(listOfModels, (e) => {
        return (
          <div key={e.id}>
            <ListItem>
              <div className="content" style={{ flex: 1 }}>
                {e[this.listKey]}
              </div>

              <Link
                to={`${this.props.match.params.model}/delete/${e.id}`}
                style={{ margin: "2px" }}
              >
                <Button edge="end" variant="contained" color="secondary">
                  Delete
                </Button>
              </Link>

              <Link
                to={`${this.props.match.params.model}/edit/${e.id}`}
                style={{ margin: "2px" }}
              >
                <Button edge="end" variant="contained">
                  Edit
                </Button>
              </Link>
            </ListItem>
            <Divider />
          </div>
        );
      });
    }
  };

  render() {
    return (
      <div>
        <Grid container>
          <Typography variant="h3" style={{ flex: "1" }}>
            A list of {`${this.props.match.params.model}`}
          </Typography>

          <Link to={`/${this.props.match.params.model}/new`}>
            <Fab
              color="secondary"
              style={{ position: "absolute", bottom: "10px", right: "10px" }}
            >
              <AddIcon />
            </Fab>
          </Link>
        </Grid>
        <br />

        <List>{this.renderList(this.props.modelData)}</List>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { modelData: state[ownProps.match.params.model] };
};

export default connect(mapStateToProps, {
  list,
})(ModelList);
