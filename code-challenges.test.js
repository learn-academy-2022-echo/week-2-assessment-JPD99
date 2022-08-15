// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// *********  Use test driven development to complete the following questions *********
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.
// a) Create a test with expect statements for each of the variables provided.
// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// b) Create the function that makes the test pass.
// DO NOT ATTEMPT THE INSTRUCTOR'S EXAMPLE






// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// a) Create a test with expect statements for each of the variables provided.
//PseudoCode: 
// Declaring a function called divisiblity
// Parameter is an object, trying to extract the property from the object,,,,,,,, using dot notation to grab our key value pairs
// Output will refer to one of the keypairs and a string that says if the number is divisible by 3 or not 

// As we are testing we need to describe a inert function that is not defined ==> yarn jest will trigger giving us controlled fail status
// It statement says what our function is gonna do 
// Expect statements are going to account for ALL of our conditions from const object1-3
describe ("divisiblity", () => {
    it ("Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3", () => {
        expect (divisiblity(object1)).toEqual(`${object1.number} is divisble by three`)
        expect (divisiblity(object2)).toEqual(`${object2.number} is divisble by three`)
        expect (divisiblity(object3)).toEqual(`${object3.number} is NOT divisble by three`)
    })
})

//  Good Failure:
//  FAIL  ./code-challenges.test.js
//   divisiblity
//   ✕ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (2 ms)
// ● divisiblity › Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3
//   ReferenceError: divisiblity is not defined

// b) Create the function that makes the test pass.
// Creating the TEST
// We already addressed that the parameter will be inputted as an object with thier respective names.
// We need a new container that will grab the property called number in each object;;;;;; we will be using the objectNumGrabber to store the property called number inside of it
// A data type of a number should only be stored in the objectNumGrabber we will use modulo (%) to identify divisibility of some number
// create a decision tree (conditional statement) that will logically choose if a number is divisble or not and then execute the command that will print if its divisble or not
const divisiblity = (object) => {
    let objectNumGrabber = object.number 
    if (objectNumGrabber % 3 === 0){
        return `${objectNumGrabber} is divisble by three`
    } else {
        return `${objectNumGrabber} is NOT divisble by three`
    } 
}
// SUCCESS!!!!!!  
// PASS  ./code-challenges.test.js
//   divisiblity
//   ✓ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total







// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// a) Create a test with expect statements for each of the variables provided.
//PseudoCode: 
// Declare a function called capitalize
// Input / parameter is an array of lowercase words
// The function should be capable of only capitalizing the first letter of each string
// Output should produce another array, altering the first letter of each string

