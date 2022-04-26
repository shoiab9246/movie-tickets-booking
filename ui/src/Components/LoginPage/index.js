import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// import '../../App.css'
import {
    facebookProvider,
    
    googleProvider,
  } from '../../config/authMethods';
  import socialMediaAuth from "../../service/auth";

  import Utils from '../../Utilities';
  let API_URL = Utils.API_URL

export default function SignInPage() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [username, setUsername] = React.useState("");


    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
      };

      const handleSubmit = async(e) => {
        login(email,password)
        e.preventDefault();
    };

    const login = async(email_id,pswd) => {
        console.log(email_id)
        console.log(pswd)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email_id, password: pswd })
        };
        console.log(requestOptions.body)
        fetch(`${API_URL}/user/login`, requestOptions)
        .then(
            async response => {
                if(response.status == 400) alert("Incorrect email or password");
                if(response.status == 200) {
                    const data = await response.json()
                    setUsername(data.username)
                    console.log(data)
                    localStorage.setItem('username', data.username)
                    localStorage.setItem('usertype', data.usertype)
                    localStorage.setItem('email', email_id)
                    alert("Logged In Successfully")
                    window.location.href = "/"
                }
            }
        )
    }

    return (
        <div className='pay-container' style={{ textAlign: 'center', backgroundColor:'thistle', height:'150vh', color: 'black'}}>
            <h2>Sign in to us</h2>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>email address</label><br/>
                    <input type="email" name="Email" required onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="Password" required onChange={e => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                <p>or use</p>
                <p>
                <button onClick={() => handleOnClick(facebookProvider)}> FaceBook </button>
                </p>
                <p>
                <button onClick={() => handleOnClick(googleProvider)}>Google</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
