import './App.css';
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import Card from './card.js';
import { fetchData, deleteData, updateData } from './reducer';
import { Spinner } from "reactstrap"
function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data);
  useEffect(() => {
     getData();
  },[]);
  const getData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(fetchData(res.data));
  }
  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteData(data.filter(d => d.id !== id)));
  }
  const handleUpdate = (id, obj) => {
    const newData =data.map(d => {
      if(d.id === id){
        console.log("Id here", id , obj);
        return {
          ...d,
          ...obj,
        }
      }
      else return d;
    })
    console.log(newData);
    dispatch(updateData(newData));
  }
  if(!data){
    return (
      <div className='ms-4 mt-4'>
          <h4>Loading....</h4>
          <div>
          <Spinner style={{ width: '3rem', height: '3rem' }}
              children={false} />
          </div>
      </div>
  );
  }
  return (
    <div className="App container">
      <div className='row d-flex  align-items-center justify-content-center'>
      {data  && data.map((d,i) =>  {
        return (
          <div className='m-3 col-md-5 col-lg-3 col-sm-5 col-12'>
            <Card data = {d} key = {i} handleDelete = {handleDelete} handleUpdate = {handleUpdate}/>
          </div>
        )
      })}
      </div>
      
    </div>
  );
}

export default App;
