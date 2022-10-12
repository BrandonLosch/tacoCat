
function getValue() {

    //hides the results alert
    document.getElementById("alert").classList.add('invisible');

    //get the value
    let userString = document.getElementById("userString").value;

    //Reverse the user input
    let revString = reverseString(userString);

    //display the user input
    displayString(revString); 
    
}


//Reverse the string
function reverseString(userString) {
    let usrArray = userString.split('');
    let revArray = usrArray.reverse();
    let revString = revArray.join('');

    return revString;

}

//Display the string
function displayString (revString) {
    document.getElementById('msg').innerHTML = `Your String Reversed is:<strong>${revString}</strong>`;
    document.getElementById("alert").classList.remove('invisible');
}

