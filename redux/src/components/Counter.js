//class-bases-components
import { Component } from "react";
import classes from './Counter.module.css'; 
import { connect, Connect } from "react-redux";

class Counter extends Component {
  // const dispatch = useDispatch()
  // const counter = useSelector(state => state.counter)

  incrementHandler() {
    this.props.increment();
  }
  decrementHandler() {
    this.props.decrement();
  }
  // const decrementHandler = () => {
  //   dispatch({type: 'decrement'})
  // }
  // const toggleCounterHandler = () => {};
   toggleCounterHandler() {};
  render() {
    return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <button onClick={this.incrementHandler.bind(this)}>Increment</button>
      <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
    </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

///////////////FUNCTION COMPONENT/////////////

// import { useSelector, useDispatch} from 'react-redux';

// import classes from './Counter.module.css';
// const Counter = () => {
//   const dispatch = useDispatch()
//   const counter = useSelector(state => state.counter)

//   const incrementHandler = () => {
//     dispatch({type: 'increment'})
//   }
//   const decrementHandler = () => {
//     dispatch({type: 'decrement'})
//   }
//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <button onClick={incrementHandler}>Increment</button>
//       <button onClick={decrementHandler}>Decrement</button>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;
