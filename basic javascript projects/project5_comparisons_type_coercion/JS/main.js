document.write(typeof "words");    // utilizes typeof to find and display data type 
document.write("<br>")
document.write(typeof 100);          // utilizes typeof to find and display data type 
document.write("<br>")
document.write("words" + 100);    // combines string and number data types

function Jons_Function() {                                  //displays NaN on browser page
    document.getElementById("test").innerHTML= 0/0;
}

function Jons_Function1() {                              //asserts variable is not a number
    document.getElementById("test1").innerHTML= isNaN('this is a string');
}

function Jons_Function2() {                            //asserts variable is a number
    document.getElementById("test2").innerHTML= isNaN(08);
}
document.write("<br>")///////////////line break
document.write(2e310);         //diplays infinity
document.write("<br>")
document.write(-2e310);           //displays -infinity
document.write("<br>")
document.write(10 < 2);          //boolean false
document.write("<br>")
document.write(5<10);           //boole true
document.write("<br>")
console.log(2+2);                //displays answer on console
console.log(10<5);              //displays answer on console
document.write(10==10);        //boole comparison equality true
document.write("<br>")
document.write(12==10);         // false
document.write("<br>")
y= "10";
x= 10;
document.write(y===x);     //compare value and data type false
document.write("<br>")
y= 10;
x= 10;
document.write(y===x);       //true
document.write("<br>")
y= 11;
x= 10;
document.write(y===x);        //false
document.write("<br>")
y= "string";
x= 10;
document.write(y===x);         //false
document.write("<br>")
document.write(10 < 11 && 11 > 5);              //boole using and(&&) both must be true or it's false. this is true
document.write("<br>")
document.write(10 > 3 && 3 < 2);                //false
document.write("<br>")
document.write(10 > 2 || 10 < 2);              // boole using or(||), one must be true to be rendered true. this is true
document.write("<br>")
document.write(10 > 11 || 10 < 1);            //false
document.write("<br>")

function notfunction() {
    document.getElementById("not").innerHTML= !(10 < 11);       //boole using dont(!), statment must be false to be rendered true.
}                                                                  //this displays as false beacause the statement is true

function isfunction() {
    document.getElementById("is").innerHTML= !(10 > 11);        //displays as true
}