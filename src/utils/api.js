const axios = require('axios').default;

export async function call_server(method, api, data) {
    const promise = axios({method:method,url:'https://crudcrud.com/api/050d7532dd8c4fe38783ed6f8df42be5'+api, data:data});
    const dataPromise = promise.then((response) => response.data)
    return dataPromise
}

export async function login_user(data) {
    console.log(data);
    let api = '/users';
    return (await call_server('get', api));
}
export async function register_user(data) {
    console.log(data);
    let api = '/users';
    return (await call_server('post', api, data));
}