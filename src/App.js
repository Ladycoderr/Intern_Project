import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card.js';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(res.data);
  }
  return (
    <div className="App">
      {data  && data.map((d,i) =>  <Card data = {d} key = {i}/>)}
    </div>
  );
}

export default App;
