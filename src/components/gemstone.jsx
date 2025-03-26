import { useLayoutEffect, useState } from "react";
import "./css/Gemstone.css";

const Gemstone = ({resetState, setIsReset}) => {
  const [gemstoneColor, setGemstoneColor] = useState("grey");
  
  useLayoutEffect(() => {
    if (resetState === true) {
      setGemstoneColor("grey");
    }
  }
  , [resetState]);

  const changeColor = () => {
    if (gemstoneColor === "grey") {
      setIsReset(false);
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

  return (
    <>
      <button className={resetState === true ? 'grey': gemstoneColor} onClick={changeColor}></button>
    </>
  );
};

export default Gemstone;
