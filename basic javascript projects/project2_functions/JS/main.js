function aloha() {           //function with two string variables that display when aloha button is clicked
    var x= "Hello /"; var y=" Goodbye"
    document.getElementById("doublemeaning").innerHTML = x+y;
    
    }
    

function displayDate() {     //function that displays the time and date when an html button is clicked
    document.getElementById("date").innerHTML = Date();
  }

  function twostrings() {          //using the += to concatenate two strings in a function
    var x= "Hello /"
    x += " Goodbye"
    document.getElementById("concatenate").innerHTML = x;
    
    }
    