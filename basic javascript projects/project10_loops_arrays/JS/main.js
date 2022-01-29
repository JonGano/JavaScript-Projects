function Call_Loop() {  //while loop that displays a count to 25
    var x = 1;            //it's pretty cool
    var Digit = "";  
    while (x < 26) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("loop").innerHTML = Digit;
}

function strLngth() {      //.length function to show how many characters there are in the y variable
    var x = "Pneumonoultramicroscopicsilicovolcanoconiosis";
    var y = x.length;
    document.getElementById("id1").innerHTML = y;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var content = "";       //for loop with array. the Y variable acts as
function for_Loop() {   //the counter and assigner of the next element in the array to be displayed
    for (Y= 0; Y < Instruments.length; Y++) {
        content += Instruments[Y] + "<br>";
    }
    document.getElementById("id2").innerHTML = content;
}

function array_Function() {  //made an array that displays an array element combined with a string
    var animalPics = [];
    animalPics[0] = "sleeping";
    animalPics[1] = "eating";
    animalPics[2] = "walking";
    document.getElementById("array").innerHTML = "in this picture the animal is " +
        animalPics[2] + ".";
}
function constant_Function() {   //Made an object using const keyword
const tv = {brand:"Panasonic", size:'52"', HD:"720"};
tv.HD = "1080";
tv.size = '65"';
document.getElementById("constant").innerHTML = "Ben's new TV is a " + tv.size
    + "<br>" + tv.brand + " with " + tv.HD + " High Definition.";
}
    document.write("<br>");
    var x = 10;         //let keyword only changes the x variable when it is inside the brackets
    document.write(x);        //displays 10
    document.write("<br>");           //  2
    {let x = 2;                       // 10
    document.write(x);
    }
    document.write("<br>");
    document.write(x);
    document.write("<br>");


document.getElementById("id3").innerHTML = JonsFunction("Gano");
                                        //utilizes the return statement
function JonsFunction(name) {
  return "Jon " + name;
}

let dog = {
    breed: "GermanShepherd/GreatPyranese",           //created dog object and utilized the return, let and this keywords
    age: "2",                                        // used a function to display a string with dog object properties
    traits: "playful/disobedient",
    description: function() {
        return this.age + " yr old " + this.breed + " Is " + this.traits + " free to good home! 13 yr old stepdaughter and $500 included.";
    }
};
document.getElementById("id4").innerHTML = dog.description();


function while_loop() {    //utilize a break statement in a while loop
    var v = 5;
    var content = "";
    while (v < 11) {
        content += v + "<br>";
        v++;
        if (v === 7)break;
    }
    document.getElementById("id5").innerHTML = content;
}

function continueLoop() {
    var x = 1;                     //utilized a continue statement in a while loop
    var content = "";
    while (x < 20) {
        x++;
        if (x === 10)continue;
        content += x + "<br>";

    }
    document.getElementById("id6").innerHTML = content;
}
