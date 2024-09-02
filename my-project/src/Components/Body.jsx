import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredListRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };

    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="">
            <div className="m-[10px] flex ">
                <div className="px-4">
                    <input
                        className="border-2 border-solid border-slate-800 rounded-md" placeholder="Search Here"
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(search.toLowerCase())
                            );
                            setFilteredListRestaurant(filteredRestaurant);
                        }}
                        className="p-2 rounded-md ml-2 border-s-slate-900 border-2"
                    >
                        Search
                    </button>
                </div>
                <div>
                    <button
                        className="border-slate-900 border-[2px]"
                        onClick={() => {
                            const filteredListRestaurant = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            setFilteredListRestaurant(filteredListRestaurant);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-5">
                {filteredListRestaurant.map((resData) => (
                    <ItemCard key={resData.info.id} resData={resData.info} />
                ))}
            </div>
        </div>
    );
}
