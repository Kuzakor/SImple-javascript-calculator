// Code fully made by Kuzakor
//declaring necessery variables
let num = "";
let eq = [];
//adds number and operation to eq array
function assign(b){
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
        for (let i = 0; i < 3; i++) { eq.shift(); } 
        eq.unshift(result);
    } 
}
//adds new digits to the number, doesn't add 0 if its the first digit
function add(c) {
    if (c == 0){
        if (num !== ""){ num = num +c; }
    }else{ num = num + c; }
    document.getElementById("demo").innerHTML = num;
}
//when new math opearation is clicked, execute assign(), count() 
//and write the result on the screen
function operation(a) {
    assign(a);
    count();
    document.getElementById("demo").innerHTML = eq[0];
}