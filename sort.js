const numbers = [3, 6, 1, 4, 10, 20, 2]
const strings = ["dog", "school", "organization", "hi", "family", "three"]
const info = [
  {
    name: "Quiet Samurai",
    age: 22
  },
  {
    name: "Arrogant Ambassador",
    age: 100
  },
  {
    name: "Misunderstood Observer",
    age: 2
  },
  {
    name: "Unlucky Swami",
    age: 77
  },
]



// --- 1) Sort an array from smallest number to largest. ---
const ascendingNumbers = numbers.sort((first, second) => first - second)
// const ascendingNumbers = numbers.sort((first, second) => first > second)
// console.log(ascendingNumbers);

// --- 2) Sort an array from largest number to smallest. ---
const descendingNumbers = numbers.sort((first, second) => second - first)
// const descendingNumbers = numbers.sort((first, second) => first < second)
// console.log(descendingNumbers);

// --- 3) Sort an array from shortest  to longest. ---
const ascendingStrings = strings.sort((a, b) => a.length - b.length)
// console.log(ascendingStrings);

// --- 4) Sort an array alphabetically. ---
const alphabeticallyStrings = strings.sort()
// console.log(alphabeticallyStrings);

// --- 5) Sort the objects in the array by age. ---
const sortByAge = info.sort((a, b) => a.age - b.age)
// console.log(sortByAge);
