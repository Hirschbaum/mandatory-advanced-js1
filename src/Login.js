import React from 'react';
import './App.css';

class LoginPage extends React.Component {
constructor(props) {
    super(props); //props sends to render function

    this.state = {
        name: '', //this is the value from input field
        placeHolder: 'Type in Your Name',
    }; 
}

onChange = (e) =>  { //same as bind in constructor! :)
    let value = e.target.value;
  
    let regexp = /^[a-zA-Z\d\s-_]{1,12}$/;
        
    if (regexp.test(value)) {
        this.setState({ name: value}); //console.log('NAME is ', value); //what u write in input
    } //else: message, invalid username, check out postal code
}

toLogIn = () => { //because username sends to server
    this.props.logIn(this.state.name); //logIn i App.js
}


    render() {
        return (
            <div>
                <div className='login-page'>
                    <h1>Class Chat</h1>
                    <input type='text' name='username' placeholder={this.state.placeHolder} id='username'
                    value = {this.state.name} onChange = {this.onChange} />
                    <button onClick={this.toLogIn} className='login-button'>Log in</button>
                </div>
            </div>
        )
    }
}

export default LoginPage