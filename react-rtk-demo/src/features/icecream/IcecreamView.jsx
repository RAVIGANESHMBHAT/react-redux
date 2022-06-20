import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./icecreamSlice";

export const IcecreamView = () => {
  const [orderCount, setOrderCount] = useState(1);
  const [restockCount, setRestockCount] = useState(1);

  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreams = {numOfIcecreams}</h2>
      <input
        type="number"
        value={orderCount}
        onChange={(e) => setOrderCount(paresInt(e.target.value))}
      />
      <button onClick={() => dispatch(ordered(orderCount))}>
        Order Icecreams
      </button>
      <input
        type="number"
        value={restockCount}
        onChange={(e) => setRestockCount(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(restockCount))}>
        Restock Icecreams
      </button>
    </div>
  );
};
