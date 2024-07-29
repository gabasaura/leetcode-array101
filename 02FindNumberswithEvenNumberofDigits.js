
array1 = [12, 345, 2, 6, 7896] // nums param
array2 = [555, 901, 482, 1771]
var findNumbers = function (nums) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i].toString().length // How to compute the number of digits of a number ?
        if (n % 2 == 0)
            count++
    }
    return count
}

console.log(findNumbers(array1)) // nums = argumento (lo recibe a través de una función).
console.log(findNumbers(array2))