import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monotonous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Make stuff</h1>
      </main>
    </>
  );
}
