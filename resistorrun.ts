class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
}
let resistors: Resistor[] = [];
let r1: Resistor = new Resistor(220);
let r2: Resistor = new Resistor(4700);
let r3: Resistor = new Resistor(110);
resistors.push(r1)
resistors.push(r2)
resistors.push(r3)
console.log(resistors)

let totalCurrent: number = 0;
resistors.forEach((resistor) => { totalCurrent += resistor.getCurrent(5); });
console.log(totalCurrent);