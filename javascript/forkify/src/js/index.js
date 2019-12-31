// NOTE: npm i to install all the webpacks and babel
// GET:   https://forkify-api.herokuapp.com/api/get

// Example URL: https://forkify-api.herokuapp.com/api/get?rId=47746

// Path:  https://forkify-api.herokuapp.com/api/search

// Example URL: https://forkify-api.herokuapp.com/api/search?q=pizza

import axios from 'axios';

async function getResults(query){

    const res = await axios( `https://forkify-api.herokuapp.com/api/search?q=${query}`);

    const resData =  res.data.recipes;
    console.log(resData);

};

getResults('pizza');

