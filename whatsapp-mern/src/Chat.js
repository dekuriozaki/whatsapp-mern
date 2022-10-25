import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import './Chat.css'
import React from 'react'
import Chatreceived from './Chatreceived';
import Chatsent from './Chatsent';

function Chat() {
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
        <Chatreceived/>
        <Chatsent/>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon/>
        <IconButton>
          <AttachFileIcon/> {/*  comes in chat footer */}
        </IconButton>
        <form>
          <input placeholder='Type a message' type='text'/>
          <IconButton>
              <KeyboardVoiceIcon/>
          </IconButton>
          <button type='submit'>
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