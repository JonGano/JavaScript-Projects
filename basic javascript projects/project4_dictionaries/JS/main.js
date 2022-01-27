function Car_Dictionary() {  //KVP Dictionary
    var Car = {Make: "Buick",
        Model: "Century",
        Color: "White",   // color is stated here
        Year: "2002",
        EngineSize: "V6"}
    delete Car.Color  //color is deleted here
    document.getElementById("Dictionary").innerHTML= Car.Color;
}                                //unable to display color here 