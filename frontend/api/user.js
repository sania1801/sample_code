import { AxiosClient } from '../constants'

export default class UserAPI {
  test() {
    return AxiosClient.get('/users')
  }
}
