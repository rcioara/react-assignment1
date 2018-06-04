import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
            usernames: [  {username: "Roxi"},
                          {username: "Oana"}]
          };
  
  changeUsernameHandler = (event) => {
      this.setState({
        usernames: [  {username: event.target.value},
                      {username: event.target.value}]
      });
  }
  render() {
    const style = {
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    };
    return (
      <div className="App">
        
        {this.state.usernames.map(el => {return (<div style={style}>
                                                  <UserInput change={this.changeUsernameHandler} username={el.username} /> 
                                                  <UserOutput username={el.username}/>
                                                 </div>)})}
      </div>
    );
  }
}

export default App;
