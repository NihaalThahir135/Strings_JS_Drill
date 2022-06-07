// ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}
function string4(inputName){
    let tempString='';
    let { first_name: firstName, middle_name: middleName, last_name: lastName } = inputName;
    if(!firstName || !lastName) {
        return '';//If there is no first name or second name,I return null as output.
    }
    if(middleName) {
        tempString=`${firstName} ${middleName} ${lastName}`;
    } 
    else {
        tempString=`${firstName} ${lastName}`;
    }
    let outString=tempString.split(' ');   
    for(let word in outString){
        outString[word]=outString[word].toLowerCase().split('');
        outString[word][0]=outString[word][0].toUpperCase();
        outString[word]=outString[word].join('');
    }
    return outString.join(' '); 
}
module.exports={string4};