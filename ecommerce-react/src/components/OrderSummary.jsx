import { useState } from "react";
import { toast } from "react-toastify";

const OrderSummary = ({ quantity, amount, total, onPlaceOrder, cartItems }) => {
  
  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    try {
      const response = await onPlaceOrder();
      toast.success("Order placed successfully!");
    } catch (error) {
      toast.error("Failed to place order");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 w-full sm:w-[400px] text-white p-6 sm:p-10 border-gray-400 border rounded-xl mx-auto lg:mx-0 mt-6 lg:mt-0">
      <h1 className="font-bold text-2xl text-center">Order Summary</h1>

      <div className="flex text-lg font-semibold justify-between mt-6">
        <span>Total Items:</span>
        <span className="text-green-500">+ {quantity}</span>
      </div>

      <div className="flex text-lg font-semibold justify-between mt-4">
        <span>Total Amount:</span>
        <span className="text-green-500">+ {amount}</span>
      </div>

      <div className="flex text-lg font-semibold justify-between mt-4">
        <span>Shipping Amount:</span>
        <span className="text-green-500">+ 50</span>
      </div>

      <hr className="mt-6 border-gray-400" />

      <div className="flex text-lg font-semibold justify-between mt-4">
        <span>Total:</span>
        <span>$ {total}</span>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={ cartItems.length === 0}
        className={'w-full mt-6 py-2 rounded-lg  bg-blue-600 hover:bg-blue-700'}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
