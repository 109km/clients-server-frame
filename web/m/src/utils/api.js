import _ from 'lodash';

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
  return await fetch(url, {
    method: "POST",
    headers: options.headers ? options.headers : {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: convertObjectToForm(options.data)
  });
}