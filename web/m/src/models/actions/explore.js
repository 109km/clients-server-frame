import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

export const getExploreFeedsStarted = () => ({
  type: 'GET_EXPOLRE_FEEDS_STARTED'
})

export const getExploreFeedsSuccess = (feeds) => ({
  type: 'GET_EXPOLRE_FEEDS_SUCCESS',
  payload: {
    feeds
  }
})

export const getExploreFeedsFail = (error) => ({
  type: 'GET_EXPOLRE_FEEDS_FAIL',
  payload: {
    error
  }
})

export const getExploreFeeds = (start, limit) => {
  return async (dispatch, getState) => {
    dispatch(getExploreFeedsStarted());
    let res = await post(Config.apiUrl + '/explore/feeds/', {
      data: {
        start: start,
        limit: limit
      }
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(getExploreFeedsSuccess(res.data.data));
    } else {
      dispatch(getExploreFeedsFail(res.data));
    }
    return res.data;
  };
}


// Action types
export const ACTIONS_TYPES = {
  GET_EXPOLRE_FEEDS_STARTED: 'GET_EXPOLRE_FEEDS_STARTED',
  GET_EXPOLRE_FEEDS_SUCCESS: 'GET_EXPOLRE_FEEDS_SUCCESS',
  GET_EXPOLRE_FEEDS_FAIL: 'GET_EXPOLRE_FEEDS_FAIL',
}