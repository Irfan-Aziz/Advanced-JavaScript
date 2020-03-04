const nums=[1,2,3,4,5,6];
const nums2=[7,8,9,0,11,12,1,3];
const part=nums.slice(2,4);

console.log(part);
console.log(nums);
const removed=nums.splice(2,4);
console.log(removed);
console.log(nums);
const removed2=nums2.splice(2,4, 45,56,67);
console.log(removed2);
console.log(nums2);
const together=nums2.join("");
console.log(together);
const together2=nums2.join(" ");
console.log(together2);