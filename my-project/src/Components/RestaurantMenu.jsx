import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


export default function RestaurantMenu(){
    const [resInfo, setResInfo]= useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0169992&lng=77.7044335&restaurantId=405736&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };
    const info = resInfo?.cards[2]?.card?.card?.info;
    return resInfo === null ? <Shimmer/> :
    (
        <div>
            <h1>{info.name}</h1>
            <h1>{info.cuisines.join(",")}</h1>
            <h1>{info.costForTwoMessage}</h1>
            <h1>Restaurant Menu</h1>
        </div>
    );
}