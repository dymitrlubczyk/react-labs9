import { EMPLOYEES_LOADED,
  EMPLOYEE_CREATED,
  FETCH_DATA_LAUNCH,
  FETCH_DATA_PROPERLY,
  FETCH_DATA_ERROR } from './constants';
  
export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: employees
  };
}

export const employeeCreated = employee => {
  return {
    type: EMPLOYEE_CREATED,
    payload: employee
  };
};

export const fetchDataLaunch = () => {
  return {
    type: FETCH_DATA_LAUNCH,
  };
};

export const fetchDataProperly = data => {
  return {
    type: FETCH_DATA_PROPERLY,
    payload: data    
  };
};

export const fetchDataError = error=>{
  return {
    type: FETCH_DATA_ERROR,
    payload: error
  };
};

export const fetchData=()=>{
  return dispatch => {
    dispatch(fetchDataLaunch());
    fetch('http://localhost:3004/employees')
    .then(res => res.json())
    .then(data => {
        dispatch(fetchDataProperly(data));
    })
    .catch(error => {
        dispatch(fetchProductsError(error));
    })
  }
}


