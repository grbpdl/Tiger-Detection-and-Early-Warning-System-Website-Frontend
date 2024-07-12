import axios from 'axios';
// const BASE_URL = 'http://127.0.0.1:8000/';
const BASE_URL = 'http://110.44.121.73:2568/';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});