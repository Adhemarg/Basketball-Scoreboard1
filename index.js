
let countH = document.getElementById("countHome")
let countG = document.getElementById("countGuest")

let countHome = 0
let countGuest = 0

function plus1pointH() {
    countHome +=1
    countH.textContent = countHome
}
function plus2pointH() {
    countHome +=2
    countH.textContent = countHome
}
function plus3pointH() {
    countHome +=3
    countH.textContent = countHome
}
function plus1pointG() {
    countGuest +=1
    countG.textContent = countGuest
}
function plus2pointG() {
    countGuest +=2
    countG.textContent = countGuest
}
function plus3pointG() {
    countGuest +=3
    countG.textContent = countGuest
}

