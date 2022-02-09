// import React from 'react'
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

 const getData = () => {

    axios.request(options).then(function (response) {
        console.log('api', response.data);
    }).catch(function (error) {
        console.error(error);
    });
    
    // return response.data
}

export default getData
