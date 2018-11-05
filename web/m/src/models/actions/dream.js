import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

/**
 * @desc Save dream changes.
 * @param {Object} options
 * @param {String} options.title
 * @param {String} options.content
 * @param {String} options.coverUrl
 */
export const updateDreamDetail = (options) => ({
  type: 'UPDATE_DREAM_DETAIL',
  payload: options
})

export const getDreamDetailStarted = () => ({
  type: 'GET_DREAM_DETAIL_STARTED'
})

export const getDreamDetailSuccess = (dream) => ({
  type: 'GET_DREAM_DETAIL_SUCCESS',
  payload: { ...dream}
})

export const getDreamDetailFail = (error) => ({
  type: 'GET_DREAM_DETAIL_FAIL',
  payload: {
    error
  }
})

/**
 * @param {Number} dreamId 
 */
export const getDreamDetail = ({
  dreamId
}) => {
  return async (dispatch, getState) => {
    dispatch(getDreamDetailStarted());
    let res = await post(Config.apiUrl + '/dream/detail', {
      dreamId
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(getDreamDetailSuccess(res.data.data));
    } else {
      dispatch(getDreamDetailFail(res.data));
    }
    return getState();
  };
};

// Action types
export const ACTIONS_TYPES = {
  GET_DREAM_DETAIL: 'GET_DREAM_DETAIL',
  UPDATE_DREAM_DETAIL: 'UPDATE_DREAM_DETAIL',
  GET_DREAM_DETAIL_STARTED: 'GET_DREAM_DETAIL_STARTED',
  GET_DREAM_DETAIL_SUCCESS: 'GET_DREAM_DETAIL_SUCCESS',
  GET_DREAM_DETAIL_FAIL: 'GET_DREAM_DETAIL_FAIL'
}