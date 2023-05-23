import axios from 'axios';
import { configure } from 'axios-hooks';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.defaults.xsrfCookieName = 'csrftoken';
instance.defaults.xsrfHeaderName = 'CSRFTOKEN';
instance.defaults.headers['Content-Type'] = 'application/json';

configure({ axios: instance });

export default instance;
