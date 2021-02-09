const add = (a: number, b: number): number => {
    return a + b;
}

function devide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message);
}

//use never when function never return a value or complete execute
const throwError = (message: string): never => {
    throw new Error(message);
}

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}

//destruction of forcast object 
// const logWeather = ({data,weather}: { date: Date, weather: string }): void => {
//     console.log(forecast.date)
//     console.log(forecast.weather)
// }

logWeather(forecast);