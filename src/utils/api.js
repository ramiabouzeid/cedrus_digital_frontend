const axios = require('axios').default;

export async function call_server(method, api, data, auth) {
    let headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    let initialToken = localStorage.getItem('tokens');
    if (auth) {
        headers['Authorization'] = 'Bearer ' + initialToken;
    }
    let request_options = {
        method:method,
        url:'http://127.0.0.1:8000/api'+api, 
        params:data,
        headers: headers
    }
    const promise = axios(request_options);
    const dataPromise = promise.then((response) => response.data)
    return dataPromise
}

export async function login_user(data) {
    let api = '/auth/login';
    return (await call_server('post', api));
}
export async function register_user(data) {
    let api = '/users';
    return (await call_server('post', api, data));
}