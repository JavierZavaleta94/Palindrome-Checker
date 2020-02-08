/*
A function that tests a user's input and returns either TRUE or FALSE whether the input is a PALINDROME or a message if
the user only input ONE letter.
 */
function palindrome(){
// a list of the variables used in the function
  var str = document.getElementById("input").value;
  var answer;
  var str = str.toLowerCase();
  const palidromeCheck = /[a-z\d]/g;
  var palidromeMatch = str.match(palidromeCheck);
  var palidromeLength = palidromeMatch.length;

// test whether the users input is only one letter or not
  if (str.length === 1) {
    answer = "Fail! You need more than one character! :( "
    $(document).ready(function() {
      $("#output").css("color", "yellow");
    });
  }
  else {
    // loop that loops around the total length of input divided by half and checks if its match using symmetry
    for (var i = 0, len = palidromeMatch.length - 1; i < len / 2; i++) {
      //checks if the the first and last letter don't match to return false
      if (palidromeMatch[i] !== palidromeMatch[len - i]) {
        answer = false;
        $(document).ready(function() {
          $("#output").css("color", "red");
        });
      }
    }
    //if the answer doesnt equate to false after going through the loop than it automatically takes the value of true
    answer = true;
    $(document).ready(function() {
      $("#output").css("color", "springgreen");
    });
  }
    document.getElementById("output").innerHTML = answer;
  }
