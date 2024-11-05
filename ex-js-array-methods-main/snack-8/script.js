const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

students[0].class


//uttilizziamo metodo FIND
const student = students.find((el) => el.name === 'Marco Lanci').class
console.log(student)

//const student = students.find((el) => el.name === 'Marco Lanci')?.class || ''
// ? e || metodo OPTIONAL CHANGUING, concatenazzione opzionale che sarebbe la stessa cosa che il operatorie ternario in basso. 

//fare un controllo per sapere se lo studente essiste oppure e stato incontrato
//Se lo studente essiste stampare lo studente senno stampare stringa vuota
const studentClass = student ? student.class : ''
