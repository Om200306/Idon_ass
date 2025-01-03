import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contextApi/userContext";

export function Head() {
  let navigate = useNavigate();
 
     let userS=localStorage.getItem("event");
     let {user, setUser}=useContext(UserContext);

  return (
    <div className="bg-pink-500 p-2 text-white">
      <div className="flex justify-between font-mono w-11/12 m-auto">
        <div onClick={()=>navigate("/")}>
          <h1 className="text-2xl bg-black p-2 rounded-lg">Booked</h1>
        </div>

        <div className="flex gap-8">
          <button onClick={() => navigate("/slot")}>slotes</button>
          <button onClick={()=>{user.role=="admin" ? navigate("/adminBook") : navigate("/userBook") }}>Booked</button>
        </div>

        <div className="flex gap-4 items-center">
          {userS ? (
            <>
            <h1>Hi , {userS}</h1>
              <button
                className="border-2 border-solid border-white p-2 rounded-lg"
               onClick={()=>{
                localStorage.setItem("event","");
                navigate("/")
               }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="border-2 border-solid border-white p-2 rounded-lg"
                onClick={() => navigate("/signup")}
              >
                SignUp
              </button>
              <button
                className="border-2 border-solid border-white p-2 rounded-lg"
                onClick={() => navigate("/login")}
              >
                LogIn
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
