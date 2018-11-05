export const getDreamDetail = (dreamId = null) => ({
  type: 'GET_DREAM_DETAIL',
  payload: {
    dreamId: dreamId
  }
})

/**
 * @desc Save dream changes.
 * @param {Object} options
 * @param {String} options.title
 * @param {String} options.content
 * @param {String} options.coverUrl
 */
export const saveDreamDetail = (options) => ({
  type: 'SAVE_DREAM_DETAIL',
  payload: options
})

// Action types
export const ACTIONS_TYPES = {
  GET_DREAM_DETAIL: 'GET_DREAM_DETAIL',
  SAVE_DREAM_DETAIL: 'SAVE_DREAM_DETAIL'
}