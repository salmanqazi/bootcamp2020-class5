import React from 'react';
import Child from './Child';
import ReducerChild from './ReducerChild';

const Parent = () => {
    return (
        <div>
            <Child />
            <ReducerChild />
        </div>
    )
}

export default Parent