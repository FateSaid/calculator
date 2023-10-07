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
display.textContent = '23 + 1 = 24';



const nine = document.querySelector('#nine');
nine.addEventListener('click', function(){
    let nineNumber = 9;
    display.textContent = `${nineNumber}`;
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', function(){
    let eightNumber = 8;
    display.textContent = `${eightNumber}`;
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', function(){
    let sevenNumber = 7;
    display.textContent = `${sevenNumber}`;
});

const six = document.querySelector('#six');
six.addEventListener('click', function(){
    let sixNumber = 6;
    display.textContent = `${sixNumber}`;
});

const five = document.querySelector('#five');
five.addEventListener('click', function(){
    let fiveNumber = 5;
    display.textContent = `${fiveNumber}`;
});

const four = document.querySelector('#four');
four.addEventListener('click', function(){
    let fourNumber = 4;
    display.textContent = `${fourNumber}`;
});

const three = document.querySelector('#three');
three.addEventListener('click', function(){
    let threeNumber = 3;
    display.textContent = `${threeNumber}`;
});

const two = document.querySelector('#two');
two.addEventListener('click', function(){
    let twoNumber = 2;
    display.textContent = `${twoNumber}`;
});

const one = document.querySelector('#one');
one.addEventListener('click', function(){
    let oneNumber = 1;
    display.textContent = `${oneNumber}`;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', function(){
    display.textContent = 0;
})