import { LOGO_URL } from "../Utlis/Constants";
import { useState } from "react";
export default function Header(){
const [btnName,setBtnName]=useState("Login")

    return (
        <div className = " flex justify-between border-solid border-2 border-slate-900 mx-[10px]">
            <div className = "" >
                <img className="w-[50%]" src={LOGO_URL }alt="LOGO" />
            </div>
            <div>
                <ul className="flex p-8 ">
                    <li className="px-2">Home</li>
                    <li className="px-2">About Us</li>
                    <li className="px-2">Contact Us</li>
                    <li className="px-2">Cart</li>
                    <button className="px-2 rounded-md  bg-slate-100" onClick={()=>
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}