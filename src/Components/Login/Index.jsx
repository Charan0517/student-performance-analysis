import React from 'react'
import { useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from '../../fbconfig';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, collection, getFirestore } from "firebase/firestore";
import App from '../../App';
//import authenticate from './Components/Login/authenticate.json'


export default function Index() {
  const[error, setError] = useState(false)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [authenticated, setAuthenticated] = useState(false);

  const navigate = useNavigate()


const handleLogin = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      const user = userCredential.user;
      // const db = getFirestore()
      // navigate('/faculty')
      // console.log(user.uid)
      const docSnap = await getDoc(doc(firestore, "users", user.uid));

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        console.log(docSnap.data().role);
        switch (docSnap.data().role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'faculty':
            navigate('/faculty');
            break;
          case 'super-admin':
            navigate('/super-admin');
            break;
          default:
            navigate('/');
            break;
        }
        } else {
        console.log("No such document!");
    }
    })
    .catch((error) => {
      console.error('Error signing in:', error);
      setError(true);
    });
};


  return (
    <div className="w-full h-screen flex items-start ">
        <div className="relative w-3/5 h-full flex flex-col">
            <img src="../nw.jpg" alt = "Northwest-Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/4 h-3/4 flex flex-col justify-between">
            {/* <h1 className="text-base text-[#060606]">Login</h1> */}
            <div class="flex items-center">
                <img src="../nwlogo.png" alt="" className="w-3/4 h-auto"/>
                <a href="https://www.nwmissouri.edu/" className="ml-40">Home</a>
            </div>
            <div className="w-full flex flex-col">
            <div className='w-full flex flex-col mb-2 ml-10'>
                <h3 className='text-3xl font-semibold mb-2'>Sign in</h3>
                <p className='text-base mb-2' >Sign in using your organizational credentials</p>
                {error && <p className='text-red mb-2 text-center ml-20' style={{color:"red"}}>Wrong email or password!</p>}
            </div>
            <div className='w-full flex flex-col items-center'>
                <input type="email" placeholder='Email'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ml-20' onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder='Password'
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none ml-20' onChange={e=>setPassword(e.target.value)}/>
            </div>

            <div className='w-full flex flx-col my-4'>
                <button type='submit' className='w-full text-white bg-[#008000] rounded-md p-4 text-center flex items-center justify-center ml-20' onClick={() => handleLogin()}>
                    Sign in
                </button>
            </div>
            </div>
           
            
        </div> 
    </div>
  )
}
