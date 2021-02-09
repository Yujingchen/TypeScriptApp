const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};


//destuction and annotation of object
const { age, name }: { age: number, name: string } = profile

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile

// const {age}:number = profile is not a good type annotation, need to annotate the object instead
