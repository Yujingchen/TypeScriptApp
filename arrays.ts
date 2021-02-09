// const carMakers: string[] =[]
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()]
// const carsByMake = [][] = []
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

//Help with inferecne when extracting values
const newcar = carMakers[0]
const myCar = carMakers.pop()

//prevent incompatible values
carMakers.push(100);

//help with map and reduce function
carMakers.map((car: string): string => {
    return car.toUpperCase()
})

//Flexible types
const importantDataes: (Date | string)[] = [new Date(), '10-10-2020'];
importantDataes.push('12-10-2020');
importantDataes.push(new Date());