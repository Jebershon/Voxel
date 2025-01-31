import { useState } from "react";
import "./sign.css";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export default function Signin(){
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken] = useState("");
    const register=()=>{
        alert(email+""+password);
    }
    return (
    <>
    <div className="con">
        <div className="cards">
            <h1>Login</h1>
          <form onSubmit={(e)=>{register(e.preventDefault())}}>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Your name" required></input>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" required></input>
            <button type="submit" className="button">Login</button>
            <center>
            <GoogleLogin
              onSuccess={credentialResponse => {
                localStorage.setItem("Token",credentialResponse?.credential);
                console.log(credentialResponse);
                setToken(credentialResponse?.credential);
                navigate("/",{ state: { token } });
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
            </center>
            <p>Don't have an account? <span onClick={()=>{navigate('/Signup')}} className="sign">Signup</span></p>
          </form>
        </div>
    </div>
    </>
    )
}