import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Account from "./Account";
import "./App.css";

const HomeLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div id="">
        {children}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mon-compte" element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
