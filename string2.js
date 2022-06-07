// ==== String Problem #2 ====
// Given an IP address - "111.139.161.143". Split it into its component parts 111, 139, 161, 143 and return it in an array in numeric values. 
// [111, 139, 161, 143].

// Support IPV4 addresses only. If there are other characters detected, return an empty array.

function string2(input){
    let array=input.split('.');
    let finalArray=[];
    let string;//Temporary variable
    for(let index=0;index<array.length;index++){
        string=array[index];
        if(!(isNaN(string))){
            finalArray.push(parseInt(string));
        }
        else{
            return [];
        }
    }
    return finalArray;
}
module.exports={string2};