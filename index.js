function add(a,b){
    return Number(a)+ Number(b);
}

function sub(a, b){
    return Number(a) - Number(b);
}

function multiply(a, b){
    return Number(a) * Number(b);
}

function divide(a,b){
    return Number(a)/Number(b);
}

function operate(){
    return operation(total, inputNumber);
}






const display = document.querySelector('.display');



let operation;
let equation = [];
let total = 0;
let inputNumber = [];
let secondNumber = [];
let operative;

const nine = document.querySelector('#nine');
nine.addEventListener('click', function(){
        
        inputNumber+= 9;
        result.textContent = inputNumber;

    
    
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', function(){
    inputNumber+= 8;
    result.textContent = `${inputNumber}`;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function(){
    inputNumber += 7;
    result.textContent = `${inputNumber}`;
});

const six = document.querySelector('#six');
six.addEventListener('click', function(){
    inputNumber += 6;
    result.textContent = `${inputNumber}`;
});

const five = document.querySelector('#five');
five.addEventListener('click', function(){
    inputNumber+= 5;
    result.textContent = `${inputNumber}`;
});

const four = document.querySelector('#four');
four.addEventListener('click', function(){
    inputNumber += 4;
    result.textContent = `${inputNumber}`;
});

const three = document.querySelector('#three');
three.addEventListener('click', function(){
    inputNumber+= 3;
    result.textContent = `${inputNumber}`;
});

const two = document.querySelector('#two');
two.addEventListener('click', function(){
    inputNumber += 2;
    result.textContent = `${inputNumber}`;
});

const one = document.querySelector('#one');
one.addEventListener('click', function(){
    inputNumber+= 1;
    result.textContent = `${inputNumber}`;
    operate();
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', function(){
    inputNumber+= 0;
    result.textContent = `${inputNumber}`;
})

const division = document.querySelector('#division');
division.addEventListener('click', function(){
    total -= Number(inputNumber);
    inputNumber = [];
    result.textContent = division.textContent;
    operation = divide;
    operative = '/';
});

const addition = document.querySelector('#plus');
addition.addEventListener('click', function(){
    if(total > 0){
        operate();
    }
    total += Number(inputNumber);
    
    inputNumber = [];
    result.textContent = addition.textContent;
    operation = add;
    operative = '+';
    let hope = formula.textContent;
    formula.textContent = operate(hope, total);
    
    
    
    
    
   
});

const subtraction = document.querySelector('#subtraction');
subtraction.addEventListener('click', function(){
    if(total > 0){
        operate();
    }
    if(total > inputNumber){
        total = total - inputNumber;
    } else if(total < inputNumber){
        total = inputNumber - total;
    }
    
    inputNumber = [];
    result.textContent = subtraction.textContent;
    operation = sub;
    operative = '-';
    let hope = formula.textContent;
    formula.textContent = operate(hope, total);
    
    
});

const multiplication = document.querySelector('#x');
multiplication.addEventListener('click', function(){
    total*= inputNumber;
    inputNumber = [];
    result.textContent = multiplication.textContent;
    operation = multiply;
    operative = 'x';
    formula.textContent = multiply(total, inputNumber);
    
});



const equal = document.querySelector('#equal');
equal.addEventListener('click', function(){
    formula.textContent = operate();
    result.textContent = '';

    


})


const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    inputNumber = [];
    total = [];  
    formula.textContent = '';
    result.textContent = 0;
});

const result = display.querySelector('.result');


const formula = document.querySelector('.formula');
