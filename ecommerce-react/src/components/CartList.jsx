import { useEffect, useState } from "react";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";
import axios from "axios";

const CartList = () => {
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/cart`, {
          headers: {
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        });
        const products = res.data.cart.products || [];
        setCartItems(products);

        const cartItemIds = products.map(item => item.product._id);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItemIds));
      } catch (error) {
        console.error("Error fetching cart:", error);
        setCartItems([]);
      }
    };
    fetchData();
  }, []);

  const updateOrderSummary = () => {
    let quantity = 0;
    let amount = 0;
    cartItems.forEach((item) => {
      quantity += item.quantity;
      amount += item.quantity * item.product.price;
    });
    setQuantity(quantity);
    setAmount(amount);
    setTotal(amount + 50);
  };

  useEffect(() => {
    updateOrderSummary();
  }, [cartItems]);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/orders`,
        { totalAmount: total },
        {
          headers: {
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        }
      );

      setCartItems([]);
      sessionStorage.setItem("cartItems", JSON.stringify([]));

      return res.data;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  };

  return (
    <div className="bg-slate-700 min-h-screen px-4 py-8">
      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 max-w-7xl mx-auto">

        <div className="flex flex-col w-full lg:w-2/3 gap-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartCard
                key={item.product._id}
                cartItems={cartItems}
                setCartItems={setCartItems}
                id={item.product._id}
                name={item.product.name}
                quantity={item.quantity}
                price={item.product.price}
                url={item.product.image_url}
              />
            ))
          ) : (
            <div className="text-white text-center text-xl">Your cart is empty</div>
          )}
        </div>

        <div className="w-full lg:w-1/3">
          <OrderSummary
            quantity={quantity}
            amount={amount}
            total={total}
            onPlaceOrder={handlePlaceOrder}
            cartItems={cartItems}
          />
        </div>

      </div>
    </div>
  );
};

export default CartList;
