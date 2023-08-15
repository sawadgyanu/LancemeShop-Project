import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ProductsList from "../components/ProductsList";
import { useNavigate } from "react-router";
import { Footer } from "./Footer";


const Home = () => {
  const localSignup = localStorage.getItem("signup");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!localSignup) {
  //     navigate("/");
  //   } else {
  //     navigate("/signup");
  //   }

  //   return () => {};
  // }, []);

  return (
    <>
      <Navbar />
      <Slider />
      <ProductsList />
      <Footer/>
    </>
  );
};

export default Home;
