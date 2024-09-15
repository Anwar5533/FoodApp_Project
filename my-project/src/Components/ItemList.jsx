export default function ItemList({items}){
    console.log(items)
    return(
        <div>
            {items.map((item)=>(
                <div key = {item?.card?.info?.id}>
                    <div>
                        <span>{item?.card?.info?.name }</span>
                        <span>₹{item?.card?.info?.price || item?.card?.info?.defaultPrice}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}