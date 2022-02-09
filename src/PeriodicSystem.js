import React from 'react'
import { useState } from 'react';
import './App.css';
// import getData from './ApiModule'
// import axios from "axios";

const axios = require("axios").default;

const options = {
  method: 'GET',
  url: 'https://periodictable.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'periodictable.p.rapidapi.com',
    'x-rapidapi-key': 'b7495ee795mshf8c43c019881802p100970jsn8539bf723c0a'
  }
};

const PeriodicSystem = () => {

  const [data, setData] = useState([])

  const fetchApiData = () => {
    // setData(getData())
    let apiData = [{}]
    axios.request(options).then(function (response) {
      console.log('api', response.data);
      apiData = response.data
       setData(apiData)
  }).catch(function (error) {
      console.error(error);
  });
    return apiData
  }
  if (data) {
    console.log('data:', data)
    data.map((item) => {
      console.log('item: ', item)
      return {
        period: item.period,
        name: item.name,
        atomicmass: item.atomicmass,
        group: item.group,
        symbol: item.symbol,
      }
    })
  }

  // fetchApiData()

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={fetchApiData}>Ladda ner systemet</button>
        <p>Hej</p>
      </header>
    </div>
  );
}

export default PeriodicSystem;
