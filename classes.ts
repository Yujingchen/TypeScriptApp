class Vehicle {
    // public drive(): void {
    //     console.log('driving a car')
    // }
    // color: string
    constructor(public color: string) {
        // this.color = color
    }
    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('green');
console.log(vehicle.color)
// vehicle.drive();
// vehicle.honk();

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom')
    }
    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
// car.startDrivingProcess();


