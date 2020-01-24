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

onChange = (e) =>  { //same as bind in constructor
    let value = e.target.value;
    this.setState({name: value})
}

toLogIn = () => { //because username sends to server
    this.props.logIn(this.state.name); //logIn i App.js
}


render() {

    let textStyle = {};
    let alertText = {};

    if (this.state.name.length === 0) {
        textStyle = { color: 'teal' };
        alertText = { popuptext: 'You have to type at least one letter.' };
    } else if (this.state.name.length > 12 ) {
        textStyle = { color: 'red' };
        alertText = { popuptext: 'You can write maximum 12 characters.' };
    }
        return (
            <div>
                <div className='login-page'>
                    <h1>Class Chat</h1>
                    <input 
                    type='text' name='username' 
                    placeholder={this.state.placeHolder} id='username'
                    value = {this.state.name} 
                    onChange = {this.onChange} />

                    <p style={textStyle}> {alertText.popuptext}</p>

                    <button 
                    onClick={this.toLogIn}
                    className='login-button'>Log in</button>
                </div>
            </div>
        )
    }
}

export default LoginPage