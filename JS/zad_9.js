const cars = [
    {
        name: 'Toyota',
        isBroken: false,
    },
    {
        name: 'Fiat',
        isBroken: true,
    },
    {
        name: 'Mercedes',
        isBroken: false,
    },
    {
        name: 'Porsche',
        isBroken: true
    }
 ]
 
 const filteredCars = cars.filter((val) => val.isBroken === true)
    .map((val) => `Samochód ${val.name} jest zepsuty`);

console.log(filteredCars);