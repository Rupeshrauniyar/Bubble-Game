const hitterCont = document.querySelector(".hitterCont")
const displayHitter = document.querySelector(".hits")
const timeDiv = document.querySelector(".time")
const scoreDiv = document.querySelector(".score")
let RandomNo = ''
let RandomHitter = ''
let clickedHitter = ''
let Time = 2
let score = 0

let clutter = ""

function RandomHittersGenerator() {
    for (let i = 0; i < 152; i++) {
        RandomNo = Math.floor(Math.random() * 10)
        clutter += `<p class="hitIt text-white w-[55px] h-[55px] rounded-full flex items-center justify-center hitter mr-1 ml-1 mb-1 cursor-pointer" id=${RandomNo}>${RandomNo}</p>`

        hitterCont.innerHTML = clutter;

    }
}
function AsignHitter() {
    RandomHitter = Math.floor(Math.random() * 10)
    displayHitter.innerHTML = RandomHitter
}
function Timer() {
    var TimeInterval = setInterval(function () {
        Time--
        timeDiv.innerHTML = Time
        if (Time === 0) {
            hitterCont.innerHTML = `<div class="flex flex-col items-center justify-center">
            <p>Game Over.</p>
            
            <p class="flex items-center justify-center">Your total score is <h3 class="ml-1 font-semibold text-3xl">${score}</h3></p>
            <button class="restart bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-2" onclick="location.reload()">Play Again</button>
            </div>`
            clearInterval(TimeInterval)
        }


    }, 1000)



}
function ScoreAssigner() {
    const hitIts = document.querySelectorAll(".hitIt")
    hitIts.forEach((hitIt) => {
        hitIt.addEventListener("click", function (dets) {
            if (dets.target.id === RandomHitter.toString()) {
                score += 10
                scoreDiv.innerHTML = score;
            }
            else {
                score -= 5
                scoreDiv.innerHTML = score;
            }
            AsignHitter()
        })

    })



}
function restartGame() {
    var restartbtn = document.querySelector(".restart")
    restartbtn.addEventListener("click", function () {
        RandomHittersGenerator()
        AsignHitter()
        Timer()
        ScoreAssigner()
    })
}

RandomHittersGenerator()
AsignHitter()
Timer()
ScoreAssigner()

