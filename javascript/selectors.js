const arr = [1, 2, 3, 4, 5]

const div1 = document.getElementById("first-div")


div1.style.backgroundColor = "yellow"

console.log(div1.innerHTML)
console.log(div1.innerText)

div1.innerText = "check"
div1.innerHTML = "check2"
console.log(div1.innerHTML)
console.log(div1.innerText)

// by classname.........................................

const div2 = document.getElementsByClassName("div-class")

console.log(div2)

for (let d of div2) {
    console.log(d)
}

Array.from(div2).forEach((item) => {  // type casting html collection as an array
    console.log(item.innerText)
})


// by tagname......................................................
//returns html collection

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");


for (let h of h4Elements) {
    h.style.backgroundColor = "yellow"
}
for (let l of liElements) {
    l.style.backgroundColor = "red"
}

console.log(h4Elements)


//query selector
//returns first matching element or null

const element = document.querySelector(".div-class")


//query selector all
// returns nodelist
// nodelist is similar to html collection accept they have builtin methods just like array and also nodelist is static that means it won't update automatically in the dom. html collection are live so they do.


const fruits = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "pink";


