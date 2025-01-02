import { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Head } from "./navi";


export function Home(){

    let navigate=useNavigate();

    
    return(
        <div>
          

            <div className="flex items-center h-screen">
            <div>
                <div className="w-11/12 m-auto">
                    <h1 className="text-2xl text-center font-mono p-2">The Appointment Booking App is a comprehensive solution designed to simplify the scheduling process for both healthcare professionals and patients. With features such as user-friendly interfaces, secure patient-doctor communication, and real-time appointment management, the app bridges the gap between convenience and efficiency. Patients can effortlessly browse available doctors, view their specialties, and book appointments based on real-time availability. Meanwhile, doctors can manage their schedules, receive notifications, and maintain patient records in an organized manner. Integrated with features like reminders, rescheduling options, and payment gateways, the app ensures a seamless experience, fostering a reliable and professional healthcare ecosystem.</h1>
                </div>
                          
                <div className="w-11/12 m-auto flex justify-center relative top-7">
                    <button className="border-2 border-solid border-pink-500 text-pink-500 p-2 rounded-lg" onClick={()=>navigate("/slot")}>Start Here</button>
                </div>
            </div>
            </div>
        </div>
    )
}