import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
import './App.css';

function App() {
  //let [count, setCount] = useState(1)
  let countState = useState(1);
  return (
    <CounterContext.Provider value={countState}>
      <div >
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
