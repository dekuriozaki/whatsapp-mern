import React from 'react'
import './Chatsent.css'

function Chatsent() {
  return (
    <p className='chat__sent'> 
          <span className='chat__Name'>TechnoNoob</span> {/* use this name of the person as another container so that it appearr once if the next message is from same person  */}
          Sent message
          <span className='chat__timestamp'>{new Date().toUTCString()}</span>
    </p>
  )
}

export default Chatsent