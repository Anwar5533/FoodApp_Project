import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utlis/useOnlineStatus";
export default function Body() {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0169992&lng=77.7044335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
        // eslint-disable-next-line react/no-unescaped-entities
        <h1>Looks Like You're Offline. Please check your internet connection</h1>
    )
}

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="">
            <div className="m-[10px] flex ">
                <div className="px-4 flex ">
                    <div>
                    <input
                        className=" py-2 px-2 border border-solid border-green-500 rounded-md" placeholder="Search Here"
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    </div>
                    <div>
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(search.toLowerCase())
                            );
                            setFilteredListRestaurant(filteredRestaurant);
                        }}
                        className="px-4 py-2 bg-green-200 rounded-md ml-2 hover:bg-green-500 transition ease-in-out duration-300 "
                    >
                        Search
                    </button>
                    </div>
                </div>
                <div>
                    <button
                        className="px-4 py-2 bg-slate-100 rounded-md"
                        onClick={() => {
                            const filteredListRestaurant = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredListRestaurant(filteredListRestaurant);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                    <label > User Name: </label>
                    <input type="text"  className="border border-black" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center ">
                {filteredListRestaurant.map((resData) => (
                    <Link key={resData.info.id} to= {"restaurant/"+ resData.info.id}> <ItemCard  resData={resData.info} /> </Link>
                ))}
            </div>
        </div>
    );
}
