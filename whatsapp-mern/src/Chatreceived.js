import React from 'react'
import './Chatreceived.css'

function Chatreceived({message}) {
  return (
    <p className='chat__received'> 
      <span className='chat__Name'>{message.name}</span> {/* use this name of the person as another container so that it appearr once if the next message is from same person  */}
        {message.message}
      <span className='chat__timestamp'>{message.timestamp}</span>
    </p>
  )
}

export default Chatreceived