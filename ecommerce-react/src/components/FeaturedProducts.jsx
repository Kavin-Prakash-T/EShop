import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products`);
      setProducts(res.data);
    };
    fetchData();
  }, []);

  return (
    <section className="bg-slate-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white">
            Top Featured Products
          </h1>
          <p className="text-gray-400 mt-2">
            Hand-picked products just for you
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              _id={product._id}
              name={product.name}
              image_url={product.image_url}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;
