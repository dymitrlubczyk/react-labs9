import React from 'react'
import { Link } from 'react-router-dom'

class PageLogIN extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
        this.userChanged = this.userChanged.bind(this);
    }

    userChanged(e) {
        this.setState({ user: e.target.value });
    }

    render(){
        const { 
            user
          } = this.state;
      
        return(<div>User: <input type="text" value={user} onChange={this.userChanged}/></div>)
    }
}

export default PageLogIN