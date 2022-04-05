import React from "react";

function Result() {
  return (
    <>
      <span className="grid grid-cols-2 content-center mb-8 mt-10">
        <div className="flex-col">
          <p className="text-white">Tip Amount</p>
          <p className="text-white opacity-25">/ person</p>
        </div>{" "}
        <p className="text-teal-500 text-4xl">$0.00</p>{" "}
      </span>
      <span className="grid grid-cols-2 content-center">
        <div className="flex-col">
          <p className="text-white">Total</p>
          <p className="text-white opacity-25">/ person</p>
        </div>
        <p className="text-teal-500 text-4xl">$0.00</p>{" "}
      </span>

      <button className="bg-teal-600 w-full rounded-md opacity-50 h-10 mt-32 p-2">
        Reset
      </button>
    </>
  );
}

export default Result;
