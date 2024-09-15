import ItemList from "./ItemList";
/* eslint-disable react/prop-types */
export default function RestaurantCategory({data}) {
    console.log("RestaurantCategory data:", data);

    return (
        <div className="mt-2 shadow-md shadow-slate-300 p-4 rounded-xl">
            <div className="flex justify-between ">
                <span className="font-bold text-xl">{data.title} ({data?.itemCards?.length || data?.categories?.length})</span>
                <span>▼</span>
            </div>
            <ItemList items={data?.itemCards || data?.categories}/>
        </div>
    );
}
