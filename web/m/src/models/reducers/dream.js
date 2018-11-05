import {
  post,
  getQuery,
  Config
} from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import {
  actionDream
} from '../actions';

const ACTIONS_TYPES = actionDream.ACTIONS_TYPES;

const dream = async (state = {}, action) => {
  let res;
  // Get one dream's detail
  if (action.type === ACTIONS_TYPES.GET_DREAM_DETAIL) {
    const response = await post(Config.apiUrl + '/dream/detail', {
      data: action.payload
    });
    res = response.data.data;
    return Object.assign({}, state, res);
  } else if (action.type === ACTIONS_TYPES.UPDATE_DREAM_DETAIL) {
    const response = await post(Config.apiUrl + '/dream/update', {
      data: action.payload
    });
    res = response.data.data;
    return Object.assign({}, state, res);
  } else {
    return state;
  }

}
export default dream;