import React from "react";

export default function List({ item }) {
  return (
    <div className="bg-teal-600 border w-50 h-15">
      <p>{item}</p>
    </div>
  );
}
