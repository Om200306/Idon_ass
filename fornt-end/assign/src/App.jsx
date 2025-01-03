import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from './component/home';
import { SignUp } from './component/signup';
import { LongIn } from './component/login';
import { Slots } from './component/slot';
import UserContext from './contextApi/userContext';
import { BookedByUser } from './component/bookeduser';
import { BookedByAdmin } from './component/bookedAdmin';
import { Head } from './component/navi';
import axios from 'axios';


function App() {

  let token=localStorage.getItem("token");
  const [user, setUser] = useState("");

    useEffect(()=>{
     
        axios.get("https://ideon-backend.onrender.com/profile",{headers:{Authorization: token,}})
        .then((res)=>{
           setUser(res.data);
        })
        .catch((err)=>{
          console.log(err);
        })
        
    },[user])


  return (
    <>
    <UserContext.Provider value={{user,setUser}}>
      <Head/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LongIn/>}/>
      <Route path='/slot' element={<Slots/>}/>
      <Route path='/userBook' element={<BookedByUser/>}/>
      <Route path='/adminBook' element={<BookedByAdmin/>}/>
    </Routes>
      </UserContext.Provider>      
    </>
  )
}

export default App
