import React, { useContext } from 'react';
import counterContext from './CounterContext';

const Child = () => {
    let counterValue = useContext(counterContext);
    return (
        <div>
            <h1>This is First Child using CounterContext</h1>
            <h3>Value of counter is {counterValue[0]}</h3>
            <button onClick={() => 
            counterValue[1](++counterValue[0])
            }>
                Increment Context
            </button>
        </div>

    )
}
export default Child