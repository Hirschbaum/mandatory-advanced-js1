import React from 'react';
import './App.css';
import LoginPage from './Login.js';
import ChatPage from './Chat.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      name: ' ',
    }

    this.logIn = this.logIn.bind(this);
  }

  logIn(user) { //it takes username from Login.js
    this.setState({loggedIn: true, name: user})
  }

  render() {

    return (
      <div className="App">
        {this.state.loggedIn ? <ChatPage /> : <LoginPage logIn={this.logIn}/>} 
        {/*if loggedIn true, than chatpage, otherwise login page */}
      </div>
    );
  }
}

export default App;
