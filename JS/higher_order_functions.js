// jako drugi parametr przekazujemy funkcję, która jest wywowyłana w returnie dla przekazanego elementu
const bar = (a, callback) => {
    return callback(a);
}

bar(4, (val) => val * val);