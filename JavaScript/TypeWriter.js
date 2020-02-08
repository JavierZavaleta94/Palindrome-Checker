
//list of the global variables
var i = 0;
var txt = "Return TRUE if the given string is a PALINDROME. Otherwise, return FALSE. A PALINDROME is a word or sentence that's spelled the same way both forward and backward, IGNORING SPACING, CASE, and SPACING. This program will remove all non-alphanumeric characters (punctuation, spaces and symbols) thus being treated as empty spaces and turn everything into the same case (lower or upper case) in order to check for PALINDROME. If the user only puts one letter the message ' Fail! You need more than one character! ' will be displayed signafying an error"
var speed = 20;

// typeWriter function that is used to create a typing effect for the instructions element
function typeWriter() {
  /*if condition in which it checks if counter is less than length, if it is than it will continue to output
  until it finishes
  */
  if (i < txt.length) {
    document.getElementById("instructions").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
