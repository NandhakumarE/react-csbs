import { useEffect, useState } from "react";

/*
overallValues = {
 id=1,
 initialValue=20,
 heading="Counter App"
 ...100
}
*/

const Counter = (overallValues) => {
  const [count, countSetter] = useState(overallValues.initialValue);
  //https://undraw.co/illustrations
  useEffect(() => {
    console.log("hello");
  }); // callback, dependency[]

  const decreament = () => {
    countSetter(count - 1);
  };
  const increament = () => {
    countSetter(count + 1);
  };

  return (
    <div className="overall-counter">
      <h4>{overallValues.heading}</h4>
      <div className="counter">
        <button onClick={decreament}>-</button>
        <span>{count}</span>
        <button onClick={increament}>+</button>
      </div>
    </div>
  );
};

export default Counter;
