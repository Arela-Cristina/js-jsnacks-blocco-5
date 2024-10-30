const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//metodo filter. ci ritorna un nuovo array con deli elementi che complono una condizione, istruzzione, condizione etc, 
const  evenNums = nums.filter((num) => num % 2 === 0);

console.log(evenNums);

console.log('is an array?', Array.isArray(nums))
console.log('value:', typeof nums);

console.log('is an array?', Array.isArray(evenNums))
console.log('value:', typeof evenNums);

//verifica nuovo riferimento
console.log('arrays are the same?', nums === evenNums);

//prova
console.log(nums);
nums.push(1);

//prova
console.log(evenNums);
evenNums.push(4);

//stampiamo in console entrambi gli arrays 
console.log(nums);
console.log(evenNums);