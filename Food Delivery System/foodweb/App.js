import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home1";
import Dishes from "./Components/Dishes";
import Review from "./Components/Review";
import Footer from "./Components/Footer";
import Login from "./Components/login";
import Details from "./Components/Details";
import ContactUs from "./Components/ContactUs";
import Menu from "./Components/Menu";
import Adminlog from "./Components/adminlogin";
import OrderComponent from "./Components/order";

const MainLayout = () => (
  <>
    <Navbar />
    <main>
      <section id="home">
        <Home />
      </section>
      <section id="dishes">
        <Dishes />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="details">
        <Details />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="review">
        <Review />
      </section>
    </main>
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout will render Home, Dishes, About, Details, and Review in one layout */}
        <Route path="/" element={<MainLayout />} />
        
        {/* Separate routes for individual pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/adminlogin" element={<Adminlog />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
