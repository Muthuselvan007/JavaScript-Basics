
function say(hey) {
    console.log(hey);
}

let result = say('type');
console.log('Result:',say);

//Accessing object inside the function(arguments objects)
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(add(1, 2)); 
console.log(add(1, 2, 3, 4, 5)); 

//Function Hoisting
Work(); 

function Work(){
    console.log('yep this is working');
}

function stop(){
    console.log('This is not Working');
}

stop();