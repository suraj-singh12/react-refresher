import React from 'react';
import { ACTIONS } from './App';

const Todo = ({todo, dispatch}) => {
    return (
        <div style={{borderBottom: '1px solid blue', marginBottom: '2px', textAlign: 'center', paddingBottom: '10px'}}>
            <p style={{color: todo.isCompleted ? 'gray' : 'black'}}>{todo.name}</p>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id} })}>Toggle Todo</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id} })}>Delete Todo</button>
        </div>
    )
};

export default Todo;