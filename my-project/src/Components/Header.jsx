import { LOGO_URL } from "../Utlis/Constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utlis/useOnlineStatus";
import UserContext from "../Utlis/UserContext";


export default function Header(){
const [btnName,setBtnName]=useState("Login")
const onlineStatus = useOnlineStatus();
const {loggedInUser} = useContext(UserContext);
console.log(loggedInUser)
    return (
        <div className = " flex justify-between shadow-md shadow-slate-200 mx-[10px]">
            <div className = "" >
                <img className="w-[50%]" src={LOGO_URL }alt="LOGO" />
            </div>
            <div>
                <ul className="flex p-8 ">
                <li>
                    <h3>Online-Status: { onlineStatus ? "✅" : "❌" }</h3>
                </li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="about">AboutUs</Link></li>
                    <li className="px-2"><Link to="contact">ContactUs</Link></li>
                    <li className="px-2"><Link to="instaMart">InstaMart</Link></li>
                    <li className="px-2">Cart</li>
                    <button className="px-2 rounded-md  bg-slate-100" onClick={()=>
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>
                
            </div>
        </div>
    );
}