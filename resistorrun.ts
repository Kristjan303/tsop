class Resistor {
    r: number = 0;
    constructor(r: number) {
        this.r = r;
    }

    getPower(u: number): number {
        return u * this.r;
    }
    getAmps(w:number, v:number): number{
        return w / v
    }
    getOhms(w:number, v:number):number{
        return v / this.getAmps(w, v)
    }
    getTemp(w:number, ml:number):number{
        return Math.floor(20+(60/(4.19*(ml/w))))
    }

}

let r1 = new Resistor(2);
console.log(r1.getPower(5));
console.log(r1.getAmps(6,4));
console.log(r1.getOhms(6,4));
console.log(r1.getTemp(1000, 1000));
console.log(r1.getAmps(1000, 220));
console.log(r1.getOhms(1000, 220));