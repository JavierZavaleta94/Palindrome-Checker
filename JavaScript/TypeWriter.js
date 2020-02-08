
//list of the global variables
var i = 0;
var txt = "Palindrome Checker that returns TRUE if the word or sentence that's spelled the same way both forward and backward, otherwise it return FALSE. This program ignored PUNCTUATION, CASE and SPACING and will remove all non-alphanumeric characters (punctuation, spaces and symbols) thus being treated as empty spaces lastly turning everything into the same case (lower or upper case). If the user only puts one letter the message '' Fail! You need more than one character! ' will be displayed signifying an error. Program implements HTML, CSS, JavaScript, JQuery, Bootstrap and Mobile version support (Media Query)."
var speed = 10;

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
