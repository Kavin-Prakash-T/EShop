import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ _id, name, image_url, price }) => {

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
    const isProductInCart = cartItems.includes(_id);
    setIsInCart(isProductInCart);
  }, [_id]);

  const handleAddToCart = async () => {

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.error("Please login to add items to cart");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/cart`,
        {
          productId: _id,
          quantity: 1
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const cartItems = JSON.parse(sessionStorage.getItem("cartItems") || "[]");
      if (!cartItems.includes(_id)) {
        cartItems.push(_id);
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
      }

      setIsInCart(true);
      toast.success("Product added to cart successfully");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add to cart");
    }
  }


  return (
    <div className="w-[300px] mt-5 bg-slate-800/30 border border-gray-400 rounded-xl flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-shadow">

      <div className="w-full h-[220px] flex items-center justify-center bg-slate-800">
        <img
          src={image_url}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <h1 className="font-bold text-gray-200 text-xl">{name}</h1>
        <div className="flex justify-between items-center mt-3">
          <h3 className="font-semibold text-2xl text-white">${price}</h3>
          <button
            onClick={handleAddToCart}
            disabled={isInCart}
            className={`${isInCart ? 'bg-red-500 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500'} text-white px-3 py-1 rounded-lg `}
          >
            {isInCart ? "Added To Cart" : "Add To Cart +"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
