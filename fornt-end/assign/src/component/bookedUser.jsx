import axios from "axios";
import { useContext, useEffect, useState } from "react"
import UserContext from "../contextApi/userContext";

export function BookedByUser(){
    let {user, setUser}=useContext(UserContext);
    let [data , setData]= useState("");

     useEffect(()=>{
           axios.get(`https://ideon-backend.onrender.com/appointment/byUser/${user._id}`)
           .then((res)=>{
            setData(res.data);
           })
           .catch((err)=>{
            console.log(err);
            
           })
        },[data])

    return(

        <div>

            <h1 className="text-center text-2xl font-mono">Booked Slots</h1>

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
                                </div>
                             )
                        })
                    }
                </div>

            </div>


        </div>
    )
}