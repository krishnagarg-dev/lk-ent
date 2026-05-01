import "./home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero.css/Hero";
import Companies from "../../components/Companies/Companies";
import Products from "../../components/Products/Products";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import WhatsApp from "../../components/WhatsApp/WhatsApp";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Companies />
      <Products />
      <CTA />
      <Footer />
      <WhatsApp />
    </div>
  );
}

export default Home;