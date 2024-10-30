const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//prendo ogni elemento del array forEach
//metodo classico
people.forEach((person) => console.log(person.name));

//destructuring
people.forEach(({ name }) => console.log(name));
