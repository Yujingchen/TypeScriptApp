const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

type Drink = [string, boolean, number];

const pepsi: [string, boolean, number] = ['brown', true, 40];

const milk: Drink = ['white', true, 0]
const tea: Drink = ['brown', false, 0]
// pepsi[0] = 40; will have error

const carSpecs: [number, number] = [400, 3354];