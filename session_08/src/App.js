import AppChild from './AppChild'
import { useMemo } from 'react';
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = React.useState(0);

  const getAppChild = useMemo(() => <AppChild />, [])
  
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setNum(num + 1)}>Click me</button>
      {getAppChild}
    </div>
  )
}

export default App;
