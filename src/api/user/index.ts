import axiosInstance from '../index'
import { store } from '../../App'
import { loginAction } from '../../store/action/user'
import { JWT_TOKEN } from '../../utils/shared'

export async function login (username: string, password: string) {
  return axiosInstance.post('/user/login', {
    username,
    password
  }).then(response => {
    if (response.status === 200) {
      localStorage.setItem(JWT_TOKEN, response.data.token)
    }
    return response
  })
}
