
function VotingAge() {   //ternary function that takes input from the browser
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 17) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote";
}
/*
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}*/

function Person(First, Last, Age, Residence) {  //constructor function that utilizes the words this and new
  this.Person_FirstName = First;
  this.Person_LastName = Last;
  this.Person_Age = Age;
  this.Person_City = Residence;
}
var Jon = new Person("Jon", "Gano", 37, "Louisville"); //displays the result of a constructor function
function People() {
    document.getElementById("ThisId").innerHTML = Jon.Person_FirstName + " lives in the city of " + Jon.Person_City + ".";
}




function MinusOne() {                     //nested funtion that subtracts 1 from the variable starting point
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_Point = 11;
        function minus() {Starting_Point -= 1;}
        minus();
        return Starting_Point;
    }
}