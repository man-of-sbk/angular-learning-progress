class Car {
    engineName: string;
    gears: number;
    private speed: number = 3;

    constructor(speed: number) {
        this.speed = speed || 0;
    }

    accelerate(): void {
        this.speed++;
    }

    throttle(): void {
        this.speed--;
    }

    getSpeed(): void {
        console.log(this.speed);
    }

    static numberOfWheels(): number {
        return 4;
    }
}

// Instantiate (create) an object from a class

let car = new Car(5);
car.accelerate();
car.getSpeed();

console.log(Car.numberOfWheels());
// console.log(car.numberOfWheels());

class Car2 {
    static speed: number = 3;
    static numberOfWheels(): number {
        return 4;
    }
}

let car2 = new Car2();
// car2.speed;
// car2.numberOfWheels();
Car2.speed;
Car2.numberOfWheels();