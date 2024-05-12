import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:3000s'})


export const logIn = (authData) => API.post('/user/login',authData);
export const signUp = (authData) => API.post('/user/signUp',authData);