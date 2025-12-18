import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";


const App = () => {

  return (
    <div className="bg-slate-700">
      <Header />
      <Hero/>
      <FeaturedProducts/>
      <Footer />
    </div>
  )
}

export default App;