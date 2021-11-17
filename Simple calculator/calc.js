//this is just a simple function to calculate numbers


function simpleMathProblem(){ // *, /, +, -, %
    let pValue1 = document.getElementById("input1").value;
    let pValue2 = document.getElementById("input2").value;
    let operator = document.getElementById("input3").value;
    let value1 = parseInt(pValue1);
    let value2 = parseInt(pValue2);
    // console.log(value1);

  
    if(operator == "+" || operator == "add"){
        document.getElementById("sol").innerHTML = value1 + value2;
    
    }else if (operator == "-" || operator == "subtract"){
        document.getElementById("sol").innerHTML = value1 - value2;
    
    }else if (operator == "*" || operator == "multiply"){
        document.getElementById("sol").innerHTML = value1 * value2;
    
    }else if (operator == "/" || operator == "divide"){
        document.getElementById("sol").innerHTML = value1 / value2;
    
    }else if (operator == "%" || operator == "modulus"){
        document.getElementById("sol").innerHTML = value1 % value2;
        
    
    }
    
}
// console.log(simpleMathProblem(12,"divide",4));