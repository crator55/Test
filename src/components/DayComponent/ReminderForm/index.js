import React from "react";
import TimePicker from "rc-time-picker";
import ColorPicker from "rc-color-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import "rc-color-picker/assets/index.css";
import "./index.css";

const reminderForm = props => {
  const time = props.reminder.time
    ? moment(props.reminder.time, "HH:mm a")
    : moment()
        .hour(0)
        .minute(0);

  return (
    <form
      method="post"
      onSubmit={(e => props.handleCreateUpdateReminder(e, props.reminder))}
    >
      <textarea
        className="description"
        placeholder="Reminder"
        maxLength="30"
        defaultValue={props.reminder.description}
      />

      <TimePicker
        showSecond={false}
        defaultValue={time}
        format="h:mm a"
        use12Hours
        inputReadOnly
      />

      <ColorPicker
        className="color-picker"
        animation="slide-up"
        color={props.reminder.color || props.defaultColor}
        onClose={props.handleSetColor}
      />
      <select
       className="city"
      >
        <option value="Quito">Quito</option>
        <option value="Medellin">Medellín</option>
        <option value="New York">New York</option>
        <option value="Cartagena">Cartagena</option>
      </select>
      <button className="btn-submit">Submit</button>

      <button
        className="btn-cancel"
        onClick={() => props.handleSetEditDay(null)}
      >
        Cancel
      </button>
    </form>
  );
};

export default reminderForm;
