import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { employeesLoaded,fetchData } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false,
    }
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { isLoading } = this.state;
    const { employees } = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        <div style={{textAlign:'right'}}>{this.props.user.full_name}</div>
        <h1>Employees List:</h1>
        {employees && employees.map((employee => <EmployeeLine key={employee._id || employee.id} employee={employee} />))}
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    user:state.user,
    loaded: state.loaded
  }
}

const mapDispatchToProps = (dispatch) => ({
  employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  fetchData: () => dispatch(fetchData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)