let gameName = new String("Mamunur rashid")
// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.concat(" ", "Rashid"))
// console.log("".concat(4, 5))
// console.log(gameName.endsWith("n", gameName.length - 2))
// console.log(gameName.endsWith("rashid"))
let findWord = "rashid"
// console.log(`This word "${findWord}" ${gameName.includes(findWord)? "is"  : "is not"} in this sentence.`)
let nameString = "A red fox jump over the red dog."
let search = "fox"
// let val = `This word ${search} ${nameString.includes(search) ? "is" : "is not"} in this sentence.`
// console.log(val)

let paragraph = "You cat is beautifull then my cat."
let findCat = "cat"
let val2 = paragraph.indexOf(findCat)

let showVal = `The index of the word "${findCat}" is ${val2}`
// console.log(showVal)
let showVal2 = `The index of the second word ${findCat} is ${paragraph.indexOf(findCat, val2 + 1)}`
// console.log(showVal2)

let email = "mamunurrashid@gmail%20com"
let regex = /%20/i 
let joint = email.replace(regex, ".")
// console.log(joint)

// console.log(email.slice(7, 19))
// console.log(email.slice(-6, -3))

let para = "    A lazy dog jumps over the claver fox.  "
let spliting = para.split(" ")
// console.log(typeof spliting[6])
console.log(para.trim().toUpperCase())