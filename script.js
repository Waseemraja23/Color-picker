let redbox = document.querySelector(".red");
let bluebox = document.querySelector(".blue");
let greenbox = document.querySelector(".green");
let purplebox = document.querySelector(".purple");
let pinkbox = document.querySelector(".pink");
let orangebox = document.querySelector(".orange");
let yellowbox = document.querySelector(".yellow");
let blackbox = document.querySelector(".black");
let colorbox = document.querySelector(".color")

       /*Simple method without loop*/

// redbox.addEventListener('click', function () {
//     colorbox.style.backgroundColor = "red"
//     colorbox.textContent = "Red color"
//     colorbox.style.color = "white"
// })


const nam = [redbox, bluebox, greenbox, purplebox, pinkbox, orangebox, yellowbox, blackbox]
const color = ["red", "blue", "green", "purple", "pink", "orange", "yellow", "black"]


nam.forEach((value,index)=>{
    value.addEventListener('click', function () {
    colorbox.style.backgroundColor = color[index]
    if(color[index]==="black"){
        colorbox.style.color = "white"
    }
    else{
        colorbox.style.color = "black"
    }
})
})




