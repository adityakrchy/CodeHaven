import React from 'react'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        // console.log(id);
        toast.success('Room created successfully')
    };
    const joinRoom = () =>{
        if(!roomId || !username){
            toast.error('Please enter room id and username');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                username: username
            }
        });
    }

    const handleKeyEnter = (e) =>{
        if(e.key === 'Enter'){
            joinRoom();
        }
    }
    
    return (
        <div className='homepageWrapper'>
            <div className='formWrapper'>
                <img src="/logo_bg_removed.png" alt="code-haven-logo" className='logoImg' />
                <h4 className="main-room-label">Paste Invitation Room Id</h4>
                <div className="inputGroup">
                    <input type="text" value={roomId} onKeyUp={handleKeyEnter} onChange={(e)=>{setRoomId(e.target.value)}} name="roomId" placeholder='Enter Room Id' className="inputBox" />
                    <input type="text" value={username} onKeyUp={handleKeyEnter} onChange={(e)=>{setUsername(e.target.value)}} name="username" placeholder='Enter Usename' className="inputBox" />
                    <button className="btn join-btn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        if you don't have an invite, then create &nbsp; <a onClick={createNewRoom} href="" className="createNewBtn">new room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>
                    Built with ❤️ by <a href="https://www.github.com/adityakrchy" className="profileLink">@Aditya</a>
                </h4>
            </footer>
        </div>
    )
}

export default Home