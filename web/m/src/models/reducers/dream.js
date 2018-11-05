import { post, getQuery, Config } from '../../utils/util';
import {
  actionDream
} from '../actions';

const ACTIONS_TYPES = actionDream.ACTIONS_TYPES;

const dream = async (state = {}, action) => {
  if (action.type === ACTIONS_TYPES.GET_DREAM_DETAIL) {
    const response = await post(Config.apiUrl + '/dream/edit', {
      data: action.payload
    });
    console.log(response);
    return Object.assign({}, state, response);
  } else {
    return state;
  }

}
export default dream;