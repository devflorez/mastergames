import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Head from "next/head";
import { useSession } from "next-auth/react";
export default function Layout({ children }) {
  const { status } = useSession();
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
      <main>
        {status === "authenticated" ? children : <h1>You are not logged in</h1>}
      </main>
      <Footer />
    </div>
  );
}
