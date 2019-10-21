import wretch from 'wretch';

import API from '../constants/api';

const instance = wretch(API.BASE);

export default instance;
