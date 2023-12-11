import React ,{useState}from "react";
import './LoginSignup.css';
import person_icon from '../assets/person icon.jpg'
import email_icon from '../assets/email icon.jpeg'

import psw_icon from '../assets/psw icon.jpeg'



  export const LoginSignup = () => {
const [action,setAction] = useState("sign up");
    return(
        <div className="container">
            <div className="header">
            <div className="text">sign up</div>
            <div className="underline"></div>
         </div>
        
         <div className="inputs">
            {action==="login"?<div></div>:
         <div className="input">
            <img src={person_icon} alt ="" /> 
            <input placeholder="name" type="text"/>
            
        </div>}
        <div className="inputs"  >
         <div className="input">
         <img src={email_icon} alt =""/>
            <input  placeholder ="email" type="email"  />
           
        </div>
        <div className="inputs">
         <div className="input">
         <img src={psw_icon} alt =""  />
            <input placeholder="password" type="psw"/>
            
        </div>
        </div>
        <div>
        <a href="http://www.google.com">submit</a>
      {action==="sign up"?<div></div>:
        <div className="lost-password">lost password<span>click here</span></div>}
        <div className="submit-container">
            <div className={action=== "Login"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}}>sign up</div>
            <div className={action==="signup"?"submit gray":"submit"}onClick={()=>{setAction("login")}}>login</div>
            </div> 
        </div>
        </div>
        </div>
        </div>
    )
}
