import axios from 'axios'
var token;
// Deafult configuration of axios
function user_token() {
    try{
        const data = JSON.parse(localStorage.getItem("user-Info"))
        var tkn = data.token
        console.log(tkn,"token")
        return tkn;
    }catch{
        console.log("You are not LogIn")
        return null;
    }
};
token = user_token()
console.log(token,"token")
var myApi =  axios.create({
    baseURL: 'http://127.0.0.1:4000/',
    headers: {'Authorization': `Token ${token}`,'content-type':'application/json'}
});
// var myApi =  require('axios').default;
// axios.defaults.baseURL = 'http://127.0.0.1:4000/';
// axios.defaults.headers.common['Authorization'] = `Token ${token}`;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// function name(params) {
    
// }
export default myApi;
