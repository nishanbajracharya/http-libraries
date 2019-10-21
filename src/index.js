import API from './constants/api';

import ky from './services/ky';
import axios from './services/axios';
import wretch from './services/wretch';
import superagent from './services/superagent';

axios.get(API.USERS).then(response => {
  console.log('AXIOS', response.data);
});

superagent.get(API.USERS).then(response => {
  console.log('SUPERAGENT', response.body);
});

ky.get(API.USERS.replace('/', ''))
  .then(response => response.json())
  .then(response => {
    console.log('KY', response);
  });

wretch
  .url(API.USERS)
  .get()
  .json(response => {
    console.log('WRETCH', response);
  });
