function conct() {                    //concatenated multiple string variables
    var a="This is part of";
    var b=" a sentence that started";
    var c=" variables ago.";
    var whole= a.concat(b,c);
    document.getElementById("id1").innerHTML = whole;
}

function slice_Function() {           //slices part of a string and displays it in the browser
    var st="Day Night Evening"
    var sl= st.slice(10, 17);
    document.getElementById("id2").innerHTML = sl;
}

function upper() {                   //converted string to uppercase using the touppercase method
    var x="can anyone hear me?";
    var y= x.toUpperCase();
    document.getElementById("id3").innerHTML = y;
}

function serch() {                  //utilizes the search() method to find position of the first match here it's 12
    var x = " the sky is blue";
    var y = x.search("blue");
    document.getElementById("id4").innerHTML = y;
}

function string() {      //.toString() returns the number as a string.
    var x= 627;                         
    document.getElementById("id5").innerHTML= x.toString(); 
}

function precision() {  //.toPrecision() shortens the number to 12.31
    var x= 12.3078125;
    document.getElementById("id6").innerHTML= x.toPrecision(4);
}

function Fix() {    //turns x into string and rounds to specified length
    var x= 28.3572
    document.getElementById("id7").innerHTML= x.toFixed(20);
}

function valof() {    //returns the primative form of a string
    var x= "This is gonna be primative in some indistinguishable way";
    document.getElementById("id8").innerHTML= x.valueOf();
}