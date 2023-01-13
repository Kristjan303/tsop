class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }
    getCurrent(u: number): number {
        return u / this.r;
    }
    getPower(u: number): number {
        return u * this.getCurrent(u);
    }
    getResistance(): number {
        return this.r;
    }
    getVoltage(i: number): number {
        return i * this.r;
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
    getVoltagePerResistor(u: number) {
        return u / this.resistors.length;
    }
    getCurrent(u: number) {
        return u / this.getTotalResistance();
    }
    getPowerPerResistor(u: number) {
        const voltagePerResistor = this.getVoltagePerResistor(u);
        return voltagePerResistor * this.getCurrent(u);
    }
}

let sc1: SeriesCircuit = new SeriesCircuit();

sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
sc1.push(new Resistor(220));
console.log(sc1.getTotalResistance());
console.log(sc1.getVoltagePerResistor(12))
console.log(sc1.getPowerPerResistor(12));
console.log('*********************************************************************')


let sc2: SeriesCircuit = new SeriesCircuit()

sc2.push(new Resistor(110));
sc2.push(new Resistor(220));
sc2.push(new Resistor(220));

console.log(sc2.getTotalResistance())
console.log(sc2.getCurrent(12))
console.log(sc2.resistors[0].getVoltage(sc2.getCurrent(12)))
console.log(sc2.resistors[1].getVoltage(sc2.getCurrent(12)))
console.log(sc2.resistors[2].getVoltage(sc2.getCurrent(12)))

console.log(sc2.resistors[0].getPower(sc2.resistors[0].getVoltage(sc2.getCurrent(12))))
console.log(sc2.resistors[1].getPower(sc2.resistors[1].getVoltage(sc2.getCurrent(12))))
console.log(sc2.resistors[2].getPower(sc2.resistors[2].getVoltage(sc2.getCurrent(12))))
