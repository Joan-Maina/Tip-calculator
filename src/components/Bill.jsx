import React from "react";

function Bill({ text }) {
  //   console.log(bill);
  return (
    <div className="">
      <label htmlFor="bill" className="opacity-60 mb-2 block">
        {text}
      </label>
      <div className="bg-slate-300 h-10 rounded-md overflow-hidden relative flex justify-between items-center p-2 text-lg">
        <input
          type="text"
          placeholder="0"
          className="border-none text-right bg-slate-300 w-full absolute px-5 left-0 h-full outline-none border-0"
        />
        <span className="z-10">$</span>
      </div>
    </div>
  );
}

export default Bill;
