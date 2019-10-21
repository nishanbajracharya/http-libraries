import API from './constants/api';

import ky from './services/ky';
import axios from './services/axios';
import wretch from './services/wretch';
import superagent from './services/superagent';

import { getTime } from './utils/time';

axios.get(API.USERS).then(response => {
  console.log('AXIOS', getTime(), response.data);
});

superagent.get(API.USERS).then(response => {
  console.log('SUPERAGENT', getTime(), response.body);
});

ky.get(API.USERS.replace('/', ''))
  .then(response => response.json())
  .then(response => {
    console.log('KY', getTime(), response);
  });

wretch
  .url(API.USERS)
  .get()
  .json(response => {
    console.log('WRETCH', getTime(), response);
  });

fetch(API.BASE + API.USERS)
  .then(response => response.json())
  .then(response => {
    console.log('FETCH', getTime(), response);
  });

const request = new XMLHttpRequest();
request.addEventListener('load', function() {
  console.log('XHR', getTime(), JSON.parse(request.responseText));
});
request.open('GET', API.BASE + API.USERS);
request.send();
