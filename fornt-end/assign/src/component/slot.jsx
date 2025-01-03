import axios from "axios";
import { useContext, useEffect, useState } from "react"
import UserContext from "../contextApi/userContext";


  export function Slots(){

    let [data , setData]=useState("");
    let [userData,setUserData]=useState("");
    let [date,setDate]=useState("");


      let token=localStorage.getItem("token");
    
     let {user, setUser}=useContext(UserContext);

        useEffect(()=>{
             setUserData(user);
        },[user])

    function hendleDate(e){

        e.preventDefault();
         setDate(e.target[0].value);

    }



    useEffect(()=>{
        axios.get(`https://ideon-backend.onrender.com/appointment/slot/${date}`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
          console.log();
          
        })
    },[data,date])

    function hendleToggle(id){

        let obj={
            userNum:userData._id
        }

       
        axios.patch(`https://ideon-backend.onrender.com/appointment/bookSlot/${id}`,obj)
        .then((res)=>{
            alert(res.data)
        })
        .catch((err)=>{
          console.log(err);
          
        })
       
    }

    function hendleSubmitSlot(e){
        e.preventDefault();

        let obj={
            date:e.target[0].value,
            day:e.target[1].value,
            startTime:e.target[2].value,
            endTime:e.target[3].value
        }

        axios.post("https://ideon-backend.onrender.com/appointment/slot/booking",obj,{headers:{Authorization: token,}})
        .then((res)=>{
            alert(res.data)
            
        })
        .catch((err)=>{
          console.log(err);
          
        })
    }

    function hendleDelete(id){
        
        axios.delete(`https://ideon-backend.onrender.com/appointment/bookSlot/${id}`,{headers:{Authorization: token,}})
        .then((res)=>{
            alert(res.data)
            
        })
        .catch((err)=>{
            console.log(err);
          
        })

    }

    return(
        <div>

        <div>
         
         <div className="w-7/12 m-auto">
            {userData.role==="admin" ? (
                <div>
                 <form className="flex flex-col gap-4 relative top-4 p-4" onSubmit={hendleSubmitSlot}>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="Date" placeholder="Date" required/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Day" required/>
                  <span>Start-Time</span>  <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="time" placeholder="start Time" required/>
                   <span>End-Time</span> <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="time" placeholder="end Time" required/>
                   

                    <button type="submit" className="border-solid border-2 text-white bg-pink-500 rounded-md p-1">submit</button>

                    </form>

                       
                </div>
            ) :
            (
                <div>
                </div>
            )
            }
         </div>

        </div>


         <h1 className="text-2xl font-mono text-center p-2 border-separate border-2 border-solid relative top-3">Slots</h1>


         <div className="mt-6">

            <div>

             <form className="flex flex-col gap-4 relative top-4 p-4 w-5/12 m-auto" onSubmit={hendleDate}>
             <input type="date" placeholder="date" className="border-solid border-2 border-pink-500 rounded-md p-2"/>
             <button type="submit"  className="border-solid border-2 text-white bg-pink-500 rounded-md p-1">search</button>
             </form>
                    
             
                
            </div>

         </div>

         <div className="mt-4 w-11/12 m-auto">
            <div className="flex flex-wrap gap-4 justify-center">
                {
                    Object.entries(data).map(([i,ele])=>{
                        return(
                            <div key={i} className=" border-2 border-solid border-gray-400 rounded-md p-3">
                                    <p><b>Date</b> :{ele.date}</p>
                                    <p><b>Day</b> :{ele.day}</p>
                                    <p><b>Start-Time</b> : {ele.startTime}</p>
                                    <p><b>End-Time</b> : {ele.endTime}</p>
                                    <p className={ele.isBooked ? "bg-red-500 text-center rounded-md" : "bg-green-500 text-center rounded-md"}>{ele.isBooked ? "Booked" : "Available"}</p>
                                  
                               <div className="flex gap-4" id="btn"> <button className="bg-gray-500 rounded-md text-center p-2 mt-4" onClick={()=>hendleToggle(ele._id)}>{ele.isBooked ? "cenceled" :"book"}</button>
                               
                               {userData.role==="admin" ? (
                                <>
                                 <button className="bg-gray-500 rounded-md text-center p-2 mt-4" onClick={()=>hendleDelete(ele._id)}>Delete</button>
                                </>
                               ):(
                                <>
                                </>
                               )}
                               
                               
                               </div>
                               
                            </div>
                        )
                    })
                }
            </div>
         </div>
        </div>
    )
  }