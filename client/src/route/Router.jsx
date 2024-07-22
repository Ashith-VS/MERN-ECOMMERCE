import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import TopMenu from "../components/TopMenu";
import ScrollToTop from "../components/ScrollToTop";
import {Registration,Login,NotFound,Home,Admin,Allproducts,ProductDetail,Category,Profile, Blog, Contact, Support, Notification, WishList, Orders, Cart, Checkout, Invoice} from "../screens";
import PrivateRoute from "../utils/PrivateRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <TopMenu />
      <Loader />
      <Routes>
        <Route element={<PrivateRoute />}>
           <Route path="/admin" element={<Admin />} />
          <Route path="/admin/:id" element={<Admin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoice/:id" element={<Invoice />} />
         {/* 
          <Route path="/users" element={<Users />} />
          */}
          <Route path="/notification" element={<Notification />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/dealsofDay" element={<Allproducts />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
