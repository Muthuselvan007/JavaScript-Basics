//(Number) - toString(),toExponential(),toPrecision(),isInteger() method
let Pen = 3
console.log(Pen)
console.log(Pen.toString())
console.log(Pen.toExponential(2))
console.log(Pen.toPrecision(3))

let paper = 2 / 0;
console.log(paper); // infiniry
let paper1 = -2 / 0;
console.log(paper1); // -infinity
let paper2 = "ink" / 3;
console.log(paper2); //NaN

// String
const name1 = "Mithun";    
const name2 = 'Mohan';
const name3 = `Muthu`;
console.log(name1,name2,name3);

//BigInt
const BigInt = 906667890743578904306;
const result = BigInt + 1;
console.log(result);
console.log( 'this is a type of ' + typeof 2345n)
console.log('this is a type of '+ typeof 1234);

//undefined
let run
console.log(run);
let walk

console.log(walk);

// Null
const box = null
console.log(box);

//Boolean
let x = false;
let y =  Boolean(false);  // y is an object
console.log(x,y);
console.log('Boolean(0) is ' + Boolean(0));
console.log('Boolean("") is '	+ Boolean(""));
console.log('Boolean(0.5) is ' + Boolean(0.5));
console.log('Boolean(-1) is ' + Boolean(-1));
console.log("Boolean('true') is " + Boolean('true'));
console.log("Boolean('false') is " + Boolean('false'));
console.log('Boolean(1* 8 + 0.89) is '+ Boolean(1* 8 + 0.89));
console.log('Boolean(5<2) is ' + Boolean(5<2));

//Symbol
const value1 = Symbol('baba');
const value2 = Symbol('baba');
console.log(value1 === value2);
//creating a symbol
const A = Symbol()
console.log(typeof A )
const B = Symbol('baba')
console.log(B.description)

//Object
const Newhome ={
     Engineer : 'excellent',
     Mason : 'Good worker',
     bricks : 'Strong',
     cement : 'good',
     finally : 'The Construction was Done'
}
console.log(Newhome.finally,'with '+Newhome.cement,'cement and '
+Newhome.bricks,'bricks by the help of '
+Newhome.Engineer,'Engineer');

  




