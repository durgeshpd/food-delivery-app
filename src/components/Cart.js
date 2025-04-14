import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice"; // ✅ import it

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
                <>
                    <div className="text-right mb-4">
                        <button
                            onClick={handleClearCart}
                            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                        >
                            🗑️ Clear Cart
                        </button>

                    </div>
                    <ItemList items={cartItems} showAddButton={false} />
                </>
            )}
        </div>
    );
};

export default Cart;
