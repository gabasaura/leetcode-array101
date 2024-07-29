array1 = [-4, -1, 0, 3, 10]
array2 = [-7, -3, 2, 3, 11]

var sortedSquares = function (nums) {
    let newArray = []
    for (let i = 0; i < nums.length; i++) {
        newArray.push(nums[i] * nums[i])
        newArray.sort((a, b) => (a - b))

    /* 
    If a - b is negative, a comes before b.
    If a - b is zero, a and b are considered equal.
    If a - b is positive, a comes after b. 
    */

    }
    return newArray
}

console.log(sortedSquares(array1))
console.log(sortedSquares(array2))

// FUNCIONA, PERO NO PARA LEETCODE.
// OPCION B

