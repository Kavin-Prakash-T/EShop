import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="bg-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Discover the Best Tech Products
        </h1>

        <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
          Shop premium laptops, monitors, and accessories at unbeatable prices.
          Quality products designed for performance and reliability.
        </p>

        <div className="mt-8 flex justify-center gap-4">
         <Link to="/cart"> <button className="bg-emerald-600 hover:bg-emerald-700 transition px-7 py-3 rounded-lg text-white font-medium">
            Shop Now
          </button></Link>

          <Link to="/products"><button className="border border-gray-500 hover:border-white transition px-7 py-3 rounded-lg text-white">
            Browse Products
          </button></Link>
        </div>

      </div>
    </section>
  );
};

export default Hero;
