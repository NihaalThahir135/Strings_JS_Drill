// ==== String Problem #5 ====
// Given an array of strings ["the", "quick", "brown", "fox"], convert it into a string "the quick brown fox."
// If the array is empty, return an empty string.
let {string5} = require('../string5');
let stringList=["the", "quick", "brown", "fox"];
const result =string5(stringList);
if(result==""){
    console.log("Empty String");
}
else{
    console.log(result);
}