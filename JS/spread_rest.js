const a = {a: 1, b: 2};

// Błąd - kopiujemy adres, przez co modyfikacja obiektu b zmodyfikuje obiekt a
const b = a;

// ok - tworzymy nowy obiekt do którego kopiujemy zawartość obiektu a,
const b = {...a};

const arr = [1, 2, 3];

// Błąd - kopiujemy adres (wskaaźnik) - modyfikacja arr2 zmodyfikuje arr
const arr2 = arr;
arr2.push(10);

// ok - kopiujemy zawartośc arr oraz dodajemy nowy element 10
const arr2 = [...arr, 10];

// Prrzy pomocy rest operatora możemy przekazać zmienną ilość parametrów do funnkcji - stają się wewnątrz tablicą
function foo(...elements) {
    return elements;
 }
 
 console.log(foo(1, 2, true, 4));
 console.log(foo(1, [1, 2]));
 console.log(foo(2, 6, 'asd', 1, 2, 4));
