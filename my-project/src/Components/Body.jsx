import ItemCard from "./ItemCard";
import resObj from "../Utlis/Mockdata";

export default function Body() {
    return (
        <div className="">
            <div className="m-[10px]">
                Search 
            </div>
        <div className="grid grid-cols-5">
            {resObj.map((resData) => (
            <ItemCard key={resData.info.id} resData={resData.info} />
            ))}
        </div>
        </div>
    );
}
