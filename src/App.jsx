import React, { useState } from "react";
import Bill from "./components/Bill";
import Result from "./components/Result";
import Tip from "./components/Tip";

const App = () => {
  //   const [bill, setBill] = useState(0);
  //   const [tip, setTip] = useState(0);
  //   const tipCalculator = () => {

  //   };
  return (
    <div className="bg-powderblue h-screen flex flex-col justify-center">
      <h3 className="text-center mb-12">
        SPLI <br /> TTER
      </h3>
      <div className="w-[768px] mx-auto bg-white p-8 rounded-[20px] flex space-x-4">
        <div className="p-2 flex-1">
          <Bill text={"Bill"} />
          <Tip />
          <Bill text={"Number of People"} />
        </div>
        <div className="p-4 flex-1 bg-teal-900 rounded-lg">
          <Result />
        </div>
      </div>
    </div>
  );
};

export default App;
