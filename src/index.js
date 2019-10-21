import API from './constants/api';

import ky from './services/ky';
import axios from './services/axios';
import wretch from './services/wretch';
import rp from './services/requestPromise';
import superagent from './services/superagent';

import { getTime } from './utils/time';

// axios
axios.get(API.USERS).then(response => {
  console.log('AXIOS', getTime(), response.data);
});

// superagent
superagent.get(API.USERS).then(response => {
  console.log('SUPERAGENT', getTime(), response.body);
});

// ky
ky.get(API.USERS.replace('/', ''))
  .then(response => response.json())
  .then(response => {
    console.log('KY', getTime(), response);
  });

// wretch
wretch
  .url(API.USERS)
  .get()
  .json(response => {
    console.log('WRETCH', getTime(), response);
  });

// fetch
fetch(API.BASE + API.USERS)
  .then(response => response.json())
  .then(response => {
    console.log('FETCH', getTime(), response);
  });

// XHR
const xhrRequest = new XMLHttpRequest();
xhrRequest.open('GET', API.BASE + API.USERS);
xhrRequest.send();
xhrRequest.addEventListener('load', function() {
  console.log('XHR', getTime(), JSON.parse(xhrRequest.responseText));
});

// Request Promise
rp(API.BASE + API.USERS, {
  json: true
}).then(response => {
  console.log('REQUEST PROMISE', getTime(), response);
});
