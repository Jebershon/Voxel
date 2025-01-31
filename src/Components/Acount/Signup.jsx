import { useState } from "react";
import "./sign.css";
import { useNavigate } from "react-router-dom";
export default function Signup(){
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [dob,setDob] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const register=()=>{
        alert(name+""+email+""+dob+""+password+""+confirmPassword);
    }
    return (
    <>
    <div className="con">
        <div className="cards">
            <h1>Register</h1>
          <form onSubmit={(e)=>{register(e.preventDefault())}}>
            <input type="text" id="name" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" required></input>
            <input type="email" id="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter Email" required></input>
            <input type="date" id="dob" onChange={(e)=>{setDob(e.target.value)}} required></input>
            <input type="password" id="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" required></input>
            <input type="password" id="Confirmpassword" onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password" required></input>
            <button type="submit" className="button">Signup</button>
            <p>Already have an account? <span onClick={()=>{navigate('/Signin')}} className="sign">Login</span></p>
          </form>
        </div>
    </div>
    </>
    )
}