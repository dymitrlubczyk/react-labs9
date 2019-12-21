import React from 'react'
import { withRouter } from 'react-router-dom'
import { userLogIn } from "../redux/actions"
import { connect } from 'react-redux'

class PageLogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user:''
        }
        this.usernameChanged = this.usernameChanged.bind(this);
        this.tryLogIn=this.tryLogIn.bind(this);
    }

    usernameChanged(e) {
        this.setState({ username: e.target.value });
    }

    tryLogIn(){

        fetch('http://localhost:3004/users')
        .then(res => res.json())
        .then(data => data.find(elem => elem.username===this.state.username))
        .then(user=>{
            if(user===undefined)
                return;
            
            this.props.userLogIn(user);
            this.props.history.push("/list");
         })
    }

    render(){
        const { 
            username
          } = this.state;
      
        return(
        <div>
            <div>User: <input type="text" value={username} onChange={this.usernameChanged}/></div>
            <button onClick={this.tryLogIn}>Login</button>
        </div>)
    }  
}
const mapDispatchToProps = (dispatch) => ({
    userLogIn: user => dispatch(userLogIn(user))
  })

export default connect(
    null,
    mapDispatchToProps,
  )(withRouter(PageLogIn))