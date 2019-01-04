import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

export const getBackersByUserId = ({
  userId = null
}) => {

  if (!userId){
    throw new TypeError('`userId` must not be null.');
  }

  return async (dispatch, getState) => {
    dispatch(getBackersByUserIdStarted());
    let backersRes = await post(Config.apiUrl + '/backers/list', {
      data: {
        userId
      }
    });
    if (backersRes.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(getBackersByUserIdSuccess(backersRes.data.data));
    } else {
      dispatch(getBackersByUserIdFail(backersRes.data));
    }
  }
}

export const getBackersByUserIdStarted = () => ({
  type: 'GET_BACKERS_BY_USER_ID_STARTED'
})
export const getBackersByUserIdSuccess = (backers) => ({
  type: 'GET_BACKERS_BY_USER_ID_SUCCESS',
  payload: {
    backers
  }
})
export const getBackersByUserIdFail = (error) => ({
  type: 'GET_BACKERS_BY_USER_ID_FAIL',
  payload: {
    error
  }
})

export const ACTIONS_TYPES = {
  GET_BACKERS_BY_USER_ID_STARTED: 'GET_BACKERS_BY_USER_ID_STARTED',
  GET_BACKERS_BY_USER_ID_SUCCESS: 'GET_BACKERS_BY_USER_ID_SUCCESS',
  GET_BACKERS_BY_USER_ID_FAIL: 'GET_BACKERS_BY_USER_ID_FAIL'
}