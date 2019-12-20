import {EMPLOYEES_LOADED,
        EMPLOYEE_CREATED,
        FETCH_DATA_LAUNCH,
        FETCH_DATA_PROPERLY,
        FETCH_DATA_ERROR } from './constants'

export const initialState = {
  employees: [],
  error: null,
  loaded: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      return Object.assign({}, state, { employees,loaded:true});
    }

    case EMPLOYEE_CREATED: {
      const  { employee } = action.payload; 
      const updatedList=[...state.employees,employee];
      return Object.assign({},state,{ employees: updatedList,loaded:false });
    }

    case FETCH_DATA_LAUNCH:{
      return Object.assign({},state,{loaded:false});
    }

    case FETCH_DATA_PROPERLY:{
      const { employees } = action.payload;
      return Object.assign({},state,{ employees,loaded:true});
    }

    case FETCH_DATA_ERROR:{
      const { error } = action.payload
      return Object.assign({},state,{ error,loaded:true});
    }

    default:
        return state
  }
}

export default appReducer;