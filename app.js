const tel = document.querySelector(".tel")
const btn = document.querySelector(".btn")
const audio = document.querySelector(".audio")
const img = document.querySelector(".img")

let x = 9.1
// round = yaxlitlash matematik
console.log( Math.round(x) );
// floor = pastga yaxlitlash
console.log( Math.floor(x) );
// ceil = tepaga yaxlitlash
console.log( Math.ceil(x) );
// pow = daraja 
console.log( Math.pow(5, 3) );
// sqrt = ildiz topish
console.log( Math.sqrt(36) );
// abs = module
console.log( Math.abs(-45) );
// random = 0 dan 1 gacha ixtiyoriy son chiqadi
let son = Math.random() * 10


let index = Math.floor( Math.random() * 10 )

console.log(index);


let omadShow = [
    "99 435 75 53",
    "99 362 33 55",
    "99 486 75 53",
    "99 299 53 54",
    "97 254 33 11"
]


function omad(){
    audio.pause()
    btn.style.display = "none"
        tel.style.marginTop = "0px"
        img.style.display = "none"

    let int = setInterval(function(){
        let randomNumber = Math.floor( Math.random() * omadShow.length )
        tel.innerHTML = "+998 " + omadShow[randomNumber] ;
    }, 100)
    
    setTimeout(function(){
        clearInterval(int)
        tel.style.marginTop = "-1050px"
        btn.style.display = "inline-block"
        tel.style.textShadow = " 5px 5px 10px red"
        tel.style.color = "dodgerblue"
        img.style.display = "block"
        audio.setAttribute("src", "./victory.mp3")
        audio.play()
    }, 2000)
}