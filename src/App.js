import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect,useState } from 'react';
import LoginScreen from './Screen/LoginScreen';
import { auth } from './firebase';
import ProfileScreen from './Screen/ProfileScreen';
import { onAuthStateChanged } from '@firebase/auth';
import { sendSignInLinkToEmail } from 'firebase/auth';


function App() {

  const [user,setUser] = useState(null);

  useEffect(() => {
    const unsubscribe =  onAuthStateChanged(auth,(user) => {
      if(user){
        //user has logged in 
        console.log(user);
        setUser(user);
      }
      else{
        //user has logged out
        setUser(null);
      }
    })
    return unsubscribe;
  })

  const getUser = (user) =>{
    if(user)
    {
      setUser(user);
    }
  }
  return (
    <div className="App">
      {!user ? (
      <LoginScreen getUser = {getUser}/>
      ) : (
        <ProfileScreen userEmail = {user.email}/>
      )}
    </div>
  );
}

export default App;
