import React, {useState} from 'react'
//import * as ROUTES from '../../Constants/routes.js';
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
//import Navbar from "../Components/Navbar";
import "./chat.css"

import { useEffect } from "react";
import axios from "axios";

function Chat() {
    const [user_name, setUsername] = useState('')
    function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [user_name] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={localStorage.getItem("username")} 
					onChange={(e) => setUsername(localStorage.getItem("username"))} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}
    useEffect(() => {
        console.log(localStorage.getItem("username"))
        console.log(localStorage.getItem("password"))
        

    }, [])
    
  return (
    <ChatEngine
			height='100vh'
			userName='Admin@bookmymovie.com'
			userSecret='admin'
			projectID='442a84ef-b0a5-4fc8-8894-774b1895cf71'
		/>

  );
}

export default Chat;