/**
 * Splits an array to n
 *
 * @param {array} arr Array to be split
 * @param {int} count Split the array to n arrays
 * @returns array
 */
export default function(arr, count=2) {
  if ( arr == undefined || !Array.isArray(arr) ) {
    throw new Error('Provided argument is not an array!');
  }

  var result = [];

  // Create the array in arrays
  {
    for(let i = 0; i < count; i++) {
      result.push([]);
    }
  }

  //
  {
    for(let i = 0; i < arr.length; i++) {
      result[i % count].push(arr[i]);
    }
  }

  return result;
}