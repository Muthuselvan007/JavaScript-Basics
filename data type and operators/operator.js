let j = 5;
let s = 2;

// Addition
console.log('j + s = ', j + s);
// Subtraction
console.log('j - s = ', j - s);
// Multiplication
console.log('j * s = ', j * s);
// Division
console.log('j / s = ', j / s);
// Remainder
console.log('j % s = ', j % s);
// Increment
console.log('++j = ', ++j);
console.log('j++ = ', j++);
console.log('j = ', j);
// Decrement
console.log('--j = ', --j);
console.log('j-- = ', j--);
console.log('j = ', j);
// Exponentiation
console.log('j **s =', j ** s);
  
// Comparison operator

const boys = 10 , girls = 7;
console.log(boys >  girls);
// equal to
console.log(2 == 2); 
console.log(2 == '2'); 
// not equal to
console.log(3 != 2); 
console.log('sound' != 'Sound'); 
// strict equal to
console.log(2 === 2); 
console.log(2 === '2'); 
// strict not equal to
console.log(2 !== '2'); 
console.log(2 !== 2); 

// logical operators

const x = 5
const y = 3;
(x < 7) && (y < 10); 
// AND
console.log(20 && true);
console.log(null && true);
console.log(false && true);
//OR
console.log(7 || 8  ); 
//NOT
console.log(!1);

//Ternary operator
let marks = prompt('Enter your mark')
//let result = (marks >= 50)?'Pass':(marks < 50)? 'fail':''
//console.log(`Finally the exam result is ${result}`);

let bricks = prompt('enter cost of bricks')
 let buy = (bricks < 11)?'worth to buy':''
 console.log(buy);