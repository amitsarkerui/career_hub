import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
      <FeaturedJob></FeaturedJob>
    </div>
  );
};

export default Home;
