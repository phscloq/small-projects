const calculator = {
    displayValue:'0',
    firstOperand: null,
    secondOperand:null,
    operator:null,
    decimal: false
}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-clear]')
const displayText = document.querySelector('[data-display]')
const decimalButton = document.querySelector('[data-decimal]')
const percentageButton = document.querySelector('[data-percentage]')




//adding numbers
numberButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        inputDigit(event.target.innerText);
        updateDisplay();
       
    })
})
//input digits and update display
function inputDigit(digit){
    const {displayValue} = calculator;
    if(calculator.displayValue==''){
        displayText.innerText='';
    }

   
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}


function updateDisplay(){

    displayText.innerText = calculator.displayValue;
    console.log(calculator.displayValue);

}
//decimal
decimalButton.addEventListener('click', (e) =>{
    const {displayValue} = calculator;
    const {decimal}=calculator;
    if(decimal==false){
    calculator.displayValue = displayValue + decimalButton.innerText;
    updateDisplay();
    calculator.decimal=true;
    console.log(calculator);
}})

//operator function

operationButtons.forEach(button =>{
    button.addEventListener('click', (e)=>{
        const {operator, firstOperand, displayValue} =calculator;
        calculator.firstOperand = displayValue;
        calculator.operator = e.target.innerHTML;
        calculator.displayValue='';
        console.log(calculator);
       
    })
})

//equal function
equalsButton.addEventListener('click', ()=>{
const {displayValue, firstOperand, secondOperand, operator} = calculator;
    calculator.secondOperand=calculator.displayValue;
    if(calculator.operator=="+"){
        displayText.innerText=(parseInt(calculator.firstOperand))+(parseInt(calculator.secondOperand));
        calculator.displayValue='0';
        calculator.firstOperand= null;
        calculator.secondOperand=null;
        calculator.operator=null;
        calculator.decimal= false;
    }
    else if(calculator.operator=="-"){
        displayText.innerText=(parseInt(calculator.firstOperand))-(parseInt(calculator.secondOperand));
        calculator.displayValue='0';
        calculator.firstOperand= null;
        calculator.secondOperand=null;
        calculator.operator=null;
        calculator.decimal= false;
    }
    else if(calculator.operator=="x"){
        displayText.innerText=(parseInt(calculator.firstOperand))*(parseInt(calculator.secondOperand));
        calculator.displayValue='0';
        calculator.firstOperand= null;
        calculator.secondOperand=null;
        calculator.operator=null;
        calculator.decimal= false;
    }
    else if(calculator.operator=="÷"){
        displayText.innerText=(parseInt(calculator.firstOperand))/(parseInt(calculator.secondOperand));
        calculator.displayValue='0';
        calculator.firstOperand= null;
        calculator.secondOperand=null;
        calculator.operator=null;
        calculator.decimal= false;
    }
})

//delete last digit
deleteButton.addEventListener('click', ()=>{
    const {displayValue, firstOperand, secondOperand, operator} = calculator;
   /*  show there is nothing to delete
        if(displayText.innerHTML==''){
        console.log("Boş");
        calculator.displayValue='0';
        displayText.innerText=calculator.displayValue;
    } */
    calculator.displayValue=calculator.displayValue.slice(0,-1);
    displayText.innerText=calculator.displayValue;
})
//clear all
allClearButton.addEventListener('click', ()=>{
    const {displayValue, firstOperand, secondOperand, operator} = calculator;
        calculator.displayValue='0';
        calculator.firstOperand= null;
        calculator.secondOperand=null;
        calculator.operator=null;
        calculator.decimal= false;
        displayText.innerText=0;
})

//make the number /10 --not finished
percentageButton.addEventListener('click', ()=>{
    const {displayValue, firstOperand, secondOperand, operator} = calculator;
    calculator.displayValue=parseInt(calculator.displayValue)/10;
    displayText.innerText=calculator.displayValue;

})