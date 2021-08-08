import {
  SUCCESS_GET_ALL_USERS,
  GET_ALL_USERS_ERROR,
} from '../../store/user/constants'
import reducer, { initialState } from '../../store/user/reducer'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState)
  })

  it('should handle SUCCESS_GET_ALL_USERS', () => {
    expect(
      reducer(initialState, {
        type: SUCCESS_GET_ALL_USERS,
        users: [{ id: 1, name: 'Test'}],
      }),
    ).toEqual({
      ...initialState,
      users: [{ id: 1, name: 'Test'}],
      errors: null,
    })
  })

  it('should handle GET_ALL_USERS_ERROR', () => {
    expect(
      reducer(initialState, {
        type: GET_ALL_USERS_ERROR,
        errors: { email: 'error' },
      }),
    ).toEqual({
      ...initialState,
      users: [],
      errors: { email: 'error' },
    })
  })
})
