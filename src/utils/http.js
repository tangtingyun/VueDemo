import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://gank.io';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        console.log('999999');
        console.log(config);
        return config;
    },
    err => {
        console.log('000000');
        console.log(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        console.log('45454');
        console.log(response);
        return response;
    },
    error => {
        console.log('232323');
        console.log(error);
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error)
    });

export default axios;