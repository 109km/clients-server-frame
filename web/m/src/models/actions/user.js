export const setUserInfo = user => ({
  type: 'SET_USER_INFO',
  payload: user
})

export const setUserLogout = () => ({
  type: 'SET_USER_LOGOUT'
})

// Action types
export const ACTIONS_TYPES = {
  SET_USER_INFO: 'SET_USER_INFO',
  SET_USER_LOGOUT: 'SET_USER_LOGOUT'
}