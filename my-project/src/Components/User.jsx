import { useState } from "react";
export default function User({name}){
    const [count] = useState(0)
    const [count2] = useState(1)
    return (
        <div className=" p-4 border-2 border-gray-300 ">
            <h1>User Name: {name}</h1>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <p>Emp ID: 2195120</p>
            <p>Phone Number: 9618694485</p>
        </div>
    );
}