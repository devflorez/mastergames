import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useUser } from "../../context/AuthContext";
export default function Layout({ children }) {



  return (
    <div className="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
