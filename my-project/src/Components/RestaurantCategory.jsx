
import ItemList from "./ItemList";
/* eslint-disable react/prop-types */
export default function RestaurantCategory({data , showItems,setShowIndex }) {

    function handleClick(){
        setShowIndex(!showItems)
    }

    return (
        <div className="mt-2 shadow-md shadow-slate-300 p-4 rounded-xl">
            <div className="flex justify-between cursor-pointer " onClick={handleClick}>
                <span className="font-semibold text-lg cursor-pointer ">{data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
                <span>▼</span>
            </div>
            { showItems && <ItemList items={data?.itemCards || data?.categories}/>}
        </div>
    );
}
