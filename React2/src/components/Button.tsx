import React from "react";

export default function Button({ count, setCount }) {
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-3 w-30"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Sendar
      </button>
    </div>
  );
}
