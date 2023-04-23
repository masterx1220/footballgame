let score = 0
let vScore = 0
let hScoreEl = document.getElementById("hScore-el")
let clockEl = document.getElementById("clock-el")
let vScoreEl = document.getElementById("vScore-el")
let timerID = setInterval (startCountdown, 1000)
btn2El = document.getElementById("btn2")
btn3El = document.getElementById("btn3")
btn7El = document.getElementById("btn7")

function add2(){
    hScoreEl.textContent = score+= 2
    let random = Math.random()
    if(random < 0.69 ){
        vScoreEl.textContent = vScore+= 2
    }else if (random < 0.74){
        vScoreEl.textContent = vScore+= 3
    }else {
        vScoreEl.textContent = vScore+= 7
    }
}

function add3(){
    hScoreEl.textContent = score+= 3
        let random = Math.random()
    if(random < 0.65 ){
        vScoreEl.textContent = vScore+= 3
    }else if (random < 0.9){
        vScoreEl.textContent = vScore+= 2
    }else {
        vScoreEl.textContent = vScore+= 7
    }
}

function add7(){
    hScoreEl.textContent = score+= 7
    let random = Math.random()
    if(random < 0.85 ){
        vScoreEl.textContent = vScore+= 7
    }else if (random < 0.9){
        vScoreEl.textContent = vScore+= 3
    }else {
        vScoreEl.textContent = vScore+= 2
    }
}


// let startingMinutes = 00
let  time = startingSeconds = 30
let seconds = startingSeconds--;
function startCountdown(){

    seconds = startingSeconds--;
    
    clockEl.textContent = `00: ${seconds}`;
    // // time--;
    
    if(seconds === 0){
        clockEl.textContent = "Game!";
        clearInterval(timerID)
        btn2El.setAttribute("disabled", "")
        btn3El.setAttribute("disabled", "")
        btn7El.setAttribute("disabled", "") 
        
    }
}

function retry(){
    hScoreEl.textContent = score = 0
    vScoreEl.textContent = vScore = 0
    clockEl.textContent = 30

}

function reset(){
    btn2El.removeAttribute("disabled")
    btn3El.removeAttribute("disabled")
    btn7El.removeAttribute("disabled")   
}