// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. 
// [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.
let input="111.139.161.143";
let {string2}=require('../string2');
let result=string2(input);
console.log(result);