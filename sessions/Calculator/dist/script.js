const calcOperation = document.querySelector('.calc-operation');
const calcTyped = document.querySelector('.calc-typed');


function youClicked(n){
    if(n === '='){
        if(calcOperation.textContent != ''){
            calcTyped.textContent = eval(calcOperation.textContent);
        }
    }
    else {
        calcOperation.textContent += n;
        
    if(n === 'openC'){ calcOperation.textContent += '(';} else {calcOperation.}
    if(n === 'closeC'){ calcOperation.textContent += ')';}
    }

    if(n === 'C'){
        calcTyped.textContent = '0';
        calcOperation.textContent = '';
    }

    if(n === 'openC'){ calcOperation.textContent += '(';}
    if(n === 'closeC'){ calcOperation.textContent += ')';}