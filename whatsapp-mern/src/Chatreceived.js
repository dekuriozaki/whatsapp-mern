import React from 'react'
import './Chatreceived.css'

function Chatreceived() {
  return (
    <p className='chat__received'> 
          <span className='chat__Name'>Deku</span> {/* use this name of the person as another container so that it appearr once if the next message is from same person  */}
          This is the message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
    </p>
  )
}

export default Chatreceived