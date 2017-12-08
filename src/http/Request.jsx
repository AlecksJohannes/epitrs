import axios from 'axios';
const BASE_URL = "https://api.stripe.com/v1";
const API_KEY = "sk_test_uJpA8Mt0WYDhGMRmUTj73XRD";
const queryString = require('query-string');

function auth() {
  //Too lasy to do :(
  fetch(`${BASE_URL}/tokens?card[number]=4242424242424242&card[exp_month]=12&card[exp_year]=2018&card[cvc]=123`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + API_KEY
    }
  }).then(response => response.json())
  .then(responseJson => {
    console.log(responseJson);
    localStorage.setItem('cardId', responseJson.id)
  })
}

function dataBuilder() {
  const query = queryString.stringify({
    "amount": 2000,
    "currency": "usd",
    "source": localStorage.getItem('cardId'),
    "description": "Charge for testing"
  })
  return query;
}

function charge() {
  auth()
  return axios({
    method: 'post',
    url: `${BASE_URL}/charges`,
    data: dataBuilder(),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + API_KEY
    }
  }) 
  .then(response => {return response})
}

function fetchCharges() {
   return fetch(`${BASE_URL}/charges`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + API_KEY
    }
  }).then(response => response.json())
  .then(responseJson => {
    return responseJson
  })
}

export {auth, charge, fetchCharges}
