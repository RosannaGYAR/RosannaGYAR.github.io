import React, { useEffect } from 'react'
import { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import './App.css';

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



console.log('data: ', data)



  return (
    <Box className="App">
      <h1>Periodic Table</h1>
      <Button onClick={fetchApiData} color="primary" variant="contained">Ladda ner data för systemet</Button>
        <Box display="flex" justifyContent="row" flexWrap="wrap" marginTop="20px">
          
          {data.map((item, idx) => {
          return  <Box key={`${item}-${idx}`} bgcolor={"#" + item.cpkHexColor} width="200px" margin="5px">
           <Typography align="left">{item.atomicNumber}</Typography>
           <Typography variant="h2">{item.symbol}</Typography> 
           <Typography align="left">{item.name}</Typography>
           <Typography align="left">{item.atomicMass}</Typography> 
            </Box>
          })}

           
          </Box>
      </Box>
 )}


export default PeriodicSystem;
        // <button onClick={fetchApiData}>Ladda ner data för systemet</button>
        // <p>Perodic Table</p>
      // </header>
    //</div>
 // );
//}
