import React from "react";
import { Services, Transactions, Welcome, MakeSure } from "../components";

function Home() {
  return (
    <>
      <Welcome />
      <MakeSure />
      <Services />
      <Transactions />
    </>
  );
}

export default Home;

// https://play.tailwindcss.com/FgclCB2P8P?file=css