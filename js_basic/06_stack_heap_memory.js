// There two type memory in here
// 01.stack memory(in stack memory go through primitive data )
// 02.heap memory(in heap memory go through Non-primitive data type.)

let myYouTubeChannel = "chemiphyElearning"

let mySecondyouTubeChannel = myYouTubeChannel
mySecondyouTubeChannel = "MamunurRashid.com"
// console.log(myYouTubeChannel)
// console.log(mySecondyouTubeChannel)

// That means in primitive data type never change it's original value

let userOne = {
    email:"mamunurrahid@gamil.com",
    userId:"1235"
}


let usertwo = userOne
usertwo.email = "noorRasshid@gamil.com"

console.log(userOne.email)
console.log(usertwo.email)

// And in Non-Primitive data type change it's original valuse. that means change it's reference.