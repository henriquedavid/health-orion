import axios from 'axios';

let host = "http://localhost:8080"

var api = axios.create({
    baseURL: host + '/'
});


api.interceptors.response.use(
    response => {
        // do something on response
        return response
    },
    error => {
        // do something in case error
        return Promise.reject(error.response.data) // take the server response
    }
);

export{
    api
};
