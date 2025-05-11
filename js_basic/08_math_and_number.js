let num1 = 1000000
let num2 = new Number(400).toFixed(2).split(" ")
// console.log(num1, num2)
let convert = num1.toLocaleString("en-BD")
// console.log(convert)
let anotherNumber = 1234.4567
// console.log(anotherNumber.toPrecision(6))
// +++++++++++++Maths+++++++++++++++++++++

// console.log(Math)
// console.log(Math.PI)
// console.log(Math.ceil(78.1))
// console.log(Math.floor(78.9))
// console.log(Math.round(78.5))
// console.log(Math.floor(Math.random() * 10 + 1))

let min = 10
let max = 50

let result = Math.floor((Math.random()* (max - min +1) )+  min)
console.log(result)