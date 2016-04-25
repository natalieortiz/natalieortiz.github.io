(function (){
    
    var checker1 = true;
    var checker2 = true; 
    var inputState = true; 

    //Clicking on numbers.      
    var numbers = document.getElementsByClassName('num-btn')
    for (var i=0; i < numbers.length; i++) { 
        numbers[i].addEventListener('click', function() {
            if (inputState == true) {
                // firstOperand = 
                document.getElementById('left_operand').value += this.getAttribute("data-number");
            } else {
                // secondOperand = 
                document.getElementById('right_operand').value += this.getAttribute("data-number");
            }
        });
    }

    //Add a decimal to a number.  
    var decimal = document.getElementById('decimal');
    decimal.addEventListener('click', function(){ 
        if (inputState == true && checker1 == true) {
            document.getElementById('left_operand').value += this.getAttribute("data-number");
            checker1 = false;
        } else if (inputState == false && checker2 == true) {
            document.getElementById('right_operand').value += this.getAttribute("data-number");
            checker2 = false;
        }
        
    });

    //Change the sign of a number.
    var sign = document.getElementById('sign');
    sign.addEventListener('click', function(){
        var negativeNum; 
        if (inputState == true && parseFloat(document.getElementById('left_operand').value) >= 0) {
            negativeNum = parseFloat(document.getElementById('left_operand').value) * -1;
            document.getElementById('left_operand').value = negativeNum;
        } else if (inputState == false) {
            negativeNum = parseFloat(document.getElementById('right_operand').value) * -1;
            document.getElementById('right_operand').value = negativeNum;
        }
        
    });

    //Get percentage of a number.
    var percentNum = document.getElementById('percentage');
    percentNum.addEventListener('click', function(){
        var percent; 
        if (inputState == true) {
            percent = parseFloat(document.getElementById('left_operand').value) / 100;
            document.getElementById('left_operand').value = percent.toFixed(2);
        }
        
    });


    //get operator in the operator input
    var operators = document.getElementsByClassName('operator')
    for (var i=0; i < operators.length; i++){
        operators[i].addEventListener('click', function() {
            document.getElementById('operator').value = this.getAttribute("data-operator");
            inputState = false; 
        })
    }

    //Equal button.  Also clears operand and right operand. 
    var equals = document.getElementById('equals');
    equals.addEventListener("click", function(){
        var firstOperand;
        var operator;
        var secondOperand;
        var output;
        firstOperand = document.getElementById('left_operand').value;
        secondOperand = document.getElementById('right_operand').value;
        operator = document.getElementById('operator').value;
        console.log(operator);        
        switch (operator){
            case "-":
                output = parseFloat(firstOperand) - parseFloat(secondOperand);
                break;
            case "+":
                output = parseFloat(firstOperand) + parseFloat(secondOperand);
                break;
            case "*":
                output = parseFloat(firstOperand) * parseFloat(secondOperand);
                break;
            case "/":
                output = parseFloat(firstOperand) / parseFloat(secondOperand);
                break;
        }
        inputState = true; 
        checker1 = true; 
        checker2 = true; 
        document.getElementById('operator').value = '';
        document.getElementById('right_operand').value = '';
        document.getElementById('left_operand').value = parseFloat(output.toFixed(2));

    });

    //CLEAR button
    var clear = document.getElementById('clear');
    clear.addEventListener('click', function(){
        inputState = true;
        document.getElementById('operator').value = '';
        document.getElementById('right_operand').value = '';
        document.getElementById('left_operand').value = '';
    });

    //Add total to Scratch pad
    var scratch = document.getElementById('scr_btn');
    scratch.addEventListener('click', function(){
            document.getElementById('scratch_area').value += document.getElementById('left_operand').value;
    });

    //Clear scratch pad
    var clear_scr = document.getElementById('clear_scr');
    clear_scr.addEventListener('click', function(){
        document.getElementById('scratch_area').value = '';
    });


})();