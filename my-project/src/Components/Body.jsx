import ItemCard from "./ItemCard";
import resObj from "../Utlis/Mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


export default function Body() {
const[listOfRestaurants, setListOfRestaurants] =useState([]);

useEffect(()=>{
    fetchData();
},[])

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []) ;
   
}

if(listOfRestaurants.length === 0)
    {
        return <Shimmer/>
    }

    return (
        <div className="">
            <div className="m-[10px] ">
                <button className="border-slate-900 border-[2px]" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res)=>res.info.avgRating >4.2
                    );
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button> 
            </div>
        <div className="grid grid-cols-5">
            {listOfRestaurants.map((resData) => (
            <ItemCard key={resData.info.id} resData={resData.info} />
            ))}
        </div>
        </div>
    );
}
