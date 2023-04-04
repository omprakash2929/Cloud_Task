import * as actionTypes from "../action/type";

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TASK:
      return [action.payload, ...state];
    case actionTypes.GetAll_Task:
      return action.payload;
    case actionTypes.DELETE_Task:
      return state.filter((task) => task._id !== action.payload._id);
    case actionTypes.UPDATE_Task:
      return state.map((task) =>
        task._id === action.payload._id
          ? { ...task, data: action.payload.data }
          : task
      );
    case actionTypes.ADDNEW_User:
      return [action.payload, ...state];
    default:
      return state;
  }
};
