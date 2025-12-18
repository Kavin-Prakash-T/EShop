import { useEffect, useState } from "react";
import axios from "axios";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/orders`, {
          headers: {
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        });
        setOrders(res.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        setOrders([]);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="bg-slate-700 min-h-screen p-10">

      <div className="flex flex-row items-start justify-around">

        <div className="flex flex-col w-[60%]">
          {orders.length === 0 ? (
            <div className="text-white text-center text-xl">No orders found</div>
          ) : (
            orders.map((order) => (
              <div key={order._id} className="bg-slate-800 border-gray-400 border rounded-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-white text-xl font-bold">Order #{order._id}</h2>
                  <span className={`px-3 py-1 rounded ${order.status === 'Pending' ? 'bg-yellow-600' :
                      order.status === 'Processing' ? 'bg-blue-600' :
                        'bg-red-600'
                    } text-white`}>
                    {order.status}
                  </span>
                </div>
                <div className="text-gray-400 mb-4">
                  Ordered on: {new Date(order.createdAt).toLocaleDateString()}
                </div>
                {order.products.map((item) => (
                  <div
                    key={item.product._id}
                    className="w-full bg-slate-900 border-gray-400 border rounded-xl mb-4 p-4 flex flex-row gap-6 items-center"
                  >
                    <img
                      src={item.product.image_url}
                      alt={item.product.name}
                      className="w-[150px] h-[150px] object-contain rounded"
                    />

                    <div className="flex-1">
                      <h1 className="font-bold text-2xl text-white">{item.product.name}</h1>

                      <h3 className="font-semibold text-xl text-green-400 mt-3">
                        ${item.product.price}
                      </h3>

                      <div className="flex gap-4 text-white mt-3 items-center">
                        <h1 className="font-semibold text-lg text-gray-300">Quantity:</h1>
                        <h1 className="font-bold border rounded-sm border-gray-400 px-4 bg-slate-700 py-1">
                          {item.quantity}
                        </h1>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-right mt-4">
                  <span className="text-white text-xl font-bold">
                    Total: ${order.totalAmount}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default OrdersPage;
