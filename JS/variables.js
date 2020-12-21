// var a;
// var b;
// var c;

// console.log(a, b, c);

// a = 5;
// b = 6;
// c = 7;

// Błąd - hoisting nie występuje
// console.log(a);
// const a = 5;

// OK
const a = 5;
console.log(a);

for(var i = 0; i < 10; i++) {}
console.log(i);


// j iistnieje tylko wewnątrz bloku stworzonego przez pętlę
for(let j = 0; j < 10; j++){
}
console.log(j);
