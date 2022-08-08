
const gameBoard = document.getElementById("gameBoard")
const context = gameBoard.getContext("2d")
const winnerText = document.getElementById("winner")

let winner

context.strokeRect(0, 0, 100, 50)
context.strokeRect(0, 50, 100, 50)
context.strokeRect(0, 100, 100, 50)

context.strokeRect(100, 0, 100, 50)
context.strokeRect(100, 50, 100, 50)
context.strokeRect(100, 100, 100, 50)

context.strokeRect(200, 0, 100, 50)
context.strokeRect(200, 50, 100, 50)
context.strokeRect(200, 100, 100, 50)

let ChoosenOrNot = [false, false, false, false, false, false, false, false, false]
let IndexSign = ["g", "f", "b", "m", "e", "a", "h", "i", "1"]

let currentTurn = "O"

gameBoard.addEventListener("click", e => {
    if (e.x > gameBoard.offsetLeft ) {
        if (e.y > gameBoard.offsetTop) {
            if (e.y < (gameBoard.offsetTop + gameBoard.offsetHeight/3)) {
                if (e.x < (gameBoard.offsetLeft + gameBoard.offsetWidth/3)) {
                    if (!ChoosenOrNot[0]) {
                        IndexSign[0] = currentTurn
                        drawSign(35, 45, 30)
                        ChoosenOrNot[0] = true
                        checkWinner()
                    }
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 2))   &&   e.x  > (gameBoard.offsetLeft + (gameBoard.offsetWidth/3))) {
                    if (!ChoosenOrNot[1]) {
                        IndexSign[1] = currentTurn
                        drawSign(135, 45, 30)
                        ChoosenOrNot[1] = true
                        checkWinner()
                    }
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 3))   &&   e.x  > (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 2))) {
                    if (!ChoosenOrNot[2]) {
                        IndexSign[2] = currentTurn
                        drawSign(235, 45, 30)
                        ChoosenOrNot[2] = true
                        checkWinner()
                    }
                }
            } else if (e.y < (gameBoard.offsetTop + ((gameBoard.offsetHeight/3)*2))    &&     e.y > (gameBoard.offsetTop + (gameBoard.offsetHeight/3))) {
                if (e.x < (gameBoard.offsetLeft + gameBoard.offsetWidth/3)) {
                    if (!ChoosenOrNot[3]) {
                        IndexSign[3] = currentTurn
                        drawSign(35, 95, 30)
                        ChoosenOrNot[3] = true
                        checkWinner()
                    }
                    checkWinner()
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 2))   &&   e.x  > (gameBoard.offsetLeft + (gameBoard.offsetWidth/3))) {
                    if (!ChoosenOrNot[4]) {
                        IndexSign[4] = currentTurn
                        drawSign(135, 95, 30)
                        ChoosenOrNot[4] = true
                        checkWinner()
                    }
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 3))   &&   e.x  > (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3)*2))) {
                    if (!ChoosenOrNot[5]) {
                        IndexSign[5] = currentTurn
                        drawSign(235, 95, 30)
                        ChoosenOrNot[5] = true
                        checkWinner()
                    }
                }
            } else if (e.y < (gameBoard.offsetTop + (gameBoard.offsetHeight/3)*3)     &&     e.y > (gameBoard.offsetTop + (gameBoard.offsetHeight/3)*2)) {
                if (e.x < (gameBoard.offsetLeft + gameBoard.offsetWidth/3)) {
                    if (!ChoosenOrNot[6]) {
                        IndexSign[6] = currentTurn
                        drawSign(35, 145, 30)
                        ChoosenOrNot[6] = true
                        checkWinner()
                    }
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 2))   &&   e.x  > (gameBoard.offsetLeft + (gameBoard.offsetWidth/3))) {
                    if (!ChoosenOrNot[7]) {
                        IndexSign[7] = currentTurn
                        drawSign(135, 145, 30)
                        ChoosenOrNot[7] = true
                        checkWinner()
                    }
                } else if (e.x  < (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 3))   &&   e.x  > (gameBoard.offsetLeft + ((gameBoard.offsetWidth/3) * 2))) {
                    if (!ChoosenOrNot[8]) {
                        IndexSign[8] = currentTurn
                        drawSign(235, 145, 30)
                        ChoosenOrNot[8] = true
                        checkWinner()
                    }
                }
            }
        }
    }    
})


function drawSign(x, y, max_width) {
    context.font = "40pt Arial";
    context.fillText(currentTurn, x, y, max_width)

    if (currentTurn == "O") {
        currentTurn = "X"
    } else if (currentTurn == "X") {
        currentTurn = "O"
    }
}


function checkWinner() {
    if (IndexSign[0] == IndexSign[1] && IndexSign[0] == IndexSign[2]) {
        winner = IndexSign[0]
        winnerText.innerHTML = "winner is : " + winner
    } else if (IndexSign[3] == IndexSign[4] && IndexSign[4] == IndexSign[5]) {
        winner = IndexSign[3]
        winnerText.innerHTML = "winner is : " + winner
    } else if (IndexSign[6] == IndexSign[7] && IndexSign[7] == IndexSign[8]) {
        winner = IndexSign[6]
        winnerText.innerHTML = "winner is : " + winner
    }

    if (IndexSign[0] == IndexSign[3] && IndexSign[3] == IndexSign[6]) {
        winner = IndexSign[0]
        winnerText.innerHTML = "winner is : " + winner
    } else if (IndexSign[1] == IndexSign[4] && IndexSign[4] == IndexSign[7]) {
        winner = IndexSign[1]
        winnerText.innerHTML = "winner is : " + winner
    } else if (IndexSign[2] == IndexSign[5] && IndexSign[5] == IndexSign[8]) {
        winner = IndexSign[2]
        winnerText.innerHTML = "winner is : " + winner
    }

    if (IndexSign[0] == IndexSign[4] && IndexSign[4] == IndexSign[8]) {
        winner = IndexSign[0]
        winnerText.innerHTML = "winner is : " + winner
    } else if (IndexSign[2] == IndexSign[4] && IndexSign[4] == IndexSign[6]) {
        winner = IndexSign[2]
        winnerText.innerHTML = "winner is : " + winner
    }
}

