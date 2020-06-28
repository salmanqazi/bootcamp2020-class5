import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const ReducerChild = () => {
    let [state, dispatch] = useReducer(counterReducer, 1);
    //10 is initial value for reducer

    console.log(state);
    return (
        <div>
            <h1>This is Second Child using CounterReducer</h1>
            <h3>Value of counter is {state}</h3>
            <button onClick={
                () => dispatch('INCREMENT')
            }>
                Increment Reducer
            </button>
        </div>
    )
}
export default ReducerChild