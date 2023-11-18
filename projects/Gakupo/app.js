let score = 0;
let value = document.querySelector(".value")
const scoresound = new Audio('buy1.mp3');
let gakupo = 1;
let gakupomoney = 50
function gackupoclick(){
    if(score>=gakupomoney){
        gakupo++;
        console.log("Gackupoed!");
        score-=gakupomoney
        update()
        document.getElementById("counter").textContent = ("Gakupo counter: " + gakupo)
        gakupomoney += Math.floor(Math.random() * 50) + 10;

    }
}

function eggclick(){
    scoresound.play().then(r => {
        console.log("Sound played!", r);
    })
    update()
    score += gakupo
}
function update(){
    value.textContent = String(score);
    document.getElementById("gakstocktext").textContent = String("Gakupo Stock Market: "+gakupomoney + "$")
    if (score >= 5000){
        window.location.href = "wow.html";
        console.log("ENABLE: GLIZZY OVERDRIVE!")
    }
}
