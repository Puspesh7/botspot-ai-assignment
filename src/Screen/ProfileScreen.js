import React,{useState,useEffect} from 'react'
import "./ProfileScreen.css"
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { db } from '../firebase';
import { collection, onSnapshot,orderBy , addDoc , where ,query} from "firebase/firestore";
import EventCard from './EventCard';
import{Modal , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProfileScreen(props) {
    return (
        <div className='profileScreen'>
            <div className="buttondiv">
                <button onClick = {() => signOut(auth)}>Signout</button>
            </div>
        </div>
    )
}

export default ProfileScreen
