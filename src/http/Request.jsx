import axios from 'axios';
const BASE_URL = "https://api.stripe.com/v1";
const API_KEY = "sk_test_uJpA8Mt0WYDhGMRmUTj73XRD";
const queryString = require('query-string');

function dataBuilder(amount, description, currency) {
  const query = queryString.stringify({
    "amount": amount,
    "currency": currency,
    "source": localStorage.getItem('cardToken'),
    "description": description
  })
  return query;
}

function charge(amount, description, currency) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/charges`,
    data: dataBuilder(amount, description, currency),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + API_KEY
    }
  }) 
  .then(response => {return response})
  .catch(error => {return error.response})
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

function refund(charge_id) {
  return axios({
    method: 'post',
    url: `${BASE_URL}/refunds`,
    data: queryString.stringify({charge: charge_id}),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Bearer " + API_KEY
    }
  }) 
  .then(response => {return response})
  .catch(error => {return error.response})
}

function fetchDisputes() {
   return fetch(`${BASE_URL}/disputes`, {
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

export {charge, fetchCharges, refund, fetchDisputes}
