import React from 'react';
import About from "../components/About";
import Contact from "../components/Contact";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className=" flex flex-col">
      <Navigation />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      <Footer />
    </div>
  );
};

export default Home;