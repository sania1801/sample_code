import UserAPI from '@api/user'
import { SUCCESS_GET_ALL_USERS, GET_ALL_USERS_ERROR } from '@store/user/constants'

const api = new UserAPI()

export const getAllUsers = () => (
  (dispatch) => {
    api.getAllUsers()
      .then((response) => {
        dispatch({
          type: SUCCESS_GET_ALL_USERS,
          users: response.data,
        })
      })
      .catch((e) => {
        dispatch({
          type: GET_ALL_USERS_ERROR,
          errors: e.response,
        })
      })
  }
)
