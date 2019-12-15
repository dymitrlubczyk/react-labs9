import { EMPLOYEES_LOADED,EMPLOYEE_CREATED } from './constants';

export const initialState = {
  employees: [],
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
      const  {employee}  = action.payload; 
      const updatedList=[...state.employees,employee];
      return Object.assign({},state,{ employees: updatedList,loaded:false });
    }
    default:
        return state
  }
}

export default appReducer;