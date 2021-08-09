import {
  SUCCESS_GET_ALL_USERS,
  GET_ALL_USERS_ERROR,
} from './constants'

export const initialState = {
  errors: null,
  all: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_ALL_USERS:
      return {
        ...state,
        all: action.users,
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
