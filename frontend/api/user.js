import { AxiosClient } from '../constants'

export default class UserAPI {
  getAllUsers() {
    return AxiosClient.get('/users')
  }
}
