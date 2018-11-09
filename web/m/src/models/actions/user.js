import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
export const setUserInfo = user => ({
  type: 'SET_USER_INFO',
  payload: user
})

export const setUserLogout = () => ({
  type: 'SET_USER_LOGOUT'
})

export const setUserAvatar = avatar => ({
  type: 'SET_USER_AVATAR',
  payload: avatar
})


export const updateUserInfoStarted = () => ({
  type: 'UPDATE_USER_INFO_STARTED'
})

export const updateUserInfoSuccess = (user) => ({
  type: 'UPDATE_USER_INFO_SUCCESS',
  payload: { ...user
  }
})

export const updateUserInfoFail = (error) => ({
  type: 'UPDATE_USER_INFO_FAIL',
  payload: {
    error
  }
})

export const updateUserInfo = (userData = null) => {
  return async (dispatch, getState) => {
    dispatch(updateUserInfoStarted());
    let res = await post(Config.apiUrl + '/user/update', {
      data: userData
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(updateUserInfoSuccess(res.data.data));
    } else {
      dispatch(updateUserInfoFail(res.data));
    }
    return res.data;
  };
};

// Action types
export const ACTIONS_TYPES = {
  SET_USER_INFO: 'SET_USER_INFO',
  SET_USER_LOGOUT: 'SET_USER_LOGOUT',
  SET_USER_AVATAR: 'SET_USER_AVATAR',
  UPDATE_USER_INFO_STARTED: 'UPDATE_USER_INFO_STARTED',
  UPDATE_USER_INFO_SUCCESS: 'UPDATE_USER_INFO_SUCCESS',
  UPDATE_USER_INFO_FAIL: 'UPDATE_USER_INFO_FAIL'
}