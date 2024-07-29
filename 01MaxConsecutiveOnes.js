/**
 * @param {number[]} nums
 * @return {number}
 */
let array1 = [1,1,0,1,1,1]
let array2 = [1,0,0,1,1,1,1,0,1,1,0,0]
let array3 = [0]
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let contador = 0
    for (let i = 0; i < nums.length; i++){
       if(nums[i] == 1){
        contador++
        if(contador > max){
        max = contador
    }
       }
       else if(nums[i] != 1){
        contador = 0
       }
        
    }
    return max
};
console.log(findMaxConsecutiveOnes(array1))
console.log(findMaxConsecutiveOnes(array2))
console.log(findMaxConsecutiveOnes(array3))