console.log("Ankur test")
function dummy () {
  return 1;
}
/**
 * Reverse an array
 * 
 * @example
 * 
 * reverse([1,2,3]) returns [3,2,1]
 * 
 * @param {array} array
 * @returns {array}
 */

function reverse (array) {
  const newArr = [];
  for (i = array.length -1 ; i >= 0 ; i--){
    newArr.push(array[i])
  }
  console.log(newArr)
  return [newArr];
}
// reverse([4, 3, 2])

/**
 * Reverse a string
 * 
 * @example
 * 
 * stringReverse('hello') returns 'olleh'
 * 
 * @param {string} text
 * @returns {string}
 * 
 */
function stringReverse (text) {
   let revString = '';
    text.split('').forEach((char) => {
        revString = char + revString
    });
    console.log(revString);
        return revString;
}
stringReverse("hello");


/**
 * return a fixed length fibonacci list
 * 
 * @example
 * 
 * fibonacci(5) returns [1,1,2,3,5]
 * 
 * @param {number} length
 * @returns {array}
 */
function fibonacci (length) {
  a= 0;
  b=0;
  c = 1;
  newArr = []
  for (i =0; i< length; i++){
    
    a = b
    b = c
    c = a + b 
    newArr.push(c)
  }
  console.log(newArr);
  return [newArr];
}
fibonacci(5);
/**
 * return the biggest number in the array
 * 
 * @example
 * 
 * biggest([1,3,5,7,9]) returns 9
 * 
 * @param {array} array
 * @returns {number}
 */
function biggest (array) {
  let bigg = 0;
  for (i = 0 ; i < array.length; i++){
      if (bigg >= array[i] ){
        bigg = bigg
      }
      else {
        bigg = array[i]
      }
  }
  console.log(bigg);
  return bigg;
}
biggest([2, 5, 4])

/**
 * Creates an array of numbers progressing from 
 * start up to, but not including, end
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * range(0,4) returns [0,1,2,3]
 * 
 * @param {number} start 
 * @param {number} end 
 * @returns {array}
 */
function range (start, end) {
  newArr = []
  // time is running out
  console.log(newArr);
  return [];
}
range(0, 3)

/**
 * Recursively flattens array.
 * 
 * YOU HAVE TO IMPLEMENT YOUR OWN ALGORITHM HERE!!!
 * DON'T USE ANY 3RD PARTY LIBRARIES.
 * 
 * @example
 * 
 * flatten([1,[2,[3,4],[5,[6]]]]) returns [1,2,3,4,5,6]
 * 
 * @param {array} array
 * @returns {array}
 */
function flatten (array) {
  array.flat();
  console.log(array);
  return array;
}
flatten([1,[2,[3,4],[5,[6]]]])

module.exports = {
  dummy,
  fibonacci,
  reverse,
  flatten,
  biggest,
  flatten,
  stringReverse,
  range
};
