let variableCal = '', number1 = '', number2 = '', resul = 0;

function calculatorOpera(btn){
    
    switch(btn){
        case 'one':
            variableCal += '1';
            console.log(variableCal);
            break;

        case 'two':
            variableCal += '2';
            console.log(variableCal);
            break;

        case 'three':
            variableCal += '3';
            console.log(variableCal);
            break; 

        case 'four':
            variableCal += '4';
            console.log(variableCal);
            break;

        case 'five':
            variableCal += '5';
            console.log(variableCal);
            break;
            
        case 'six':
            variableCal += '6';
            console.log(variableCal);
            break;
        
        case 'seven':
            variableCal += '7';
            console.log(variableCal);
            break;

        case 'eight':
            variableCal += '8';
            console.log(variableCal);
            break;

        case 'nine':
            variableCal += '9';
            console.log(variableCal);
            break;
            
        case 'zero':
            variableCal += '0';
            console.log(variableCal);
            break;

        case 'plus':
             number1 = variableCal;
             variableCal += ' + ';
             console.log(variableCal);
            break;

        case 'minus':
            number1 = variableCal;
            variableCal += ' - ';
            console.log(variableCal);
            break; 
        
        case 'mul':
            number1 = variableCal;
            variableCal += ' * ';
            console.log(variableCal);
            break;

        case 'division':
            variableCal += ' / ';
            console.log(variableCal);
            break;
        case 'point':
            number1 = variableCal;
            variableCal += '.';
            console.log(variableCal);
            break;

        case 'equal':
            arithOperations();
            break;
            

        case 'clear':
            variableCal = '';
            console.log('cleared');
            break;
       
    }

    function arithOperations(){
        number1 = variableCal.split(' ')
        number2 = variableCal.split(' ');

        
        
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

            
        variableCal = resul.toString();
        
        console.log(resul);
    }

}