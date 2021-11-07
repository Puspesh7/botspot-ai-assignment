import React,{ useRef,useState,useEffect } from 'react'
import {auth} from "../firebase.js";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from '@firebase/auth';
import './LoginScreen.css'

function LoginScreen(props) {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [login,setLogin] = useState(true);

    const [errormessagelogin,setErrormessagelogin] = useState("");
    const [errormessagesignup,setErrormessagesignup] = useState("");

    const register = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
            props.getUser(authUser);
        })
        .catch((error) =>{
            alert(error.message);
            setErrormessagesignup(error.message);
        });
    }
    const signIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
        )
        .then((authUser) =>{
            console.log(authUser);
            props.getUser(authUser);
        })
        .catch((error) =>{
            alert(error.message);
            setErrormessagelogin(error.message);
        });
    }
    return (
        <div className="loginscreenBox">
            <div className="logo-column">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/8/84/Check_sheet.svg" alt="logo"/>
                <h1>Juncture</h1>
            </div>
            { login ? (
            <div className="login-box">
                <p>Login</p>
                <form>
                    <div className="form-box">
                        <label>Email : </label>
                        {errormessagelogin.includes("email")? 
                        <input ref = {emailRef} className="invalid" name="email" type="email" placeholder="Email Address"/>
                         : 
                         <input ref = {emailRef} className="valid" name="email" type="email" placeholder="Email Address"/>}
                        <br />
                        <label>Password : </label>
                        {errormessagelogin.includes("password")? 
                        <input ref = {passwordRef} className="invalid" name="password" type="password" placeholder="Password"/>
                        :<input ref = {passwordRef} className="valid" name="password" type="password" placeholder="Password"/>}
                        <br />
                    </div>
                    <div className="signup-line" onClick = {() => setLogin(false)}>New to Juncture, click to sign up now</div>
                    <div className="button-box">
                        <button type="submit" onClick={signIn} className = "login-button">Login</button>
                        {/* <button type="submit" onClick={register} className = "signup-button">Sign Up</button> */}
                    </div>
                </form>
            </div>) : (
             <div className="login-box">
             <p>Sign Up</p>
             <form>
                 <div className="form-box">
                     <label>Username : </label>
                     <input  name="username" type="text" placeholder="username"/>
                     <br />
                     <label>Email : </label>
                     {errormessagesignup.includes("email")? 
                        <input ref = {emailRef} className="invalid" name="email" type="email" placeholder="Email Address"/>
                         : 
                         <input ref = {emailRef} className="valid" name="email" type="email" placeholder="Email Address"/>}
                     <br />
                     <label>Password : </label>
                     {errormessagesignup.includes(" Password")?  
                        <input ref={passwordRef} className="invalid" minlength="8" maxlength="16" alphabet="A-Za-z0-9+_%@!$*~-" requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]" requiredclasscount="3" ref = {passwordRef} name="password" type="password" placeholder="Password"/>
                      : <input ref={passwordRef} className="valid" minlength="8" maxlength="16" alphabet="A-Za-z0-9+_%@!$*~-" requiredclasses="[A-Z] [a-z] [0-9] [+_%@!$*~-]" requiredclasscount="3" ref = {passwordRef}  name="password" type="password" placeholder="Password"/>}
                     <br />
                 </div>
                 <div className="signup-line" onClick = {() => setLogin(true)}>Already Signed up, click to login</div>
                 <div className="button-box">
                     {/* <button type="submit" onClick={signIn} className = "login-button">Login</button> */}
                     <button type="submit" onClick={register} className = "signup-button">Sign Up</button>
                 </div>
             </form>
         </div>   
            ) }
        </div>
    )
}

export default LoginScreen
