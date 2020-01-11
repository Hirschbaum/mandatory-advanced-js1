import React from 'react';

class LoginPage extends React.Component {
constructor(props) {
    super(props); //props sends to render function

    this.state = {
        name: ' ', //this is the value from input field
    }; 
    //this.onChange = this.onChange.bind(this);
    //this.toLogIn = this.toLogIn.bind(this);
}

onChange = (e) =>  { //same as bind in constructor! :)
    let value = e.target.value;
  
    let regexp = /[a-zA-Z0-9-]{1,12}/;
    //let userName = regexp.test(value); //console.log(userName); //true if value = regex
    
    if (regexp.test(value)) {
        this.setState({ name: value}); //console.log('NAME is ', value); //what u write in input
    } //else: message, invalid username, check out postal code
}

toLogIn = () => { //because username sends to server
    //how to show chat page?
    this.props.logIn(this.state.name); //logIn i App.js
}


    render() {
        return (
            <div>
                <h3>Chat</h3>
                <div>
                    <input type='text' name='username' placeholder='Type in your user name' id='username'
                    value = {this.state.name} onChange = {this.onChange} />
                    <button onClick={this.toLogIn} >Log in</button>
                </div>
            </div>
        )
    }
}

export default LoginPage