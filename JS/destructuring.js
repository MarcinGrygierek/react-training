// wycciągamy pola a2 i test z obiektu do stałych  takich samych nazwach
const obj2 = {a2: 1, b:2, c:3, test: 111};
const {a2, test} = obj2;

// Wyciągamy 1 i 3 element tablicy do stałych n1 i n3 (nazwy mogą być dowolne - ważna jest kolejność)
const arr41 = [1, 2, 3, 4, 5];
const [n1, , n3] = arr41;

// Wyciąganie do stałej pod inną nazwą
const o2 = {asd: 2, bvc: 100};
const {asd: lorem, bvc} = o2;

// stworzenie nowego obiektu z częścią pól
const obj2 = {a2: 1, b:2, c:3, test: 111};
const {b, c} = obj2;
const newObj = {b, c};
const newObj2 = { b: b, c: c}; // działanie takie samo jak powyżej - w przypadku takich samych nazw pól jak i wartości - możemy użyć zapisu skróconego

// Inny sposób tworzenia obiektu/tablicy w połączeniu ze spread
const obj = {a: 1, b:2, c: 3}
const {c, ...obj2} = obj;

const arr = [1, 2, 3, 4, 5];
const [v1, ...arr2] = arr;