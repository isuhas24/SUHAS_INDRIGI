class Calculator{
    constructor(a, b, operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }

    calculate(){
        switch(this.operation.toLowerCase()){
            case 'add': return this.a + this.b;
            case 'subtract' : return this.a - this.b;
            case 'multiply' : return this.a * this.b;
            case 'divide' : return this.a/this.b;
            default: return 'invalid operation'
        }
    }
}

const calc1 = new Calculator(1, 2, 'add');
console.log(calc1.calculate());
// output: 3

const calc2 = new Calculator(2, 1, 'subtract');
console.log(calc2.calculate());
// output: 1

const calc3 = new Calculator(1, 2, 'multiply');
console.log(calc3.calculate());
// output: 2

const calc4 = new Calculator(2, 2, 'divide');
console.log(calc4.calculate());
// output: 1