import Compareator from './utils/Comparator';

/**
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @param {function(a,b )} [comparetorCallback]
 * @return {number[]}
 */
export default function linearSearch(array, seekElement, comparetorCallback) {
  const comparator = new Compareator(comparetorCallback);
  const foundIndices = [];
  array.forEach((element, index) => {
    if(comparator.equal(element, seekElement)) {
      foundIndices.push(index);
    };
  })
  return foundIndices;
}