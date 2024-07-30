/**
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 * **/


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3


var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) { // i es igual al total a usar en nums2
        nums1[m + i] = nums2[i] // numeros a usar en nums1 = m + indice n que equivale al array nums2 [2,5,6] nums1 = (m + n)
    }
    nums1.sort((a, b) => a - b) // todo se ordena en nums1.  menor a mayor
}

merge(nums1, m, nums2, n)
console.log(nums1)