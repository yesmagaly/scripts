var numbers = [ 1, 2, 3]
var names = ['joseph', 'yésica', 'yuly', 'paul']

var info = [
  {
    name: 'Yésica Ramírez',
    age: 28
  },
  {
    name: 'Joseph Ramos',
    age: 27
  },
  {
    name: 'Anna Rossas',
    age: 8
  },
  {
    name: 'Hacker Dickson',
    age: 2
  }
]

// ---------- 1 ---------------
var doubleNumbers = numbers.map(number => 2 * number)
//console.log(doubleNumbers);

// ---------- 2 ---------------
var becomeString = numbers.map(number => number.toString())
// console.log(becomeString);

// ---------- 3 ---------------
var capitalizeNames = names.map(name => name[0].toUpperCase() + name.slice(1))
// console.log(capitalizeNames);

// ---------- 4 ---------------
var arrayInfo = info.map(item => item.name)
// console.log(arrayInfo);

// ---------- 5 ---------------
var goTheMatrix = info.map(item => {
  return item.name + (item.age > 20 ? ' Go to the Matrix' : ' is under age!')
})
// console.log(goTheMatrix);

// ---------- 6 ---------------
var strongNames = info.map(item => {
  return '<h1>' + item.name + '</h1>' + '<h2>' + item.age + '</h2>'
})
// console.log(strongNames);
