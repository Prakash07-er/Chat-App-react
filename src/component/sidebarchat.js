import {React, useEffect, useState} from 'react'
import  '../style/sidebarchat.css'
import { Avatar } from '@material-ui/core'
import db from '../firebase'
import { Link } from 'react-router-dom'

export default function Sidebarchat({addNewChat, id, name}) {
const [seed, setSeed] =useState('')
const [messages, setMessages] =useState('')


useEffect(() => {
  if (id) {
    db.collection('rooms')
    .doc(id)
    .collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => (
        setMessages(snapshot.docs.map((doc) => doc.data()))
    ))
  }  
    
}, [])

useEffect(() => {
    setSeed(Math.floor(Math.random()*5000))
}, [])
    const createChat = () => {
        const chatRoom = prompt("please enter name of chat")
        
        if(chatRoom){
                db.collection('rooms').add({
                    name: chatRoom,
                })
        }
    };

    return !addNewChat? (
        <Link to={`/rooms/${id}`}>
        
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>

    ): (
        <div onClick={ createChat } className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )

}
