import _ from 'lodash';
import axios from 'axios';
import Cookies from 'js-cookie';


export const createHeader = (headers) => {
  let newHeaders = headers || {};
  let sessionId = Cookies.get('sessionId');
  newHeaders['X-Api-Key'] = sessionId;
  return newHeaders;
}

/**
 * @desc Convert an object to form string.
 * @param {Object} data An object
 */
export const convertObjectToForm = (data) => {
  let str = '';
  _.forIn(data, (value, key) => {
    str += `${key}=${value}&`
  });
  str = str.slice(0, str.length - 1);
  return str;
}

/**
 * @desc Send post request
 * @param {String} url 
 * @param {Object} options 
 */
export const post = async (url, options) => {
  options.headers = createHeader(options.headers);
  return await axios({
    url: url,
    method: "POST",
    headers: options.headers,
    data: options.data
  });
}