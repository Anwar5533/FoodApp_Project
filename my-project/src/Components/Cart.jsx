import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utlis/Redux/CartSlice";

export default function Cart(){
    const cartItems = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

    return (
        <div className="m-4 p-4 text-center">
            <div><h1>Cart</h1></div>
            <div className="w-6/12 m-auto">
                <button className="px-4 py-2 font-bold bg-green-300 m-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is Empty, Please add items to cart</h1>}
                <ItemList items={cartItems}/>
            </div>
            
        </div>
    );
}