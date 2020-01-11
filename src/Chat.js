import React from 'react';

class ChatPage extends React.Component {
//i props: socket: null, later socket: link

    render(){
        return(
            <div>
                <h3>Class Chat</h3>
                <button>Log out</button>
                <div>
                {/*here the messages
                socket.on connect emit=new message
                */}
                </div>
                <br></br>
                <div>
                    <textarea></textarea>
                </div>
            </div>
        )
    }
}

export default ChatPage