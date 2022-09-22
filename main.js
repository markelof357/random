const container = document.querySelector(".container")

let names = [
    "Muhammadjon",
    "Anasbek",
    "Abdulaziz",
    "Humoyun",
    "Islomjon",
    "Jasurbek"
]

function btn(){
    let index = Math.floor(Math.random() * names.length)
    let b = document.createElement("button")
    b.classList.add("btn")
    b.innerHTML = `Hello ${names[index]}`
    container.appendChild(b)
}



// // switch = if
// switch(){

// }

// // function types in js
// function foo(){
//     return
// }

// const ar = ()=>{}

// const bar = function(){}

