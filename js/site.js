function helloWorld() {
    alert("Hello World!");

}

//get the string from the page
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}
//reverse the string
function reverseString(userString) {
    let revString = [];
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];

    }
    return revString;

}
//display the reversed string
function displayString(revString) {
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}