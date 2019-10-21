import superagent from 'superagent';
import prefix from 'superagent-prefix';

import API from '../constants/api';

const instance = superagent.agent().use(prefix(API.BASE));

export default instance;