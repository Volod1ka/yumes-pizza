import axios from 'axios'
import qs from 'qs'
import applyLoggerInterceptor from './interceptors/logger'

const httpClient = axios.create({
  baseURL: 'http://localhost:3001/api/',
  withCredentials: true,
  paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

if (process.env.NODE_ENV === 'development') {
  applyLoggerInterceptor(httpClient)
}

export default httpClient
