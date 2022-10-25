import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar/>
        <div className='sidebarChat__Info'>
            <h2>Chat Name</h2>
            <p>Last message shared</p>
        </div>
    </div>
  )
}

export default SidebarChat