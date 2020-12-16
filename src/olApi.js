import axios from 'axios';

const olApi = axios.create({
  baseURL: 'http://openlibrary.org/'
});

export default olApi;