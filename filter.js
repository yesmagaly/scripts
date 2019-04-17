var numbers = [1, 5, 4, 7, 9, 22]
var words = ['math', 'dog', 'pig', 'tv', 'school', 'university', 'orange']
var info = [
  {
    name: 'Yésica Ramírez',
    member: false,
    age: 27
  },
  {
    name: 'Joseph Ramos',
    member: true,
    age: 26
  },
  {
    name: 'Chispita Chispon',
    member: true,
    age: 2
  },
  {
    name: 'Chobit Dickson',
    member: false,
    age: 8
  },
  {
    name: 'James Bloo',
    member: true,
    age: 15
  }
]

// ---------- 1 ---------------
var filterNumbers = numbers.filter(number => number > 5)
// console.log(filterNumbers);

// ---------- 2 ---------------
var evenNumbers = numbers.filter(number => number % 2 == 0)
// console.log(evenNumbers);

// ---------- 3 ---------------
var smallWords = words.filter(word => word.length <= 5)
// console.log(smallWords);

// ---------- 4 ---------------
var notMembers = info.filter(item => item.member == false)
// console.log(notMembers);

// ---------- 6 ---------------
var notGotTheMatrix = info.filter(item => item.age < 18)
// console.log(notGotTheMatrix);