describe ("capitalize", () => {
    it ("Input array is lowercase strings, Output should be an array with every first letter capitalize", () => {
        expect (capitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (capitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// Good Failure:
// FAIL  ./code-challenges.test.js
// divisiblity
//   ✓ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (2 ms)
// capitalize
//   ✕ Input array is lowercase strings, Output should be an array with every first letter capitalize
// vowelFinder
//   ✓ Inputted is a string, Output is the index of the FIRST vowel (1 ms)
// ● capitalize › Input array is lowercase strings, Output should be an array with every first letter capitalize
//   ReferenceError: capitalize is not defined

// b) Create the function that makes the test pass.
// Create a function called capitalize
// The methods: toUpperCase(), .split(), and .join() come to mind; .toUpperCase() turns strings to capslock temporary modifier, .split() turns an string to an array--acessor, and .join() turns an array into a string-acessor
// This one took a bit long... an additional method added in notes is: .substring() ==> this method outputs A STRING ONLY, whatever is in the parameters of .substring is ommited out of the answer; the odd thing is that .substring starts at 1 and continues on.
// Example let str = "apple" 
// with str.substring(1) ==> console.log (str.substring(1)) ==> "pple"
const capitalize = (array) => {
    let copyArray = array
    let containerArray = []
// forloop that iterates through all elements in a array
    for (let index = 0; index < array.length; index = index + 1) {
//Explaination of line 132. All of the actions are pushed into the container array called containerArray: AT INDEX 0 for randomNouns1 ==> The 0th index is "streetlamp", we split the 0th index into ["s","t","r","e","e","t","l","a","m","p"], we join the new array as "streetlamp", we call on the 0th index of the string of "streetlamp" as "S" with charAt(0) + .toUpperCase(), we use the method .substring(1) to eject the first letter of the string "streetlamp" to get "treetlamp", we use the plus symbol to basically concat the two string "S" and "treetlamp", and the result "Streetlamp" is pushed into containerArray, the next INDEX (which is 1) for randomNouns1 begins, until all elements of randomNouns is exhausted. 
        containerArray.push(array[index].split("").join("").charAt(0).toUpperCase() + array[index].substring(1))
    } return  containerArray
    
}

// SUCCESS!!!!
//  PASS  ./code-challenges.test.js
//   Divisiblity
//   ✓ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (2 ms)
// capitalize
//   ✓ Input array is lowercase strings, Output should be an array with every first letter capitalize
// vowelFinder
//   ✓ Inputted is a string, Output is the index of the FIRST vowel
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total








// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// a) Create a test with expect statements for each of the variables provided.
//PseudoCode: 
// Declare a function called vowelFinder to find the index of the first vowel
// Input / parameter is a varible that is defined as a string
// Output should be the index value of a vowel ==> a,e,i,o,u

// Describe a function that is undefined ==> triggers the yarn jest to tell us we failed to identify the function
// it statements just tells us how the function will operate
// expect statements tells jest what we will input and what we expect to come out 
describe ("vowelFinder", () => {
    it ("Inputted is a string, Output is the index of the FIRST vowel", () => {
        expect (vowelFinder(vowelTester1)).toEqual(1)
        expect (vowelFinder(vowelTester2)).toEqual(0)
        expect (vowelFinder(vowelTester3)).toEqual(2)
    })
})
// Good Failure:
// FAIL  ./code-challenges.test.js
// divisiblity
//   ✓ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (3 ms)
// vowelFinder
//   ✕ Inputted is a string, Output is the index of the FIRST vowel
// ● vowelFinder › Inputted is a string, Output is the index of the FIRST vowel
//   ReferenceError: vowelFinder is not defined

// b) Create the function that makes the test pass.
// Create function vowelFinder
// Create a for loop that looks at all indivudual character in a string
// Once a vowel is found log the index location 
// the vowel should be flexible to all 5 vowels, it should not be specific on finding one vowel first

// Failed attempt 1. 
// Not sure why this didnt work out
// const vowelFinder = (string) => {
//     for (let index = 0 ; index < string.length ; index = index + 1) {
//         if (string[index] === "a" && string[index] === "e" && string[index] === "i" &&  string[index] === "o" && string[index] === "u"){
//             return string.indexOf("[index]")
//         } else {

//         }

//     }
// }

//Failed attempt 2. 
// ... return [index]
// gave the letter of the vowel

//Failed attempt 3. 
// ... return [index].toString()
// gave all numbers into string, when the final data type is a number


const vowelFinder = (string) => {
    for (let index = 0 ; index < string.length ; index = index + 1) {
        if (string[index] === "a"){
            return Number([index])
        } else if (string[index] === "e") {
            return Number([index])
        } else if (string[index] === "i") {
            return Number([index])
        } else if (string[index] === "o") {
            return Number([index])
        } else if (string[index] === "u") {
            return Number([index])
        } else {

        }
    }
}

//SUCCESS!!!
// PASS  ./code-challenges.test.js
//   divisiblity
//     ✓ Inputted value is an object that has a property called number, Output tells us if the number is divisible by 3 (2 ms)
//   vowelFinder
//     ✓ Inputted is a string, Output is the index of the FIRST vowel
