/*
  Decided to create a seperate file for storing the API requests.
  So the function can be called from any location if needed. Seperation of concerns ;).
  It a small API I have set up myself.
*/

import Axios from 'axios';
import qs from 'qs'; 

const axios = Axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  withCredentials: true
});

// Get request for loading in all the heroes
export const getAllHeroeDocuments = () => {
  return axios({
    method: "GET",
    url: 'all-heroes'
  })
}

// Post request for adding the heroes
export const postAddHeroeDocument = (newHeroeData) =>{
  return axios({
    method: 'POST',
    url: 'add-heroe-document',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
    data: qs.stringify(newHeroeData) 
  })
}

// Post request for editing the heroes
export const postEditHeroeDocument = (newHeroeData) =>{
  return axios({
    method: 'POST',
    url: 'edit-heroe-document',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
    data: qs.stringify(newHeroeData) 
  })
}

// Post request for removing the heroes
export const postRemoveEditHeroeDocument = (removeHeroeData) =>{
  let removedHeroeData = {
    heroeDocumentId: removeHeroeData
  };

  return axios({
    method: 'POST',
    url: 'remove-heroe-document',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }, 
    data: qs.stringify(removedHeroeData)
  })
}