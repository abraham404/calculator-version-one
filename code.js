let operationStr = '', number1 = '', number2 = '', resul = 0;

function calculatorOpera(btn){
   
    switch(btn){
        case 'one':
            operationStr += '1';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr); 
            break;


        case 'two':
            operationStr += '2';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'three':
            operationStr += '3';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break; 

        case 'four':
            operationStr += '4';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'five':
            operationStr += '5';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;
            
        case 'six':
            operationStr += '6';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;
        
        case 'seven':
            operationStr += '7';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'eight':
            operationStr += '8';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'nine':
            operationStr += '9';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;
            
        case 'zero':
            operationStr += '0';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'plus':
             number1 = operationStr;
             operationStr += ' + ';
             document.getElementById('displayNumber').innerHTML = operationStr;
             console.log(operationStr);
            break;

        case 'minus':
            number1 = operationStr;
            operationStr += ' - ';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break; 
        
        case 'mul':
            number1 = operationStr;
            operationStr += ' * ';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'division':
            operationStr += ' / ';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;
        case 'point':
            number1 = operationStr;
            operationStr += '.';
            document.getElementById('displayNumber').innerHTML = operationStr;
            console.log(operationStr);
            break;

        case 'equal':
            arithOperations();
            break;
            
        case 'clear':
            operationStr = '';
            document.getElementById('displayNumber').innerHTML = '0';
            console.log('cleared');
            break;
       
    }
  
}

function arithOperations(){
    number1 = operationStr.split(' ')
    number2 = operationStr.split(' ');

    
    
    let i = 1, strNumber = 0;

    for (; i < number2.length; i++){
       // console.log(number2[i]);

        if(number2[i] !== '+' && number2[i] !== '-' && 
            number2[i] !== '*' && number2[i] !== '/'){
            strNumber = (number2[i] * 1);
        }
    }
   

    switch(number2[1]){
        case '+':
            resul =  number1[0] * 1 + strNumber;
            break;

        case '-':
            resul =  number1[0] * 1 - strNumber;
            break;

        case '*':
            resul =  number1[0] * 1 * strNumber;
            break;

        case '/':
            resul =  number1[0]  * 1 / strNumber;
            break;
    }

        
    operationStr = resul.toString();
    document.getElementById('displayNumber').innerHTML = resul;
    console.log(resul);
}

let count = 0;

