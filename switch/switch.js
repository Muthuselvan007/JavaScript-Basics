let result;

const operator = prompt('Enter your operator ( either +  , - , * , / ): ');

const number1 = (prompt( 'Enter first number: '));
const number2 = (prompt( 'Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        

    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        

    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        

    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        
}