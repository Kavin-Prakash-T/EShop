const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 text-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-between gap-8">
          
          <div>
            <h1 className="text-lg font-semibold underline mb-4">Quick Links</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition">Sitemaps</a></li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold underline mb-4">Shop Now</h1>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Collections</a></li>
              <li><a href="#" className="hover:text-white transition">Trending Products</a></li>
              <li><a href="#" className="hover:text-white transition">New Arrival Products</a></li>
              <li><a href="#" className="hover:text-white transition">Sitemaps</a></li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg font-semibold underline mb-4">Reach Us</h1>
            <ul className="space-y-2 text-sm">
              <li>
                444, Some Main Road, Some Area,<br />
                Bangalore, India - 560077
              </li>
              <li>+91 888-xxx-xxxx</li>
              <li>e-shop@gmail.com</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 text-center py-4 text-sm">
          © 2030 <span className="font-semibold">e-shop</span>. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
