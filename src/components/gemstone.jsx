import React from "react";
import { useState } from "react";
import "./css/gemstone.css";

const Gemstone = () => {
  const [gemstoneColor, setGemstoneColor] = useState("grey");

  const changeColor = () => {
    if (gemstoneColor === "grey") {
      setGemstoneColor("light-green");
    }
    if (gemstoneColor === "light-green") {
      setGemstoneColor("light-blue");
    }
    if (gemstoneColor === "light-blue") {
      setGemstoneColor("purple");
    }
    if (gemstoneColor === "purple") {
      setGemstoneColor("red");
    }
    if (gemstoneColor === "red") {
      setGemstoneColor("orange");
    }
    if (gemstoneColor === "orange") {
      setGemstoneColor("grey");
    }
  };

  return <button className={gemstoneColor} onClick={changeColor}></button>;
};

export default Gemstone;
