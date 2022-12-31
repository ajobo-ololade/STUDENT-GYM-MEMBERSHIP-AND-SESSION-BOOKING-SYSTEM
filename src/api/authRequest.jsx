import axios from ".";

export const signUpRequest = (reqObj) => axios.post(`register`, reqObj).then((res) => res.data);

export const loginRequest = (reqObj) => axios.post(`login`, reqObj).then((res) => res.data); 