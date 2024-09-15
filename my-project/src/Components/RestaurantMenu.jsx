import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../Utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
export default function RestaurantMenu(){

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId)
    
    const info = resInfo?.cards[2]?.card?.card?.info;
    const menuItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const menuItemsData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || 
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
    
    console.log(categories)
    return resInfo === null ? <Shimmer/> :
    (
        <div className=" place-items-center mx-[240px] my-3">
            <div className=" max-w-[800px]  ">
                <div>
                <h1 className="pl-2">{info.name}</h1>
                </div>
                <div className="bg-gradient-to-t from-slate-300 h-[204px] rounded-3xl mt-8" >
                    <div className="mx-4 mb-4 h-[188px] border-[1px] border-slate-300 rounded-xl bg-white">
                        <div className="m-4">
                        <div className="flex ">
                            <div className="h-[20px] w-[20px] mt-[2px] mr-4"><h2>❇️</h2></div>
                            <div><h2>{info.avgRating}({info.totalRatingsString})</h2></div>
                            <div className="mx-4 h-1 w-1 text-slate-500 ">•</div>
                            <div><h2>{info.costForTwoMessage}</h2></div>
                        </div>
                        <div className="mt-1">
                        <p className="font-bold text-orange-500 underline underline-offset-auto">{info.cuisines.join(", ")}</p>
                        </div>
                        <div className="flex ">
                        <div className="flex flex-col mt-2">
                            <div className="h-[7px] w-[7px] bg-slate-300 rounded-full"></div>
                            <div className="w-[2px] ml-[2.5px] h-[23px] bg-slate-300"></div>
                            <div className="h-[7px] w-[7px] bg-slate-300 rounded-full"></div>
                        </div>
                        <div className="mx-4">
                                <p className="font-semibold">Outlet <span className="font-normal ml-3 text-slate-500">{info.areaName}</span></p>
                                <p className="font-semibold">{info?.sla?.slaString}</p>
                        </div>
                        </div>
                        <div className="h-4 border-b-gray-400 "></div>
                        <div>
                            <ul className="flex">
                                <li className="h-6 w-6"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="" /></li>
                                <li>{info?.feeDetails?.message}</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
                
                <div className=" h-[202.67 px] w-[768px] bg-white">
                    {categories.map((category) => <RestaurantCategory key={category?.card?.card?.itemCards?.card?.info?.id} data= {category?.card?.card} /> )}
                </div>
            </div>
        </div>
    );
}