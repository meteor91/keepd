/* eslint-disable */
// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     const m = Math.floor(((nums1.length + nums2.length - 1)) / 2);
//
//     let i = 0, j = 0;
//
//     while (m > (i+j)) {
//         if (nums1[i] < nums2[j] && i < nums1.length) {
//             i++
//         } else if (j < nums2.length){
//             j++
//         }
//     }
//
//     console.log(i, j)
//
//     let median = 0;
//
//     if ((nums1.length + nums2.length) % 2 === 0) {
//
//         if (nums1[i] < nums2[j] && i < nums1.length) {
//             median +=  nums1[i];
//             // if (i < nums1.length) {
//                 i+=1
//             // } else {
//             //     j+=1
//             // }
//         } else {
//             median +=  nums2[j];
//             j+=1
//
//             // if (j < nums2.length) {
//             //     j+=1
//             // } else {
//             //     i+=1
//             // }
//         }
//
//         if (nums1[i] < nums2[j] && i < nums1.length) {
//             median +=  nums1[i];
//             // if (i < nums1.length) {
//                 i+=1
//             // } else {
//             //     j+=1
//             // }
//         } else {
//             median +=  nums2[j];
//             j+=1
//
//             // if (j < nums2.length) {
//             //     j+=1
//             // } else {
//             //     i+=1
//             // }
//         }
//
//         // median +=  nums1[i] > nums2[j] ? nums2[j] : nums1[i];
//
//         return median / 2
//     } else {
//         return nums1[i] > nums2[j] ? nums2[j] : nums1[i];
//     }
// };
//
// findMedianSortedArrays([1, 3, 5], [2, 4])
//
// // m = 3
// //        i = 2
// // [1,    3,    5,    7]
// // [   2,    4,    6,
// //     j = 1
//
//
// // m = 3, 4
// //        i = 2
// // [1,    3,    5,    7,  ]
// // [   2,    4,    6,    8
// //     j = 1
//
// // m1 = 3
//
// // [1,2, 3,4, 5,6]
// //       2 3
//
// // [1, 2, 3, 4, 5, 6, 7]
// //           4
//
// // m = 2
// //     i=1
// // [1, 2       ]
// // [      3,  4]
// //        j=0

const nums = [-2,1,-3,4,-1,2,1,-5,4];
var maxSubArray = function(nums) {
    let max = -Infinity;
    let meh = 0;
    for (let i = 0; i < nums.length; i++) {
        meh += nums[i];

        if (meh > max) {
            max = meh;
        }
        if (meh < 0) {
            meh = 0;
        }
        console.log('meh', meh)
        console.log('max', max)
        console.log('------------------------------------')
    }
    return max;
};

console.log(maxSubArray(nums))