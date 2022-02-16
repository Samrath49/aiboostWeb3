import React, { useState, useEffect, useContext, useRef } from "react";
import { Loader } from "../components";
import { ContractsContext } from "../context/ContractsContext";
import { motion } from "framer-motion";

function BuyToken() {
  const { initToken, token, buyTokens, isLoading } =
    useContext(ContractsContext);
  const inputRef = useRef();

  const card = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 75,
        delay: 0.1,
      },
    },
  };

  useEffect(() => {
    console.log("hellow");
    initToken();
  }, []);

  return (
    <div className="flex-1 pt-5 space-y-10 bg-main">
      <motion.div
        className="container mx-auto bg-zinc-900 p-6 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-200"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl antialiased font-medium">AiBoost Token (AiB)</h2>
        <h3 className="pt-5 text-slate-300 antialiased text-md">
          Token Price is{" "}
          <span className="text-teal-500 font-medium">{token.price}</span> & you
          have{" "}
          <span className="text-teal-500 font-medium">{token.balance}</span> AiB
        </h3>
        <h3 className="text-slate-300 text-sm">
          Token Sold:{" "}
          <span className="text-teal-500 font-medium">
            {token.sold} / 1000000
          </span>
        </h3>
      </motion.div>

      <motion.div
        className="container mx-auto bg-zinc-900 p-4 my-4 border border-slate-500 rounded-lg max-w-lg text-slate-300"
        variants={card}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl antialiased font-medium">Buy AiBoost (AiB)</h2>
        <form>
          <input
            ref={inputRef}
            placeholder="No. of Tokens"
            name="tokens"
            type="number"
            min="1"
            pattern="[0-9]"
            step="0.0001"
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          {isLoading ? (
            <Loader />
          ) : (
            <button
              type="button"
              onClick={() => {
                buyTokens(+inputRef.current.value);
              }}
              className="w-full mt-2 bean disabled:cursor-not-allowed"
            >
              BUY AIBOOST TOKEN
            </button>
          )}
        </form>
      </motion.div>
    </div>
  );
}

export default BuyToken;