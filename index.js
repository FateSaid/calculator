const allBtns = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const result = document.querySelector('.result');
const equation = document.querySelector('.equation');

window.addEventListener('keydown', function(e){
    equation.textContent += e.key.replace(/\D/g, '');
});


let array = [];
let operation;


allBtns.forEach(button => {
    button.addEventListener('click', function(e){
        
        let value = e.target.dataset.key;
        
        if(value == '.'){
            if(equation.textContent.includes('.')){
                return;
            }
        }
        
        equation.textContent += value.replace(/[d+=*/-]/g, '');
        if(value == 'd'){
            let screen = equation.textContent;
            equation.textContent = screen.slice(0, -1);
        }

        
        
        
        if(value == '+'){
            if(equation.textContent !== ''){
                push(equation.textContent); 
            }
            array.push('+');
            clear();

            if(array.length > 3){
                answerOnScreen();
                clearArray();
                push(result.textContent);
                array.push('+');
            }
        }

        if(value == '-'){
            if(equation.textContent !== ''){
                push(equation.textContent); 
            }
            array.push('-');
            clear();

            if(array.length > 3){
                answerOnScreen();
                clearArray();
                push(result.textContent);
                array.push('-');
            }
            
        }

        if(value == '*'){
            if(equation.textContent !== ''){
                push(equation.textContent); 
            }
            array.push('*');
            clear();

            if(array.length > 3){
                answerOnScreen();
                clearArray();
                push(result.textContent);
                array.push('*');
            }
            
        }

        if(value == '/'){
            if(equation.textContent !== ''){
                push(equation.textContent); 
            }
            array.push('/');
            clear();

            if(array.length > 3){
                answerOnScreen();
                clearArray();
                push(result.textContent);
                array.push('/');
            }
            
        }

        if(value == '='){
            if (equation.textContent == '' && result.textContent == ''){
                return;
            }
            push(equation.textContent);
            equation.textContent = '';
            answerOnScreen();
            if(result.textContent > 0){
                clearArray();
                push(result.textContent);
            }
        }

        if(value == 'AC'){
            clear();
            array = [];
        }
        
        if(result.textContent == 'Infinity'){
            return result.textContent = "Can't do that";
        }
        
    });
});

function push(e){
    return array.push(Number(e));
}

function add(a, b){
    return Number(a)+Number(b);
}

function sub(a, b){
    return a-b;
}

function multi(a,b){
    return a*b;
}

function operate(operator, a, b){
    if(operator == '+'){
        return add(a, b);
    }
    if(operator == '-'){
        return sub(a, b);
    }
    if(operator == '*'){
        return multi(a,b);
    }
    if(operator == '/'){
        return divide(a,b);
    }

}

function divide(a,b){
    return a/b;
}

function clear(){
    equation.textContent = '';
    result.textContent = '';
    
}

function clearArray(){
    array = [];
}

function answerOnScreen(){
    return result.textContent = operate(array[1], array[0], array[2]);
}