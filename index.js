let homeScore = 0
let guestScore = 0
let countHome = document.getElementById("home-score")
let countGuest = document.getElementById("guest-score")


function inc_h_1() {
    homeScore += 1
    countHome.innerText = homeScore
}

function inc_h_2() {
    homeScore += 2
    countHome.innerText = homeScore
}

function inc_h_3() {
    homeScore += 3
    countHome.innerText = homeScore
}

function inc_g_1() {
    guestScore += 1
    countGuest.innerText = guestScore
}

function inc_g_2() {
    guestScore += 2
    countGuest.innerText = guestScore
}

function inc_g_3() {
    guestScore += 3
    countGuest.innerText = guestScore
}

function inc_h_r() {
    homeScore = 0
    countHome.innerText = homeScore
}

function inc_g_r() {
    guestScore = 0
    countGuest.innerText = guestScore
}