import React from 'react';
import { ACTIONS } from './App';

const Todo = ({todo, dispatch}) => {
    return (
        <div>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id : todo.id}})}>Toggle</button>
            <span style={{color: todo.complete ? 'grey' : 'black'}}>{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
        </div>
    )
}

export default Todo;