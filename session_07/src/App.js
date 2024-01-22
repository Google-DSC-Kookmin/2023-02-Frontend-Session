import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setData(response.data);
      })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <>
        {
          data && data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))
        }
        </>
      </header>
    </div>
  );
}

export default App;
