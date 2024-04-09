import axios from 'axios'
import qs from 'qs'
import applyLoggerInterceptor from './interceptors/logger'

const httpClient = axios.create({
  baseURL: 'http://192.168.0.193:3001/api/',
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

if (process.env.NODE_ENV === 'development') {
  applyLoggerInterceptor(httpClient)
}

export default httpClient
