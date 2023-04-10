import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Category></Category>
    </div>
  );
};

export default Home;
