class Display {
    constructor(previousValueDisplay, currentValueDisplay){
        this.currentValueDisplay = currentValueDisplay;
        this.previousValueDisplay = previousValueDisplay;
        this.calculator = new Calculator();
        this.typeOfOperation = undefined;
        this.previousValue = '';
        this.currentValue = '';
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: '*',
            divide: '/'
        }
    }

    delete(){
        this.currentValue = this.currentValue.toString().slice(0,-1);
        this.printValues();
    }

    deleteAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.typeOfOperation = undefined;
        this.printValues();
    }

    compute(type){
        this.typeOfOperation !== 'equal' && this.calculate();
        this.typeOfOperation = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(num){
        if(num == '.' && this.currentValue.includes('.')) return;
        this.currentValue = this.currentValue.toString() + num.toString();
        this.printValues();
    }

    printValues(){
        this.currentValueDisplay.textContent = this.currentValue;
        this.previousValueDisplay.textContent = `${this.previousValue} ${this.signs[this.typeOfOperation] || ' '}`;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if(isNaN(currentValue) || isNaN(previousValue)) return;
        this.currentValue = this.calculator[this.typeOfOperation](previousValue, currentValue)

    }

}