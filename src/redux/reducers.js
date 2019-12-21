import {
  EMPLOYEES_LOADED,
  EMPLOYEE_CREATED,
  FETCH_DATA_LAUNCH,
  FETCH_DATA_PROPERLY,
  FETCH_DATA_ERROR,
  USER_LOG_IN
} from "./constants";

export const initialState = {
  employees: [],
  user: "",
  error: null,
  loaded: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const emps = action.payload;
      return { ...state, employees: emps, loaded: true };
    }

    case EMPLOYEE_CREATED: {
      const employee = action.payload;
      const updatedList = [...state.employees, employee];
      return { ...state, employees: updatedList, loaded: false };
    }

    case FETCH_DATA_LAUNCH: {
      return { ...state, loaded: false };
    }

    case FETCH_DATA_PROPERLY: {
      const emps = action.payload;
      return { ...state, employees: emps, loaded: true };
    }

    case FETCH_DATA_ERROR: {
      const error = action.payload;
      return { ...state, error, loaded: true };
    }

    case USER_LOG_IN: {
      const user = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
};

export default appReducer;
