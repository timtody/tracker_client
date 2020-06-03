import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

const DatePicker = ({ label, input }) => {
  if (input.value === "") {
    input.value = Date();
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        variant="inline"
        format="yyyy-MM-dd"
        label={label}
        {...input}
        fullWidth
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
