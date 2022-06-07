// ==== String Problem #3 ====
// Given a string in the format of "10/1/2021", print the month in which the date is present in.
function string3(inputDate){
    let month=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let string1=inputDate.split('/');
    return(month[string1[1] - 1]);
}
module.exports={string3};