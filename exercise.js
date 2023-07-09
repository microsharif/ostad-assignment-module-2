
/* -----Exercise 01----- */

/**
 * 
 * @param {*} obj 
 * @param {*} arr 
 * @returns 
 */
const destructureExample  = ( obj, arr ) => {
    const {name, age} = obj
    const [index0 , ,index2, ,] = arr

    return {name : name, age : age}
}

const obj = { name: 'John', age: 30, city: 'New York' }

const arr = [10, 20, 30, 40]

//console.log( destructureExample( obj, arr ) )


/* -----Exercise 02----- */

/**
 * 
 * @param  {...any} numbers 
 * @returns 
 */
const sumNumbers = (...numbers) => numbers.reduce( (total, num) =>  total + num )

//console.log( sumNumbers( 1, 2, 3, 4, 5 ) )


/* -----Exercise 03----- */

/**
 * 
 * @param {*} name 
 * @returns 
 */
const createGreeting = (name) => `"Hello, ${name}! Welcome to our website."`

//console.log( createGreeting( 'Sharif' ) )


/* -----Exercise 04----- */

/**
 * 
 * @param {*} number 
 * @returns 
 */
const isEven = (number) => number % 2 === 0 ? "Even" : "Odd"

//console.log( isEven( 7 ) )


/* -----Exercise 05----- */

const multiply = (a, b) => a * b

//console.log( multiply( 3, 4 ) )


/* -----Exercise 06----- */

/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
const getLargestNumber = (num1, num2) =>  num1 > num2 || num1 === num2 ? num1 : num2

//console.log( getLargestNumber( 33, 45 ) )


/* -----Exercise 07----- */

/**
 * 
 * @param {*} address 
 * @returns 
 */
const getAddressCity  = (address) => address?.city ? address.city : "Unknown"

const address = { street: '123 Main St', city:"New York", country: 'USA' }

//console.log( getAddressCity( address ) ) 


/* -----Exercise 08----- */

/**
 * 
 * @param {*} numbers 
 * @returns 
 */
const doubleNumbers  = (numbers) => numbers.map( (num) => num * 2 )

//console.log(doubleNumbers( [1, 2, 3, 4, 5] ) )


/* -----Exercise 09----- */

/**
 * 
 * @param {*} numbers 
 * @returns 
 */
const filterEvenNumbers = (numbers) => numbers.filter( (num) => num % 2 == 0 )

//console.log( filterEvenNumbers( [1,2,3,4,5] ) )


/* -----Exercise 10----- */

/**
 * 
 * @param {*} numbers 
 * @returns 
 */
const sumArray = (numbers) => numbers.reduce( (total, num) => total + num )

//console.log(sumArray( [1, 2, 3, 4, 5] ) )


/* -----Exercise 11----- */

/**
 * 
 * @param {*} numbers 
 * @returns 
 */
const sortNumbers = (numbers) => [...numbers].sort()

//console.log( sortNumbers( [5, 2, 8, 1, 4] ) )