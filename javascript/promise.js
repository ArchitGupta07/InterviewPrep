

let firstPromise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject("failed")
    }
})

firstPromise.then((message) => {
    console.log("this is in this", message)
}).catch((error) => {
    console.log('this is in the catch ', error)
})


// Promise.all........................................


const ved1 = new Promise((resolve, reject) => {
    resolve("hello a promise")
})
const ved2 = new Promise((resolve, reject) => {
    resolve("hello b promise")
})
const ved3 = new Promise((resolve, reject) => {
    resolve("hello c promise")
})

Promise.all([
    ved1,
    ved2,
    ved3

]).then((messages) => {
    console.log(messages)

})


//Promise.race...............................

Promise.race([ // it returns value as soon as one of them runs unlike promise.all which waits for all promises to run and return all there messages
    ved1,
    ved2,
    ved3

]).then((messages) => {
    console.log(messages)

})