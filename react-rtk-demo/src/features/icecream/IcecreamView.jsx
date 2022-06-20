import React from "react";
import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of Icecreams = {numOfIcecreams}</h2>
      <button>Order Icecreams</button>
      <button>Restock Icecreams</button>
    </div>
  );
};
