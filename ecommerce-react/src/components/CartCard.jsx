import axios from "axios";

const CartCard = ({ cartItems, setCartItems, name, quantity, price, url, id }) => {

  const handleIncrement = async () => {
    try {
      const newQuantity = quantity + 1;
      const res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/cart/${id}`,
        { quantity: newQuantity },
        {
          headers: {
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        }
      );
      
      const updatedCart = cartItems.map(item => {
        if (item.product._id === id) return { ...item, quantity: newQuantity };
        return item;
      });
      setCartItems(updatedCart);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  }

  const handleDecrement = async () => {
    if (quantity > 1) {
      try {
        const newQuantity = quantity - 1;
        const res = await axios.put(
          `${import.meta.env.VITE_API_BASE_URL}/cart/${id}`,
          { quantity: newQuantity },
          {
            headers: {
              Authorization: `${sessionStorage.getItem("token")}`,
            },
          }
        );
        
        const updatedCart = cartItems.map(item => {
          if (item.product._id === id)
            return { ...item, quantity: newQuantity };
          return item;
        });
        setCartItems(updatedCart);
      } catch (error) {
        console.error("Error decrementing quantity:", error);
      }
    }
  }

  const handleRemove = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/cart/${id}`,
        {
          headers: {
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        }
      );
      
      const updatedCart = cartItems.filter(item => item.product._id !== id);
      setCartItems(updatedCart);
      const cartItemIds = updatedCart.map(item => item.product._id);
      sessionStorage.setItem("cartItems", JSON.stringify(cartItemIds));
    } catch (error) {
      console.error("Error removing product:", error);
    }
  }

  return (
    <div className="w-full bg-slate-800 border border-gray-400 rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
 
      <div className="w-full sm:w-[200px] h-[180px] flex items-center justify-center bg-slate-900 rounded-xl">
        <img 
          src={url} 
          alt={name} 
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between w-full">
        <h1 className="font-bold text-xl sm:text-2xl text-white">{name}</h1>
        <h3 className="font-semibold text-lg sm:text-xl text-green-400 mt-2 sm:mt-4">${price}</h3>

        <div className="flex flex-wrap sm:flex-nowrap gap-2 sm:gap-4 items-center mt-3">
          <span className="font-semibold text-white">Quantity:</span>
          <button 
            onClick={handleDecrement} 
            className="border border-gray-400 rounded px-3 py-1 bg-blue-500 text-white font-bold text-lg hover:bg-red-500 transition"
          >-</button>
          <span className="border border-gray-400 rounded px-4 py-1 bg-slate-700 text-white font-bold">{quantity}</span>
          <button 
            onClick={handleIncrement} 
            className="border border-gray-400 rounded px-3 py-1 bg-green-600 text-white font-bold text-lg hover:bg-green-500 transition"
          >+</button>
          <button 
            onClick={handleRemove}
            className="bg-red-500 py-2 px-3 border text-white border-gray-300 rounded-lg hover:bg-red-600 transition"
          >
            Remove
          </button>
        </div>
      </div>

    </div>
  );
}

export default CartCard;
