import { Link } from "react-router";
import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const cartCount=sessionStorage.getItem("cartItems") ? JSON.parse(sessionStorage.getItem("cartItems")).length : 0;

    return (
        <nav className="bg-slate-800 text-white">
            <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

                <div className="flex items-center gap-2">
                    <img
                        src="./logo.jpg"
                        alt="logo"
                        className="w-[45px] h-[45px] rounded-full"
                    />
                    <h1 className="text-2xl font-bold">
                        <span className="text-yellow-400">E</span>-Shop
                    </h1>
                </div>

                <div className="hidden md:flex gap-10 items-center">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/products" className="hover:text-blue-400">All Products</Link>
                    <Link to="/orders" className="hover:text-blue-400">Orders</Link>
                    <Link to="/cart" className="hover:text-blue-400">Cart ({cartCount})</Link>
                    <Link to="/admin" className="hover:text-blue-400">Admin</Link>
                </div>

                <div className="hidden md:flex gap-4">
                    <Link to="/login">
                        <button className="bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="border border-gray-500 px-3 py-1 rounded-lg hover:border-white">
                            Sign Up
                        </button>
                    </Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-slate-800 px-6 pb-4 flex flex-col gap-4">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>All Products</Link>
                    <Link to="/orders" onClick={() => setMenuOpen(false)}>Orders</Link>
                    <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart (2)</Link>
                    <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>

                    <hr className="border-gray-700" />

                    <Link to="/login" onClick={() => setMenuOpen(false)}>
                        <button className="bg-blue-600 w-full py-2 rounded-lg">
                            Login
                        </button>
                    </Link>
                    <Link to="/register" onClick={() => setMenuOpen(false)}>
                        <button to="/register" onClick={() => setMenuOpen(false)} className="border border-gray-500 w-full py-2 rounded-lg">
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
