/*

Issue #284 of rendezvous with cassidoo

Interview question of the week

You are given a list of positive integers which represents some range of integers which has been truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and print it. If the consecutive values differ by exactly two, then insert the missing value.

Examples:
> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"

*/

// Solution starts here

const arrOne = [1, 2, 3, 4, 20, 21, 22, 23]
const arrTwo = [1, 2, 3, 5, 6]
const arrThree = [1, 3, 20, 27]

function missingBits(arr) {
  let newArr = []

  arr.forEach((number, index) => {
    newArr.push(number)
    if (arr[index + 1] - arr[index] === 2) {
      newArr.push(number + 1)
    } else if (arr[index + 1] - arr[index] > 1) {
      newArr.push('...')
    }
  })

  return `[${newArr.toString()}]`
}

console.log(missingBits(arrOne)) // Output: [1,2,3,4,...,20,21,22,23]
console.log(missingBits(arrTwo)) // Output: [1,2,3,4,5,6]
console.log(missingBits(arrThree)) // Output: [1,2,3,...,20,...,27]
