var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = 3;
        this.speed = speed || 0;
    }
    Car.prototype.accelerate = function () {
        this.speed++;
    };
    Car.prototype.throttle = function () {
        this.speed--;
    };
    Car.prototype.getSpeed = function () {
        console.log(this.speed);
    };
    Car.numberOfWheels = function () {
        return 4;
    };
    return Car;
}());
// Instantiate (create) an object from a class
var car = new Car(5);
car.accelerate();
car.getSpeed();
console.log(Car.numberOfWheels());
// console.log(car.numberOfWheels());
var Car2 = /** @class */ (function () {
    function Car2() {
    }
    Car2.numberOfWheels = function () {
        return 4;
    };
    Car2.speed = 3;
    return Car2;
}());
var car2 = new Car2();
// car2.speed;
// car2.numberOfWheels();
Car2.speed;
Car2.numberOfWheels();
