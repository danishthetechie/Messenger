
import { Button, FormControl, TextField } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import db from './firebase/firebase';
import Message from './Message/Message'
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    //runs when the page loads
    setUserName(prompt('Please enter your username'));
    // db.collection('messages').onSnapshot(snapshot =>{
    //   setMessages(snapshot.docs.map(doc => doc.data()))
    // });

    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data() })))
    });

    
  }, [])//condition is set in [], if [] is empty, useEffect runs once the app component loads, and if there is variable or conditions, it runs everytime the condition is true

  const sendMessage = (event) =>{
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() //time of the firebase's server
    });

    setInput('');
  }


  return (
    <div className="App">
        <h2>Let's Chat</h2>
        <p>Welcome {username}</p>
        <form noValidate autoComplete="off" className="App_form">
        <FormControl className="App_formcontrol">
          <TextField className="App_input" Placeholder="Enter Message" value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="App_btn" disabled={!input} type="submit" color="primary" onClick={sendMessage} >
            <SendIcon />
          </IconButton>
        </FormControl>
          
          
        </form>

        <FlipMove>
          {messages.map(({id, message}) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>

        

      
    </div>
  );
}

export default App;
