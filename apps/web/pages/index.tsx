import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monotonous</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button className="focus-visible:text-red-500">do stuff</button>
      </main>
    </>
  );
}
