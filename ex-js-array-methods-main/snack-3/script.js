const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//metodo map, ci ritorna un nuovo array, con un nuovo riferimento.
const newNumbers = numbers.map((num) => num + 1);

console.log('is an array?', Array.isArray(numbers))
console.log('value:', typeof numbers);

console.log('is an array?', Array.isArray(newNumbers))
console.log('value:', typeof newNumbers);

//verifica nuovo riferimento
console.log('arrays are the same?', numbers === newNumbers);

//prova
console.log(numbers);
numbers.push(1);

//prova
console.log(newNumbers);
newNumbers.push(4);

//stampiamo in console entrambi gli arrays 
console.log(numbers);
console.log(newNumbers);