import React from "react";
import { Field, reduxForm } from "redux-form";
import DatePicker from "../DatePicker";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import "react-widgets/dist/css/react-widgets.css";
import Dropdown from "../Dropdown";

import dateformat from "dateformat";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 900,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

function renderInput({ label, input }) {
  return <TextField required label={label} {...input} fullWidth />;
}

const TaskForm = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <Paper className={classes.paper}>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <h3>{props.formName}</h3>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Field
                name="first_name"
                component={renderInput}
                label="First name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="last_name"
                component={renderInput}
                label="Last name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="email" component={renderInput} label="e-mail" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="phone" component={renderInput} label="Phone" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="description"
                component={renderInput}
                label="Description"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                name="date_created"
                component={DatePicker}
                label="Date created"
                parse={(value) => dateformat(value, "yyyy-mm-dd")}
              />
            </Grid>
          </Grid>

          <div className={classes.buttons}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default reduxForm({ form: "editTask" })(TaskForm);
