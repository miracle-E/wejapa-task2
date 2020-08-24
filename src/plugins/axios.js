// import Vue from 'vue'
import axios from 'axios'

axios.create({
  baseURL:'https://rel.ink/api'
})
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'access-control-allow-origin'

axios.defaults.baseURL = 'https://rel.ink/api'


// response interceptor
axios.interceptors.response.use((response) => {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default axios