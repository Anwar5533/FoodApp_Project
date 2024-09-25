import { useDispatch } from "react-redux";
/* eslint-disable react/prop-types */
import { CDN_URL } from "../Utlis/Constants";
import { addItem } from "../Utlis/Redux/CartSlice";

export default function ItemList({ items }) {

const dispatch = useDispatch();
const handleAddItem = (item)=>{
    dispatch(addItem(item))
}
    return (
        <div className="">
            {items.map((item, index) => {
                const imageId = item?.card?.info?.imageId || item?.itemCards?.[0]?.card?.info?.imageId;
                const imageUrl = imageId ? `${CDN_URL}${imageId}` : 'path/to/default/image.jpg';

                return (
                    <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="">
                                <span className="font-semibold text-lg">
                                    {item?.card?.info?.name || item?.itemCards?.[0]?.card?.info?.name}
                                </span>
                                <span className="">
                                    - ₹{item?.card?.info?.price / 100 ||
                                        item?.card?.info?.defaultPrice / 100 ||
                                        item?.itemCards?.[0]?.card?.info?.price / 100 ||
                                        item?.itemCards?.[0]?.card?.info?.finalPrice / 100}
                                </span>
                            </div>
                            <p className="text-sm font-semibold">
                                {item?.card?.info?.ratings?.aggregatedRating?.rating || item?.itemCards?.[0]?.card?.info?.ratings?.aggregatedRating?.rating}
                                ({item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || item?.itemCards?.[0]?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})
                            </p>
                            <p className="text-xs">
                                {item?.card?.info?.description || item?.itemCards?.[0]?.card?.info?.description}
                            </p>
                        </div>
                        <div className="w-3/12">
                            <button className="absolute bg-white rounded-lg px-4 py-2 mx-10 my-24" onClick={()=>handleAddItem(item)}
                            >ADD</button>
                            <img src={imageUrl} alt="Item_Image" className="w-40 h-36 rounded-lg" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
