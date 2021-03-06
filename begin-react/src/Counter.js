import React, { Component } from 'react';

class Counter extends Component {
  handleIncrease = () => {
    console.log(this);
    console.log('increase');
  }

  handleDecrease = () => {
    console.log('decrease');
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

// function reducer(state, action) {
//   switch(action.type)  {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       throw new Error('Unhandled action');
//   }
// }

// function Counter() {

//   const [number, dispatch] = useReducer(reducer, 0);

//   const onIncrease = () => {
//     dispatch({
//       type: 'INCREMENT'
//     })
//   };

//   const onDecrease = () => {
//     dispatch({
//       type: 'DECREMENT'
//     })
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//     </div>
//   )
// }