import axios from 'axios'

// Object.assign(axios.defaults.headers, headers)
// console.log(axios.defaults);
axios.defaults.baseURL = 'http://192.168.2.1:3000/'
axios.interceptors.response.use((response) => {
    if(response){
        if (response.status == 200) {
            return response.data
        }
        if (response.status == 304) {
            console.log('没权限');
            return response
        }
    }
    return response;
}, function (error) {
    if (error.response) {
        console.log('Error:'+error.response);
    }else{
        console.log('Error:'+error.message);
        
    }
});
export default axios