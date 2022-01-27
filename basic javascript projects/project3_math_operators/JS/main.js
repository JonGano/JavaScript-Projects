


function Add() {
    var addition= 3+5                                             //addition opp
    document.getElementById("sub").innerHTML = addition;
}

function sub_fu() {
    var s = 5-3                                                  //subtraction opp
    document.getElementById("math").innerHTML = s;
}
function div_fu() {                                              //division opp
    var div= 43 / 7
    document.getElementById("fraction").innerHTML = div;
}

function mult() {                                               //multiplication opp
    var times= 5 * 6;
    document.getElementById("M").innerHTML = "5 * 6 =" + times;
}

function multdiv() {  // returns an answer from two different equations within a string
    var math= 5*6; var fract= 43 / 7; var l= `${math} and ${fract}`//included answers to two math equations in one display 
    document.getElementById("divmult").innerHTML = l;
}

function multop() {    //multiple operations in the same function
    var opps= ((3*7) + 26 - 12)/4
    document.getElementById("mopps").innerHTML = opps; 
}

function mod() {  //returns the remainder of a division equation for the answer
    var modu= 13%4
    document.getElementById("modulus").innerHTML = modu;
} 

function negopp() {  //reverses a numbers value
    var neg= 25
    document.getElementById("nopp").innerHTML = -neg;
}

var x=10;  //use of ++ increment adds one
x++;
document.write(x);
document.write("<br>") //line break for spacing
var y=10; //use of --decrement minus one
y--;
document.write(y);
document.write("<br>") //line break for spacing
window.alert(Math.random() * 100); //returns a random number between 1 and 100 in an alert pop up
document.write("<br>") 
