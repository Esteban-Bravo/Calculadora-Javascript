const previousValueDisplay = document.getElementById('previous-value');
const currentValueDisplay = document.getElementById('current-value');
const buttonsNumber = document.querySelectorAll('.number');
const buttonsOperators = document.querySelectorAll('.operator');

const display = new Display(previousValueDisplay, currentValueDisplay);

const calculator = new Calculator();

buttonsNumber.forEach(button => {
    button.addEventListener('click' , () =>
        display.addNumber(button.innerHTML))
})

buttonsOperators.forEach(button =>{
    button.addEventListener('click', () => display.compute(button.value))
})

console.log(calculator.subtract(5,5))