import * as actionTypes from "./actionTypes";

// Action creators
const createReminderAction = reminder => {
  return {
    type: actionTypes.CREATE,
    reminder: reminder
  };
};

const updateReminderAction = reminder => {
  return {
    type: actionTypes.UPDATE,
    reminder: reminder
  };
};

const deleteReminderAction = (date, id) => {
  return {
    type: actionTypes.DELETE,
    date: date,
    id: id
  };
};

// Actions
export const createReminder = payload => {
  return dispatch => {
    dispatch(createReminderAction(payload));
  };
};

export const updateReminder = payload => {
  return dispatch => {
    dispatch(updateReminderAction(payload));
  };
};

export const deleteReminder = (date, id) => {
  return dispatch => {
    dispatch(deleteReminderAction(date, id));
  };
};
