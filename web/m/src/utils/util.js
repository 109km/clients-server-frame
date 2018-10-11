import _ from 'lodash';
import axios from 'axios';
import Cookies from 'js-cookie';
import Conf from './config';


export const Config = Conf;

/**
 * @desc Create the request headers.
 * @param {Object} headers 
 */
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

export const keysToCamelCase = (object) => {
  let camelCaseObject = _.cloneDeep(object);
  if (_.isArray(camelCaseObject)) {
    return _.map(camelCaseObject, keysToCamelCase);
  } else {
    camelCaseObject = _.mapKeys(camelCaseObject, (value, key) => {
      return _.camelCase(key);
    });

    // Recursively apply throughout object
    return _.mapValues(camelCaseObject, (value) => {
      if (_.isPlainObject(value)) {
        return keysToCamelCase(value);
      } else if (_.isArray(value)) {
        return _.map(value, keysToCamelCase);
      } else {
        return value;
      }
    });
  }
}
/**
 * @desc Send post request
 * @param {String} url 
 * @param {Object} options 
 */
export const post = async (url, options = {}) => {
  options.headers = createHeader(options.headers);
  let res = await axios({
    url: url,
    method: "POST",
    headers: options.headers,
    data: options.data
  });
  res.data.data = keysToCamelCase(res.data.data);
  return res;
}

/**
 * @desc Check if is a mobile number
 * @param {String} mobile 
 */
export const isMobile = function(mobile) {
  return /^1[345678][0-9]{9}$/.test(mobile);
}
/**
 * @desc Get the query's params.
 * @param {String} str 
 */
export const getQuery = function(url) {
  let request = new Object(),
    strs;
  if (url.indexOf("?") !== -1) {
    let str = url.slice(url.indexOf("?") + 1, url.indexOf("#") >= 0 ? url.indexOf("#") : url.length);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      request[strs[i].split("=")[0]] = strs[i].split("=")[1];
    }
  }
  return request;
}