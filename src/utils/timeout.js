import {Promise} from 'es6-promise';

/**
 * A promisified `setTimeout`
 *
 * @example
 * import timeout from './timeout';
 * timeout(1000).then(function() { return x; })
 *
 * @see setTimeout
 * @see Promise (ES6)
 * @params {function} callback callback
 * @param {integer} throttle Number of seconds to delay the execution
 * @returns Promise
 */
export default function(throttle) {
  return new Promise( (resolve, reject) => {
    setTimeout(resolve, throttle);
  });
}
