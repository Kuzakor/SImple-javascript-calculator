// Code fully made by Kuzakor
//declaring necessery variables
let num = "";
let eq = [];
//adds number and operation to eq array
function assign(b){
    //deletes 0 if its the first digit and number is longer than 1 digit
    if (num[0] == 0 && num.length > 1){
        num.slice(1)
    }
    if (num !== ""){ eq.push(num); }
    if (b !== "="){ eq.push(b); }
    num = "";
}
function count(){
    let result;
    //countes each part of the array until its to small to do so
    while (eq.length > 2){
        //do diffrent operations based on the signs.
        switch (eq[1]){
            case "-": result = eq[0] - eq[2]; break;
            case "+": result = +eq[0] + +eq[2]; break;
            case "*": result = eq[0] * eq[2]; break;
            case "/": result = eq[0] / eq[2]; break;
            case "^": result = Math.pow(eq[0], eq[2]); break;      
        }
        //replaces first 3 elements of array with result
        for (let i = 0; i < 3; i++) {eq.shift();} 
        eq.unshift(result);
    } 
}
//adds new digits to the number
function add(c) {
    num = num + c;
    document.getElementById("demo").innerHTML = num;
}
//when new math opearation is clicked, execute assign(), count() 
//write the result on the screen
function operation(a) {
    assign(a);
    count();
    document.getElementById("demo").innerHTML = eq[0];
}
//clears when C clicked
function cle(){ 
    num = "";
    eq = [];
    document.getElementById("demo").innerHTML = "";
}
//adds or removes minus in front of the number
function minus(){
    let numrev;
    if (num[0] !== "-"){
        numrev = "-" + num;
    }else{
        numrev = num.slice(1);
    }
    num = numrev;
    document.getElementById("demo").innerHTML = num;
}
//calculates square root of the number
function square_root(){
    num = Math.sqrt(num)
    document.getElementById("demo").innerHTML = num;
}
