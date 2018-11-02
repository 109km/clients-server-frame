export const getHomeNews = (start, end) => ({
  type: 'GET_HOME_NEWS',
  payload: {
    start: start,
    end: end
  }
})

export const addComment = (postId, comment) => ({
  type: 'ADD_COMMENT',
  payload: {
    postId: postId,
    comment: comment
  }
})


// Action types
export const ACTIONS_TYPES = {
  GET_HOME_NEWS: 'GET_HOME_NEWS',
  ADD_COMMENT: 'ADD_COMMENT'
}