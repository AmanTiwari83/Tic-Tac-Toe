let boxes = document.querySelectorAll(".box")
let restart = document.querySelector(".restart")
let turn = true//player 0
let winner=document.querySelector("#winner")
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        if (turn) {
            box.innerHTML = "O"
            turn = false
        }
        else {
            box.innerHTML = "X"
            turn = true
        }
        box.disabled = true
        checkWinner()
    })
})
const checkWinner = () => {
    for ( let patterns of winPatterns) {
        let pos1val=boxes[patterns[0]].innerText
        let pos2val=boxes[patterns[1]].innerText
        let pos3val=boxes[patterns[2]].innerText
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                winner.innerHTML=pos1val+ " is  WINNER"
                boxes.forEach((box)=>{
                    box.disabled=true
                })
            }
        }
    }
    
}

restart.addEventListener("click", function () {
    // console.log("abc")
    let mode = true
    
})
