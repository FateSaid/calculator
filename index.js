function add(a,b){
    return total = Number(a)+ Number(b);
}

function sub(a, b){
    return total = Number(a) - Number(b);
}

function multiply(n){
    return total*=n;
}

function divide(n){
    return total/=n;
}

function operate(){
    return operation(secondNumber, firstNumber);
}





const display = document.querySelector('.display');



let operation;
let equation = [];
let total = 0;
let firstNumber = [];
let secondNumber = [];
let operative;

const nine = document.querySelector('#nine');
nine.addEventListener('click', function(){
        
        firstNumber.push('9');
        result.textContent = `${firstNumber.join('')}`;

    
    
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', function(){
    firstNumber.push('8');
    result.textContent = `${firstNumber.join('')}`;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function(){
    firstNumber.push('7');
    result.textContent = `${firstNumber.join('')}`;
});

const six = document.querySelector('#six');
six.addEventListener('click', function(){
    firstNumber.push('6');
    result.textContent = `${firstNumber.join('')}`;
});

const five = document.querySelector('#five');
five.addEventListener('click', function(){
    firstNumber.push('5');
    result.textContent = `${firstNumber.join('')}`;
});

const four = document.querySelector('#four');
four.addEventListener('click', function(){
    firstNumber.push('4');
    result.textContent = `${firstNumber.join('')}`;
});

const three = document.querySelector('#three');
three.addEventListener('click', function(){
    firstNumber.push('3');
    result.textContent = `${firstNumber.join('')}`;
});

const two = document.querySelector('#two');
two.addEventListener('click', function(){
    firstNumber.push('2');
    result.textContent = `${firstNumber.join('')}`;
});

const one = document.querySelector('#one');
one.addEventListener('click', function(){
    firstNumber.push(1);
    result.textContent = `${firstNumber.join('')}`;
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', function(){
    firstNumber.push('0');
    result.textContent = `${firstNumber.join('')}`;
})

const division = document.querySelector('#division');
division.addEventListener('click', function(){
    result.textContent = division.textContent;
    operation = divide;
});

const addition = document.querySelector('#plus');
addition.addEventListener('click', function(){
    secondNumber = firstNumber;
    firstNumber = [];
    result.textContent = addition.textContent;
    operation = add;
    operative = '+';
   
});

const subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click', function(){
    secondNumber = firstNumber;
    firstNumber = [];
    result.textContent = subtraction.textContent;
    operation = sub;
    operative = '-';
});

const multiplication = document.querySelector('#x');
multiplication.addEventListener('click', function(){
    result.textContent = multiplication.textContent;
    operation = multiply;
});



const equal = document.querySelector('#equal');
equal.addEventListener('click', function(){
    operate(firstNumber, secondNumber);
    result.textContent = total;
    formula.textContent = `${secondNumber} ${operative} ${firstNumber}`;


})


const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    firstNumber = [];
    seconNumber = [];
    result.textContent = 0;
});

const result = display.querySelector('.result');


const formula = document.querySelector('.formula');
