import React, { useState, useEffect } from "react";

export default function Card1({
  name,
  occupation,
  image,
}: {
  name: string;
  occupation: string;
  image: string;
}) {
  return (
    <div className="grid grid-cols-2 h-40">
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>{occupation}</h4>
      </div>
      <div className="bg-green-400 w-full">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
    </div>
  );
}
