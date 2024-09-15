/* eslint-disable react/prop-types */
export default function ItemList({items}){
    console.log(items)
    
    return(
        <div>
            {items.map((item)=>(
                
                <div key={item?.card?.info?.id || item?.itemCards?.card?.info?.id}>
                    
                    <div>
                        <span>{item?.card?.info?.name || item?.itemCards?.[0]?.card?.info?.name}</span>
                        
                        <span>₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                        
                    </div>
                    
                </div>
            ))}
        </div>
        
    );
}