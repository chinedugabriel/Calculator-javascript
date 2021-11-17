//this is just a simple function to calculate numbers

function simpleMathProblem(value1, operator, value2){ // *, /, +, -, %
    if(operator == "+" || operator == "add"){
        return value1 + value2;
    
    }else if (operator == "-" || operator == "subtract"){
        return value1 - value2;
    
    }else if (operator == "*" || operator == "multiply"){
        return value1 * value2;
    
    }else if (operator == "/" || operator == "divide"){
        return value1 / value2;
    
    }else if (operator == "%" || operator == "modulus"){
        return value1 % value2;
    
    }
}
// console.log(simpleMathProblem(12,"divide",4));