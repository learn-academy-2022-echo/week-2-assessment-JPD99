// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
// console.log(cohort.split(""))

// a) Your answer: ["E", "c", "h", "o", " ", "2", "0", "2", "2"]
// b) Verify and explain: The answer is: ["E", "c", "h", "o", " ", "2", "0", "2", "2"]. The .split() method turns a string into an array, including string. .split() turns the entire string into an array, while .split("") turns every single letters and spaces into an array element as one single array.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined
// b) Verify and explain: The answer is: undefined . Although the code block looks like a function, it is missing one characteristic the return keyword. Without a return the code block does not know what to return. All Functions have a declaration, varible name, assignment operator, parameter, arrow notation, {} brackets, function statements, and a return keyword (more returns are needed if the function has a standard for loop) 


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The answer is: [8, 10, 12, 14, 16] . This code block uses syntactical sugar, which is a method that writes short hand code. .map () is a method that returns the original length of the array with or with not any modifications. We also note that parameters in the .map() doesn't use a function, so that explains why we don't see a return. 
// as a side bar .map() , .filer(), .forEach(), emulates a for loop, as so these reiteratable methods can only work on iterable data types of strings and arrays


// --------------------4) What will this log?


const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The answer is: [11, 13, 15] . This code block uses syntactical sugar, which is a method that writes short hand code. .filter() is a method that only accepts data values that satisfies whatever conditions is in the parameter, and, so, the OnlyOdds only logs odd numbers from the array.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "Javascript"
// b) Verify and explain: The answer is: "Javascript" . We are given an object called myCodingSkills, with properties that have an associated data value (properties and its data values are called key values pairs). The code block uses dot notation that locates key value pairs, usually it follows this order ==> myObject.properties[index] -- as such we are looking at the languages property, and the 0th index of that respective array.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 
// ***** Without the "//""
//   constructor("George"){
//     this.student = "George",
//     this.cohort = "Echo",
//     this.year = 2022
//   }
// }

// b) Verify and explain: The correct answer is: 
// {cohort: "Echo"
// student: "George"
// year: 2022}
// The anatomy of this class: class is a blueprint for an object, constructor allows for the creation of an object -- whatever that is in the parameter of the constructor replaces the identical parameter inside the key values; in this problem, name ,is the parameter in the constructor, so where ever name is in the key values it will be replaced by whatever the devloper decides. The this. format is a shorthand to refer to the class name. By entering George, we get all the properties back below the constructor, remembering that the orginal parameter is name, so where ever name is in the class's properties it will also be replaced with "George" as well.