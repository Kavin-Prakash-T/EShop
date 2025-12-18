import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios"
import { toast } from "react-toastify"

const AdminPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [image_url, setImageUrl] = useState("");
    const [price, setPrice] = useState(0);

    const handleName = (e) => setName(e.target.value);
    const handleImageUrl = (e) => setImageUrl(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`${import.meta.env.VITE_API_BASE_URL}/products`, {
                name,
                image_url: image_url,
                price: price
            });

            toast.success("Product added successfully");
            navigate("/products");
        } catch (error) {
            toast.error("Failed to add product");
            console.error(error);
        }
    };


    return (
        <div className="h-screen flex items-center justify-center bg-slate-800">
            <form onSubmit={handleSubmit} className="w-[400px] flex flex-col items-center p-5 text-white bg-slate-700 shadow-lg rounded-xl space-y-5">
                <h1 className="font-bold text-2xl">Add Products</h1>

                <div className="flex flex-col space-y-3 w-full px-5">
                    <label htmlFor="name">Name:</label>
                    <input
                        className="border border-gray-300 placeholder-gray-400 p-2 rounded-sm w-full"
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleName}
                    />

                    <label htmlFor="url">Image URL:</label>
                    <input
                        className="border border-gray-300 placeholder-gray-400 p-2 rounded-sm w-full"
                        type="text"
                        id="url"
                        value={image_url}
                        onChange={handleImageUrl}
                    />

                    <label htmlFor="sp">Price</label>
                    <input
                        className="border border-gray-300 placeholder-gray-400 p-2 rounded-sm w-full"
                        type="text"
                        id="sp"
                        value={price}
                        onChange={handlePrice}
                    />

                   
                </div>

                <button
                    className="bg-blue-600 text-white text-lg px-3 py-2 rounded-lg w-[80%]"
                    type="submit"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AdminPage;
