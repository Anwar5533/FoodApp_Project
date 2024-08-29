import { CDN_URL } from "../Utlis/Constants";
export default function ItemCard(props) {
    const { resData } = props;

    return (
        <div className="w-[220px] mb-[10px] cursor-pointer overflow-hidden hover:bg-slate-100 hover:border-slate-100 hover:border-2 ">
            <div >
            <img className="w-[90%] pl-[5px] m-[5px]" src={CDN_URL+resData.cloudinaryImageId} alt="" />
            </div>
            <div className="m-[15px]" >
            <h3>{resData.name}</h3>
            <h3>{resData.cuisines.join(",")}</h3>
            <h3>{resData.deliveryTime} minutes</h3>
            <h3>{resData.avgRating}</h3>
            <h3>{resData.costForTwo}</h3>
            <h2 className="mx-[10px]"></h2>
            </div>
        </div>
    );
}