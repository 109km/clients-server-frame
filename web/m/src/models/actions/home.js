import {
  post,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';

export const getHomeFeedsStarted = () => ({
  type: 'GET_HOME_FEEDS_STARTED'
})

export const getHomeFeedsSuccess = (feeds) => ({
  type: 'GET_HOME_FEEDS_SUCCESS',
  payload: {
    feeds
  }
})

export const getHomeFeedsFail = (error) => ({
  type: 'GET_HOME_FEEDS_FAIL',
  payload: {
    error
  }
})

export const getHomeFeeds = (start, limit) => {
  return async (dispatch, getState) => {
    dispatch(getHomeFeedsStarted());
    let res = await post(Config.apiUrl + '/home/feeds/', {
      data: {
        start: start,
        limit: limit
      }
    });
    if (res.data.code === STATUS_CODE['SUCCESS'].code) {
      dispatch(getHomeFeedsSuccess(res.data.data));
    } else {
      dispatch(getHomeFeedsFail(res.data));
    }
    return res.data;
  };
}

export const addComment = (postId, comment) => ({
  type: 'ADD_COMMENT',
  payload: {
    postId: postId,
    comment: comment
  }
})

// Action types
export const ACTIONS_TYPES = {
  GET_HOME_FEEDS_STARTED: 'GET_HOME_FEEDS_STARTED',
  GET_HOME_FEEDS_SUCCESS: 'GET_HOME_FEEDS_SUCCESS',
  GET_HOME_FEEDS_FAIL: 'GET_HOME_FEEDS_FAIL',
  ADD_COMMENT: 'ADD_COMMENT'
}