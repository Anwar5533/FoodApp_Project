import { CDN_URL } from "../Utlis/Constants";
export default function ItemCard(props) {
    const { resData } = props;

    return (
        <div className="w-[250px] h-auto m-4 p-4 bg-slate-100  cursor-pointer overflow-hidden bg-100 hover:bg-gray-200 ">
            <div className=" pl-3">
            <img className="w-48 h-56 mb-2 rounded-lg" src={CDN_URL+resData.cloudinaryImageId} alt="" />
            </div>
            <div  >
            <h3>{resData.name}</h3>
            <p className="w-[150px]">{resData.cuisines.join(",")}</p>
            <p>{resData?.sla?.slaString}</p>
            <h3>{resData.avgRating}</h3>
            <p>{resData.costForTwo}</p>
            <h2 className="mx-[10px]"></h2>
            </div>
        </div>
    );
}