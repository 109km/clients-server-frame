import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

export const getDreamDetailStarted = () => ({
  type: 'GET_DREAM_DETAIL_STARTED'
})

export const getDreamDetailSuccess = (dream) => ({
  type: 'GET_DREAM_DETAIL_SUCCESS',
  payload: { ...dream
  }
})

export const getDreamDetailFail = (error) => ({
  type: 'GET_DREAM_DETAIL_FAIL',
  payload: {
    error
  }
})

export const updateDreamDetailStarted = () => ({
  type: 'UPDATE_DREAM_DETAIL_STARTED'
})

export const updateDreamDetailSuccess = (dream) => ({
  type: 'UPDATE_DREAM_DETAIL_SUCCESS',
  payload: { ...dream
  }
})

export const updateDreamDetailFail = (error) => ({
  type: 'UPDATE_DREAM_DETAIL_FAIL',
  payload: {
    error
  }
})

/**
 * @param {Number} dreamId 
 */
export const getDreamDetail = ({
  dreamId = null
}) => {
  return async (dispatch, getState) => {
    dispatch(getDreamDetailStarted());
    let res = await post(Config.apiUrl + '/dream/detail', {
      data: {
        dreamId
      }
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(getDreamDetailSuccess(res.data.data));
    } else {
      dispatch(getDreamDetailFail(res.data));
    }
    return getState();
  };
};

/**
 * @param {Number} dreamId 
 */
export const updateDreamDetail = (formData = null) => {
  return async (dispatch, getState) => {
    dispatch(updateDreamDetailStarted());
    console.log(formData);
    let res = await post(Config.apiUrl + '/dream/update', {
      data: formData
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(updateDreamDetailSuccess(res.data.data));
    } else {
      dispatch(updateDreamDetailFail(res.data));
    }
    return res.data;
  };
};


// Action types
export const ACTIONS_TYPES = {
  GET_DREAM_DETAIL: 'GET_DREAM_DETAIL',
  UPDATE_DREAM_DETAIL: 'UPDATE_DREAM_DETAIL',
  GET_DREAM_DETAIL_STARTED: 'GET_DREAM_DETAIL_STARTED',
  GET_DREAM_DETAIL_SUCCESS: 'GET_DREAM_DETAIL_SUCCESS',
  UPDATE_DREAM_DETAIL_STARTED: 'UPDATE_DREAM_DETAIL_STARTED',
  UPDATE_DREAM_DETAIL_SUCCESS: 'UPDATE_DREAM_DETAIL_SUCCESS',
  UPDATE_DREAM_DETAIL_FAIL: 'UPDATE_DREAM_DETAIL_FAIL',
}