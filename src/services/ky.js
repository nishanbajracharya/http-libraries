import ky from 'ky';

import API from '../constants/api';

const instance = ky.create({ prefixUrl: API.BASE });

export default instance;