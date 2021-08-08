import {
  SUCCESS_GET_ALL_USERS,
  GET_ALL_USERS_ERROR,
} from './constants'

export const initialState = {
  errors: null,
  users: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_ALL_USERS:
      return {
        ...state,
        users: action.users,
      }
    case GET_ALL_USERS_ERROR:
      return {
        ...state,
        errors: action.errors,
      }
    default:
      return state
  }
}
