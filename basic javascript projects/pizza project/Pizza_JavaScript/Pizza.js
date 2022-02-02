function getReceipt() {
//variable gathers a string of info as it works it's way down the code 
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {//loop counts through array adding 1 to variable i each time
        if (sizeArray[i].checked) { // if a blox is checked it passes the variable value to selectedSize 
            var selectedSize = sizeArray[i].value;//variable initialized with the size value
            text1 = text1+ selectedSize +"<br>";
        } //text1 variable given the addition of size value to it's string = You ordered "size"

    }//These conditional statements use selectedSize value to assign a price value to variable size total.
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Party Monster") {
        sizeTotal = 30;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getTopping(runningTotal,text1);
};

//function adds the topping price
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {//does the same thing as the loop using i above
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);//assigns/adds a value from the j for loop to the selectedToppings array 
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value+"<br>";//Text1 string variable grows yet again
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) { //\/accounts\/ for the 1 free topping
        toppingTotal = (toppingCount - 1);
    } else {          //adds the amount of toppings which fortunately is proportionate to the cost per topping
        toppingTotal = 0; //in case they just wanted a plain cheese pizza
    }
    runningTotal = (runningTotal + toppingTotal); //adds number of toppings to the running total.
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00"); //concatenates values and sends them out into the world via .innerHTML
    document.getElementById("showText").innerHTML =text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
};