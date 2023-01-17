class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPotential(current: number): number {
        return current * this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
}

class SeriesCircuit {
    resistors: Resistor[] = []
    push(r: Resistor) {
        this.resistors.push(r);
    }
    getTotalResistance() {
        let sum: number = 0;
        this.resistors.forEach((r: Resistor) => { sum += r.getResistance() });
        return sum;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getBiggestResistorPower(u: number) {
        if (this.resistors.length == 0) { return 0; }
        let current: number = this.getCurrent(u);
        let biggestPower: number = this.resistors[0].getPower(this.resistors[0].getPotential(current));
        for (let i = 1; i < this.resistors.length; i++) {
            let power: number = this.resistors[i].getPower(this.resistors[i].getPotential(current));
            if (power > biggestPower) { biggestPower = power; }
        }
        return biggestPower;
    }
    getTotalPower(u: number) {
        let current = this.getCurrent(u);
        let totalPower = 0;
        this.resistors.forEach((r: Resistor) => {
            totalPower += r.getPower(r.getPotential(current));
        });
        return totalPower;
    }
    getBiggestResistorResistance() {
        if (this.resistors.length == 0) { return 0; }
        let biggestResistance = this.resistors[0].getResistance();
        for (let i = 1; i < this.resistors.length; i++) {
            if (this.resistors[i].getResistance() > biggestResistance) {
                biggestResistance = this.resistors[i].getResistance();
            }
        }
        return biggestResistance;
    }
    getBiggestResistorPotential(u: number) {
        if (this.resistors.length == 0) { return 0; }
        let current = this.getCurrent(u);
        let biggestPotential = this.resistors[0].getPotential(current);
        for (let i = 1; i < this.resistors.length; i++) {
            let potential = this.resistors[i].getPotential(current);
            if (potential > biggestPotential) {
                biggestPotential = potential;
            }
        }
        return biggestPotential;
    }
    getBiggestResistorPowerFromVoltage(u: number) {
        if (this.resistors.length == 0 ){ return 0; }
            let current = this.getCurrent(u);
        let biggestPower = this.resistors[0].getPower(this.resistors[0].getPotential(current));
        for (let i = 1; i < this.resistors.length; i++) {
            let power = this.resistors[i].getPower(this.resistors[i].getPotential(current));
            if (power > biggestPower) { biggestPower = power; }
        }
        return biggestPower;
    }
}
let sc1: SeriesCircuit = new SeriesCircuit();
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(110));
console.log("Biggest resistor power at 12V: " + sc1.getBiggestResistorPower(12));

let sc2: SeriesCircuit = new SeriesCircuit();
sc2.push(new Resistor(100));
sc2.push(new Resistor(200));
sc2.push(new Resistor(300));
console.log("Biggest resistor power at 15V: " + sc2.getBiggestResistorPower(15));
console.log("Total power at 15V: " + sc2.getTotalPower(15));
console.log("Biggest resistor resistance: " + sc2.getBiggestResistorResistance());
console.log("Biggest resistor potential at 15V: " + sc2.getBiggestResistorPotential(15));
console.log("Biggest resistor power from 5V: " + sc2.getBiggestResistorPowerFromVoltage(5));
