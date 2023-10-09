function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,operator, b){
    return operator(a,b);
}

const display = document.querySelector('.display');


let firstNumber = 0;
let secondNumber = 0;
let operation;
let equation = [];

const nine = document.querySelector('#nine');
nine.addEventListener('click', function(){
    let nineNumber = 9;
    display.textContent = `${nineNumber}`;
    if(firstNumber == 0){
        firstNumber = nineNumber;

    } else if(secondNumber == 0){
        secondNumber = nineNumber;
        
    }
    equation.push(nineNumber);
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', function(){
    let eightNumber = 8;
    display.textContent = `${eightNumber}`;
    if(firstNumber == 0){
        firstNumber = eightNumber;
    } else if(secondNumber == 0){
        secondNumber = eightNumber;
    }
    equation.push(eightNumber);
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function(){
    let sevenNumber = 7;
    display.textContent = `${sevenNumber}`;
    if(firstNumber == 0){
        firstNumber = sevenNumber;
    } else if(secondNumber == 0){
        secondNumber = sevenNumber;
    }
});

const six = document.querySelector('#six');
six.addEventListener('click', function(){
    let sixNumber = 6;
    display.textContent = `${sixNumber}`;
    if(firstNumber == 0){
        firstNumber = sixNumber;
    } else if(secondNumber == 0){
        secondNumber = sixNumber;
    }
});

const five = document.querySelector('#five');
five.addEventListener('click', function(){
    let fiveNumber = 5;
    display.textContent = `${fiveNumber}`;
    if(firstNumber == 0){
        firstNumber = fiveNumber;
    } else if(secondNumber == 0){
        secondNumber = fiveNumber;
    }
});

const four = document.querySelector('#four');
four.addEventListener('click', function(){
    let fourNumber = 4;
    display.textContent = `${fourNumber}`;
    if(firstNumber == 0){
        firstNumber = fourNumber;
    } else if(secondNumber == 0){
        secondNumber = fourNumber;
    }
});

const three = document.querySelector('#three');
three.addEventListener('click', function(){
    let threeNumber = 3;
    display.textContent = `${threeNumber}`;
    if(firstNumber == 0){
        firstNumber = threeNumber;
    } else if(secondNumber == 0){
        secondNumber = threeNumber;
    }
});

const two = document.querySelector('#two');
two.addEventListener('click', function(){
    let twoNumber = 2;
    display.textContent = `${twoNumber}`;
    if(firstNumber == 0){
        firstNumber = twoNumber;
    } else if(secondNumber == 0){
        secondNumber = twoNumber;
    }
});

const one = document.querySelector('#one');
one.addEventListener('click', function(){
    let oneNumber = 1;
    display.textContent = one.textContent;
    if(firstNumber == 0){
        firstNumber = oneNumber;
    } else if(secondNumber == 0){
        secondNumber = oneNumber;
    }
});

const division = document.querySelector('#division');
division.addEventListener('click', function(){
    
    display.textContent = division.textContent;
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', function(){
    display.textContent = operate(firstNumber, operation, secondNumber);
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    display.textContent = 0;
})