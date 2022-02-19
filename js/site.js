function getValue(){
    document.getElementById("alert").classList.add("invisible");

    //get user string for the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkPalindrome(userString);

    //display message
     displayMessage(returnObj);
    

}


function checkPalindrome(userString){

    // convert string to lower case
    userString = userString.toLowerCase();

    //get rid of spaces and special characters using regex
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    //define revString as an array
    let revString = [];
    //define returnObj as an object
    let returnObj = {};

    //using for loop to reverse string
    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
        
    }

    if (userString == revString){
        returnObj.msg = "Well Done! You've entered a palindrome!"
    }
    else{
        returnObj.msg = "Sorry, you did not enter a palindrome."
    }

    returnObj.reversed = revString;

    return returnObj;

}

function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("message").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}