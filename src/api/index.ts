import Axios from 'axios'
import { store } from '../App'
import { Logger } from '../utils/debug'
import { JWT_TOKEN } from '../utils/shared'
import { loginAction, logoutAction } from '../store/action/user'

const AXIOS_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : process.env.NODE_ENV === 'production'
    ? 'https://api.jzmin.top/' // fixme: api.jzmin.top will be replaced
    : 'http://localhost:4000' // tip: 此处为线上 mock server 地址
Logger('api地址: %s', AXIOS_URL)
export const axiosInstance = Axios.create({
  baseURL: AXIOS_URL,
  timeout: 1000
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem(JWT_TOKEN)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } else {
    store.dispatch(logoutAction('本地没有找到用户token'))
  }
  return config
}, error => Promise.reject(error))

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      Logger('axios: %s', error.response)
      if (error.response.status === 401) {
        store.dispatch(logoutAction('请求 401 错误'))
        localStorage.removeItem(JWT_TOKEN)
      }
    } else {
      Logger('axios: %s', error)
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
export * from './dashboard'
export * from './worker'
export * from './shop'
export * from './user'
