import React from "react";

export default function Card({
  img,
  name,
  occupation,
}: {
  img: string;
  name: string;
  occupation: string;
}) {
  return (
    <div className="border w-100 m-3">
      <img src={img} alt={name} className="w-full" />
      <p className="font-bold">{name}</p>
      <p>{occupation}</p>
    </div>
  );
}
