const arr = [1, 2, 4, 5, 6, 6, 7];

arr.forEach((value) => {
    console.log(value)
})


// mapujemy tablicę na tablicę kwadratów jej elementów
const arr2 = arr.map((val) => val * val);
console.log(arr2);

// usuwamy z nowej tablicy elementy <
const arr3 = arr.filter((val) => val >4);
console.log(arr3);

// sumujemy elementy tablicy - prev działa jak akumulator, to co jest zwrrócone jest do niego przypisywane
const sum = arr.reduce((prev, curr) => prev + curr);
console.log(sum);

// Łączenie operacji ze sobą
const arr4 = arr.filter(val => val % 2 === 0).map(val => val * 8);
console.log(arr4);