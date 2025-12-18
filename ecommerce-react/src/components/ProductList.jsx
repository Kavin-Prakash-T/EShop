import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-700 flex justify-center">
      <div className="flex flex-wrap justify-around  gap-6 p-10 max-w-7xl mt-10">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            _id={product._id}
            name={product.name}
            image_url={product.image_url}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
