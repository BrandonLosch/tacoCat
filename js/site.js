let dc = function(id){
    return document.getElementById(id);
}

//called on btn press
function getValue(){

    //store user string + removes special characters & spaces
    let userString = dc("userString").value.toLowerCase().replace(/[^a-z0-9]/gi,'');
    
    //call function to reverse user string
    let reversedString = `${flipString(userString)}`

    //check if reversedString is the same as userString
    //if the string is the same forwards as backwards return true,
    if (userString == reversedString) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    } 
    
    //display results
    displayMessage(isPalindrome, reversedString);
}

function flipString(userString){
    //create a new array to store new reversed string in
    let reversedString = [];

    //loop through userstring and create new array
    for (let index = userString.length - 1; index >= 0; index--) {
        reversedString += userString[index];
    }
    return reversedString;
}

function displayMessage(isPalindrome, reversedString){
    if (isPalindrome) {
        dc("alert").classList.remove("invisible", "alert-danger");
        dc("alert").classList.add("alert-success");
        dc("msg").innerHTML = `Your phrase reversed is: ${reversedString}`;
        dc("alert-heading").innerHTML = "Well Done! You entered a palindrome!";
    } else {
        dc("alert").classList.remove("invisible", "alert-success");
        dc("alert").classList.add("alert-danger");
        dc("alert-heading").innerHTML = "Please Try Again.";
        dc("msg").innerHTML = `Your phrase reversed is: ${reversedString}`;
    }
}