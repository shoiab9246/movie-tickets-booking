import React, { useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// import '../../App.css'

import {
    facebookProvider,
    githubProvider,
    googleProvider,
  } from '../../config/authMethods';
  import socialMediaAuth from "../../service/auth";

  import Utils from '../../Utilities';
let API_URL = Utils.API_URL

const SignUpPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
      };

    const handleSubmit = async(e) => {
        register(username,email,password)
        e.preventDefault();
    }

      const register = async(name,email_id,pswd) => {
        console.log(name)
        console.log(email_id)
        console.log(pswd)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: name, email: email_id, password: pswd })
        };
        console.log(requestOptions.body)
        fetch(`${API_URL}/user/signup`, requestOptions)
        .then(
            async response => {
                if(response.status == 400) alert("User might already exist");
                if(response.status == 200) {
                    alert("Registered successfully")
                    navigate("/login");
                }
            }
        )
    }

    return (
        <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh', color: 'black'}}>
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required onChange={e => setUsername(e.target.value)}/>
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={e => setEmail(e.target.value)}/>
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={e => setPassword(e.target.value)}/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <p>
                <button onClick={() => handleOnClick(facebookProvider)}> FaceBook </button>
                </p>
                <p>
                <button onClick={() => handleOnClick(googleProvider)}>Google</button>
                </p>
            </form>
            
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
export default SignUpPage;