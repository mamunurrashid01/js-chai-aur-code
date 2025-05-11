// there are two type of data in js
// primitive and non primitive
// ### primitive data type-----
/**
 * string
 * number
 * boolean
 * null 
 * undefine
 * bigInt
 * symbol */ 
// ## Non primitive data-------
/**
 * Array
 * Object
 * Function
 */

// in js unique id create then use symbol

const id = Symbol("123")
let anotherId = Symbol("123")
console.log(id === anotherId)