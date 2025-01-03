
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function LongIn(){

    let navigate=useNavigate();


     function hendleLogin(e){

        e.preventDefault();

        let obj={
            email:e.target[0].value,
            password:e.target[1].value,
        }

       axios.post("https://ideon-backend.onrender.com/api/login",obj)
       .then((res)=>{
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("event",obj.email);
        navigate("/");
        
       })
       .catch((err)=>{
        console.log(err);
        
       })

     }

    return(
        <div className="flex items-center justify-center h-screen">
            <div className="w-4/12 m-auto relative top-6 border-solid border-2 border-pink-500 p-4 rounded-lg">
                <h1 className="text-3xl font-bold text-center text-pink-500">Log In</h1>

                <div>
                    <form onSubmit={hendleLogin} className="flex flex-col gap-4 relative top-4 p-4">
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="text" placeholder="Email"/>
                    <input className="border-solid border-2 border-pink-500 rounded-md p-2" type="password" placeholder="Password"/>

                    <button className="border-solid border-2 text-white bg-pink-500 rounded-md p-1">Log in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}