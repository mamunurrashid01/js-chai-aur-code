let name = "Mamunur"
let age = "36"
let isLogged = true
let orio = null
let averest;

console.log(typeof age)
let chageStr = Number(age)
console.log(typeof chageStr)
console.log(typeof isLogged)
console.log(typeof orio) //null is type of object but it can convert string or number
let changeNull = String(orio)
console.log(typeof changeNull)

console.log(averest)
console.log(typeof averest)

let convertUndefine = Number(averest)
let convertUndefined = String(averest)
console.log(typeof convertUndefined) // undefine is always undefine it can not convert to number but can convert to string

let isGood = 1
let isGoods = ""
console.log(Boolean( isGoods))
console.log(typeof( isGoods))