import axios from 'axios';

const api = axios.create({
 /* baseURL: 'http://localhost:5000/api/feedback',*/
   baseURL: 'https://catallyst-assignment1.vercel.app/api/feedback',
});

export default api;
