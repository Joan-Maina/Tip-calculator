import React from "react";

function Tip() {
  const tips = [5, 10, 15, 25, 50];
  return (
    <div className="my-8">
      <label htmlFor="tip">Select Tip %</label>
      <br />
      <div className="grid grid-cols-3 gap-2 my-3">
        {tips.map((tip) => (
          <button
            key={tip}
            className="bg-teal-900 p-2 rounded-lg text-slate-50 hover:opacity-75"
          >
            {tip} %
          </button>
        ))}
        <input
          type="text"
          placeholder="Custom"
          className="p-2 text-teal-900 rounded-lg focus:outline-none focus:border focus:border-teal-900"
        />
      </div>
    </div>
  );
}

export default Tip;
