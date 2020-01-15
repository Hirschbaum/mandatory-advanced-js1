import React from 'react';
import './App.css';
import io from 'socket.io-client';
import Linkify from 'react-linkify';
import { emojify } from 'react-emojione';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            clientMessage: ' ',
            loggedIn: false,
        };

        this.socket = null

    }

    componentDidMount = () => {
        this.socket = io('http://3.120.96.16:3000');
        this.socket.on('messages', data => { //OR 'messages' or connect?
            console.log('data', data);
            this.setState({ messages: data })
        })

        this.socket.on('new_message', data => {
            this.setState({ messages: [...this.state.messages, data] })
            /*let msgs = this.state.messages;
            msgs.push(data);
            this.setState({messages: msgs});*/
        })
    }

    //to grab new message from textarea:
    onChange = (e) => {
        let value = e.target.value;
        this.setState({ clientMessage: value })
    }

    sendMessage = (e) => {
        e.preventDefault();
        console.log(this.props.name, this.state.clientMessage);
        this.socket.emit('message', {
            username: this.props.name,
            content: this.state.clientMessage,
        }, (response) => {
            this.state.messages.push(response.data.newMessage);
            this.setState({ messages: this.state.messages, clientMessage: '' })
        });
    }

    componentWillUnmount() {
        this.socket.off() //if it is empty, then it takes away all the eventlisteners
    }

    toLogOut = () => {
        this.props.logOut(this.state.loggedIn)
    }

    render() {
        let letters = this.state.clientMessage.split('').filter(letter => letter) //console.log(letters);

        let numLetters = letters.length;
        let textStyle = {};
        let alertText = {};
        if (numLetters > 200) {
            textStyle = { color: 'red' };
            alertText = { popuptext: 'Maximum 200 characters.' };
        }

        let {messages} = this.state;
    const componentDecorator = (href, text, key) => (
      <a href={href} key={key} target="_blank">
        {text}
      </a>
    );
        return (
            <div>
                <h3>Class Chat</h3>
                <button onClick={this.toLogOut}>Log out</button>

                {this.state.messages.map(x => (
                    <div key={x.id}>
                        <span className="users">{x.username}</span>
                        <span className="text"> <Linkify componentDecorator={componentDecorator}>{emojify(x.content)}</Linkify></span>
                    </div>
                ))}

                {/*to push clientMessage to messages in DOM*/}
                <form onSubmit={this.sendMessage}>
                    <textarea style={textStyle} onChange={this.onChange} value={this.state.clientMessage}></textarea>
                    <p style={textStyle}> {alertText.popuptext}</p>
                    <button onClick={this.sendMessage}>Send</button>
                </form>
            </div>
        )
    }
}

export default ChatPage