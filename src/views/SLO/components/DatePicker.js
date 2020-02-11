import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import TimeIcon from "@material-ui/icons/Timer";
import { connect } from "react-redux";
import { setSLOTime } from "../../../actions/slo";

const DatePicker = ({ timeRange, setSLOTime }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog-start"
          label="Start Date"
          format="MM/dd/yyyy"
          value={timeRange.from}
          onChange={date => setSLOTime({ date, attr: "from" })}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker-start"
          label="Start Time"
          value={timeRange.from}
          onChange={date => setSLOTime({ date, attr: "from" })}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          keyboardIcon={<TimeIcon />}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog-end"
          label="End Date"
          format="MM/dd/yyyy"
          value={timeRange.to}
          onChange={date => setSLOTime({ date, attr: "to" })}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker-end"
          label="End Time"
          value={timeRange.to}
          onChange={date => setSLOTime({ date, attr: "to" })}
          KeyboardButtonProps={{
            "aria-label": "change time"
          }}
          keyboardIcon={<TimeIcon />}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

function mapStateToProps({ slo }) {
  return { timeRange: slo.filters.timeRange };
}

export default connect(mapStateToProps, { setSLOTime })(DatePicker);
