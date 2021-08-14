import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import axios from 'axios'

// const axio = require('axios').default;

ReactDOM.render(<App/>,document.getElementById("root"))

// // Deafult configuration of axios
// try{
//     const data = JSON.parse(localStorage.getItem("user-Info"))
//     var token = data.token
//     console.log(token,"token")
// }catch{
//     console.log("You are not LogIn")
// }

// var myApi =  axios.create({
//     baseURL: 'http://127.0.0.1:4000/',
//     headers: {'Authorization': `Token ${token}`,'content-type':'application/json'}
// });
// // var myApi =  require('axios').default;
// // axios.defaults.baseURL = 'http://127.0.0.1:4000/';
// // axios.defaults.headers.common['Authorization'] = `Token ${token}`;
// // axios.defaults.headers.post['Content-Type'] = 'application/json';

// // function name(params) {
    
// // }
// export default
