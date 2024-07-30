
arr1 = [1, 0, 2, 3, 0, 4, 5, 0]
arr2 = [1, 2, 3]
/*
var duplicateZeros = function (arr) {
    const plusZero = arr.flatMap(nums => nums === 0 ? [0, 0] : [nums]);
    return plusZero.slice(0, arr.length);
}
>>>>>>>>>>>>>>>> no funciona en leetcode.
*/

var duplicateZeros = function (arr) {
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            newArr.push(0, 0)
        } else {
            newArr.push(arr[i])
        }}
        while(newArr.length > arr.length){
            newArr.pop()
        }
        for(let i = 0; i < arr.length; i++){
            arr[i] = newArr[i]
        }
        return arr
}

console.log(duplicateZeros(arr1))
console.log(duplicateZeros(arr2))

