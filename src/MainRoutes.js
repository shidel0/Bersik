import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Franchise from "./Components/Franchise/Franchise";
import HomePage from "./Components/HomePage/HomePage";
import Delivery from "./Components/Delivery/Delivery";
import Product from "./Components/Product/Product";
import LoginPage from "./Components/AuthPage/LoginPage";
import RegisterPage from "./Components/AuthPage/RegisterPage";
import AddParfum from "Components/AddProduct/AddParfum";
import AllProduct from "Components/AllProduct/AllProduct";
import ProductDetails from "Components/AllProduct/ProductDetails";
import EditParfum from "Components/EditParfum/EditParfum";
import Cart from "Components/Cart/Cart";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/addParfum" element={<AddParfum />} />
        <Route path="/all-products" element={<AllProduct />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/edit/:id" element={<EditParfum />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
