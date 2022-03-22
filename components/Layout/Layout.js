import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useUser } from "../../context/AuthContext";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Master Games</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="his is a platform that shows you all the free games available so you can play on your computer or browser, it is developed in NEXTJS"
        />
        <meta
          name="keywords"
          content="platform,free to play, nextjs, devflorez, ingenieroflorezco, react, games, pc, pc gamer"
        />
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
