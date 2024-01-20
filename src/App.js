import React, { useReducer } from 'react';
import './App.css';

export const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
};

const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.INCREMENT: 
       return ({ count: state.count + 1 });  
    case ACTIONS.DECREMENT: 
      return ({ count: state.count -1});
    default: 
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count : 0}); 

  return (
    <div>
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}> + </button>    
      <span> {state.count} </span>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}> - </button>
    </div>
  )
};

export default App;
