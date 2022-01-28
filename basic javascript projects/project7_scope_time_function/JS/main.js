
var x = 10;                 //global variable assigned

function global() {               //function using a global and local variable
    var y = 5;
    document.getElementById("local").innerHTML = y + x;
}

function local() {             //function using a global and local variable that is outside of the function
   // console.log (y + x);  //console.log for debugging the problem
   document.getElementById("global").innerHTML = "You can't use local variables outside your own function";
}

function Time() {                  // if else statement using Date function
    if (new Date().getHours() < 12) {
        document.getElementById("timeid").innerHTML = "Good morning!";
    }
    else {
    document.getElementById("timeid").innerHTML = "Did you have a good morning?";
}
}

function ageFunction() {         //if else statement that uses user input
    var age = document.getElementById("ageid").value;
    if (age < 35) {
        document.getElementById("age2id").innerHTML = "stand on your head";
    }
    else {
        document.getElementById("age2id").innerHTML = "You probably shouldn't try to stand on your head";
    }
}

function Time_Function() {         //if, else if, else statement 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time < 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon";
    }
    else {
        Reply = "it is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}