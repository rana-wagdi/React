///////////////FUNCTION COMPONENT/////////////

import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store";

import classes from "./Counter.module.css";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showToggle = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterAction.increment())
  };
  const increaseHandler = () => {
    // dispatch({ type: "increase", amount: 10 });
    dispatch(counterAction.increase(10))
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increase 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//////////////////////////////////
//class-bases-components
// import { Component } from "react";
// import classes from './Counter.module.css';
// import { connect, Connect } from "react-redux";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   increaseHandler() {
//    this.props.increase();
//   }
//    toggleCounterHandler() {};

//   render() {
//     return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//       <button onClick={this.increaseHandler.bind(this)}>Increase 5</button>
//       <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     increase: () => dispatch({type :'increase' , amount: 10}),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

