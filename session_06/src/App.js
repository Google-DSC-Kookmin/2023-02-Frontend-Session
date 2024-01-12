import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [ number, setNumber ] = useState(0);
  const [ isOddNumber, setIsOddNumber ] = useState(false);
  const [ backgroundColor, setBackgroundColor ] = useState('white');
  useEffect(() => {
    setIsOddNumber(number % 2 === 1 || number % 2 === -1);
    console.log('isOddNumber', isOddNumber);
    isOddNumber ? setBackgroundColor('green') : setBackgroundColor('white');
  }, [number, isOddNumber, backgroundColor])

  useEffect(() => {console.log("This only executes once.")}, [])

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <h1>COUNTER</h1>
      <h2>{number}</h2>
      <Button text={"-"} onClickAction={() => setNumber(number - 1)} />
      <Button text={"+"} onClickAction={() => setNumber(number + 1)} />
    </div>
  );
}

export default App;
