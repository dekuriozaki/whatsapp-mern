import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import axios from './axios';
import './Chat.css'
import React, { useState } from 'react'
import Chatreceived from './Chatreceived';
import Chatsent from './Chatsent';

function Chat({messages}) {
  const [input,setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/api/messages/new',
      {
        message:input,
        name:"deku",
        timestamp: "12:00pm",
        received: false
      }
    )

    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar/>
        <div className='chat__headerInfo'>
          <h3>Chat Name</h3>
          <p>Last seen ...</p>
        </div>
        <div className='chat__headerRight'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        </div>
      </div>
      <div className='chat__body'>
      {messages.map((message)=>{
        if(message.received){
          return <Chatreceived message={message} />
        }else{
          return <Chatsent message={message}/>
        }
      })}
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon/>
        <IconButton>
          <AttachFileIcon/> {/*  comes in chat footer */}
        </IconButton>
        <form>
          <input value={input} 
          onChange = {e=>setInput(e.target.value)} 
          placeholder='Type a message' type='text'/>
          <IconButton>
              <KeyboardVoiceIcon/>
          </IconButton>
          <button onClick= {sendMessage} type='submit'>
            <IconButton>
              <SendIcon/>
            </IconButton>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Chat