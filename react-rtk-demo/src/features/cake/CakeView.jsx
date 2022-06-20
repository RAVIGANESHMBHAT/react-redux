import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [orderCount, setOrderCount] = useState(1);
  const [restockCount, setRestockCount] = useState(1);
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes = {numOfCakes}</h2>
      <div>
        <input
          type="number"
          value={orderCount}
          onChange={(e) => setOrderCount(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(ordered(orderCount))}>
          Order cakes
        </button>
      </div>
      <div>
        <input
          type="number"
          value={restockCount}
          onChange={(e) => setRestockCount(parseInt(e.target.value))}
        />
        <button onClick={() => dispatch(restocked(restockCount))}>
          Restock cakes
        </button>
      </div>
    </div>
  );
};
