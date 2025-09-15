import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

// Pages
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Services from "../pages/Services";
import EcommerceWebsite from "../pages/EcommerceWebsite";
import Portfolio from "../pages/Portfolio";
import Products from "../pages/Products";
import GetQuote from "../pages/GetQuote";
import ContactUs from "../pages/ContactUs";
import AI from "../pages/AI";
import Python from "../pages/Python";
import Learning from "../pages/Learning";

const AppRoute = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ecommerce-website" element={<EcommerceWebsite />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/our-products" element={<Products />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/services/ai" element={<AI />} />
        <Route path="/services/python" element={<Python />} />
        <Route path="/services/learning" element={<Learning />} />
      </Routes>
    </Layout>
  );
};

export default AppRoute;
