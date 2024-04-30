import { useDispatch, useSelector } from "react-redux";
import ItemCategory from "./ItemCategory";
import ItemList from "./ItemList";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="text-center bg-yellow-50">
            <div className="flex-auto p-2 m-2">
                <h1 className="font-bold text-2xl text-center">Cart</h1>
                <button className="border bg-black text-white p-1 m-1" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div className="w-6/12  py-2 border px-2 m-10 border-black my-4 text-center">
                {cartItems.length === 0 ?
                    <img className="rounded-2xl w-6/12 p-2 mx-12 text-center" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" /> :
                    <ItemCategory Food={cartItems} />}
            </div>
        </div>
    )
}
export default Cart;