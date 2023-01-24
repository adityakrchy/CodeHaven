import React from 'react'
import { useState } from 'react'
import Client from './Client'
import Editor from './Editor'

const EditorPage = () => {
  const [clients, setClients] = useState([{socket: 1, username: "Aditya K"}, {socket: 2, username: "Shivangi P"}, {socket: 3, username: "Mohit M"} ])
  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
            <img className='logoImage' src="/logo_bg_removed.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientsList">
            {clients.map((client)=>(<Client key={client.socket} username={client.username} />))}
          </div>
        </div>
        <button className='btn copyBtn'>Copy Room Id</button>
        <button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap"><Editor /></div>
    </div>
  )
}

export default EditorPage   