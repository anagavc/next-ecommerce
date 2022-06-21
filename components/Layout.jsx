import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
//the Head component in next gives us some meta data about our website
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Faxt Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
