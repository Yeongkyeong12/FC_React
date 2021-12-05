import React from "react";
import Counter from "../components/Couter";
import { useSelector, useDispatch } from "react-redux";

function CounterContainer() {
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));
  const dispatch = useDispatch();

  const onIncrease = () => {};
  return <Counter />;
}

export default CounterContainer;
