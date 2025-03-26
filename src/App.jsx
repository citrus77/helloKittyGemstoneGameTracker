import React from "react";
import { useState } from "react";
import "./App.css";
import Gemstone from "./components/gemstone";

const App = () => {
  const [isReset, setIsReset] = useState(false);

  const resetTable = () => {
    setIsReset(true);
  };

  return (
    <>
      <h1>Gemstone Tracker</h1>
      <table className="gemstone-table">
        <thead></thead>
        <tr>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>           
        </tr>

        <tr>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>           
        </tr>

        <tr>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>  
          <td>
            <Gemstone 
              resetState = {isReset}
              setIsReset = {setIsReset}
            />
          </td>           
        </tr>
        <button className='resetBtn' onClick={resetTable}>Reset</button>
      </table>
    </>
  );
};

export default App;
