var numSelected = null;
var tileSelected = null;
var levelSelected = -1;
var errors = 0;
var userChoice = 0;

var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

window.onload = function () {
    setGame();
}

function setGame() {

    // insert number from 1 to 9 in the div digits
    for (let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", selectTile);
            tile.innerText = "";
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }

            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line")
            }

            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function easy() {
    if (levelSelected != -1) {
        // 1 - easy 2-medium 3 - difficult
        if (levelSelected === 1) {
            document.getElementById("easy-btn").classList.remove("level-button");
        }
        else if (levelSelected === 2) {
            document.getElementById("medium-btn").classList.remove("level-button");
        }
        else if (levelSelected === 3) {
            document.getElementById("hard-btn").classList.remove("level-button");
        }
        else if (levelSelected === 4) {
            document.getElementById("user_input-btn").classList.remove("level-button");
        }
    }

    document.getElementById("easy-btn").classList.add("level-button");
    levelSelected = 1;
}

function medium() {

    if (levelSelected != -1) {
        // 1 - easy 2-medium 3 - difficult
        if (levelSelected === 1) {
            document.getElementById("easy-btn").classList.remove("level-button");
        }
        else if (levelSelected === 2) {
            document.getElementById("medium-btn").classList.remove("level-button");
        }
        else if (levelSelected === 3) {
            document.getElementById("hard-btn").classList.remove("level-button");
        }
        else if (levelSelected === 4) {
            document.getElementById("user_input-btn").classList.remove("level-button");
        }
    }

    document.getElementById("medium-btn").classList.add("level-button");
    levelSelected = 2;
}

function hard() {
    if (levelSelected != -1) {
        // 1 - easy 2-medium 3 - difficult
        if (levelSelected === 1) {
            document.getElementById("easy-btn").classList.remove("level-button");
        }
        else if (levelSelected === 2) {
            document.getElementById("medium-btn").classList.remove("level-button");
        }
        else if (levelSelected === 3) {
            document.getElementById("hard-btn").classList.remove("level-button");
        }
        else if (levelSelected === 4) {
            document.getElementById("user_input-btn").classList.remove("level-button");
        }
    }

    document.getElementById("hard-btn").classList.add("level-button");
    levelSelected = 3;
}

function selectNumber() {
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    // doubt learn more about "this" in javascript
    numSelected.classList.add("number-selected");
}


function selectTile() 
{
    tileSelected = this;
    let flag = 0;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] != 0) {
                flag = 1;
                break;
            }

        }
    }

        if (flag == 0 && userChoice == 0) // if the puzzle is not rendered (i.e the game has not yet started)  
            return;

    if (numSelected && userChoice === 0) {
        let cords = tileSelected.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);
        if (tileSelected.innerText == "") {
            if (board[r][c] == numSelected.id) {
                tileSelected.innerText = numSelected.id;
                tileSelected.classList.add("green");
            }
            else {
                errors++;
                let errorsBtn = document.getElementById("errors");
                errorsBtn.innerText = errors;
            }
        }
    }

    else if (numSelected && userChoice === 1) {
        let cords = tileSelected.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);

        if (board[r][c] == 0) {
            tileSelected.innerText = numSelected.id;
            tileSelected.classList.add("red")
            board[r][c] = numSelected.id;
        }
    }
}

function solve1() {
    if (userChoice == 0) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let ele1 = document.getElementById(i.toString() + "-" + j.toString());
                if (ele1.innerText == "") {
                    if(board[i][j] == 0) // when the sudoku is not rendered in the table.
                        return;
                    ele1.innerText = board[i][j];
                    ele1.classList.add("green");
                }
            }
        }
    }

    else if (userChoice == 1) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let ele = document.getElementById(i.toString() + "-" + j.toString());
                if (ele.innerText != "") {
                    if (!isValid(board, i, j, board[i][j])) {
                        let para = document.getElementById("para");
                        para.innerText = "This is unsolveable";
                        return;
                    }
                }
            }
        }
        solve(board);
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let ele = document.getElementById(i.toString() + "-" + j.toString());
                if (ele.innerText == "") {
                    ele.innerText = board[i][j];
                    ele.classList.add("green");
                }
            }
        }
    }

}

function isValid(board, row, col, c) {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] == c && i != row)
            return false;

        if (board[row][i] == c && i != col)
            return false;

        let r1 = 3 * (Math.floor(row / 3)) + Math.floor(i / 3);
        let c1 = 3 * (Math.floor(col / 3)) + i % 3;
        if (board[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] == c && !(r1 == row && c1 == col))
            return false;
    }
    return true;
}

function solve(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == 0) {
                for (let c = 1; c <= 9; c++) {
                    if (isValid(board, i, j, c) == true) {
                        board[i][j] = c;
                        if (solve(board) == true)
                            return true;
                        else
                            board[i][j] = 0;
                    }
                }

                return false;
            }
        }
    }

    return true;
}



function reset() {
    errors = 0;
    let errorsEle = document.getElementById("errors");
    errorsEle.innerText = 0;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let ele1 = document.getElementById(i.toString() + "-" + j.toString());
            ele1.innerText = "";
            board[i][j] = 0;

            if (ele1.classList.contains("red"))
                ele1.classList.remove("red");
            else if (ele1.classList.contains("green"))
                ele1.classList.remove("green");

        }
    }
}


function render(data, level) {
    reset();
    // calling the reset function to erase the older cells
    let paraEl = document.getElementById("para");
    paraEl.innerText = "";
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (data[i][j] != 0) {
                board[i][j] = data[i][j];
                // colour[i][j] = 1;
                let t = document.getElementById(i.toString() + "-" + j.toString());
                t.classList.add("red");
                t.innerText = board[i][j];
            }
        }
    }

    solve(board);
}

function user_input() {
    reset();

    if (levelSelected != -1) {
        // 1 - easy 2-medium 3 - difficult
        if (levelSelected === 1) {
            document.getElementById("easy-btn").classList.remove("level-button");
        }
        else if (levelSelected === 2) {
            document.getElementById("medium-btn").classList.remove("level-button");
        }
        else {
            document.getElementById("hard-btn").classList.remove("level-button");
        }
        levelSelected = -1;
    }

    document.getElementById("user_input-btn").classList.add("level-button");
    levelSelected = 4;
    userChoice = 1;
}


function newGame() {
    userChoice = 0;
    let level = levelSelected;
    const options = {
        method: 'GET',
        url: 'rapidapi.com',
        headers: {
            'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com',
            'X-RapidAPI-Key': '63da27458dmsh06bbea38526b821p1c236fjsne0da6bf5b472'
        }
    };

    fetch('https://sudoku-board.p.rapidapi.com/new-board?diff=' + level + '&stype=list&solu=true', options)
        .then((tdata) => tdata.json())
        .then((tdata) => {
            let t = Object.values(tdata);
            let t1 = Object.values(t[0]);
            console.log(t1[2]);
            render(t1[2], level);
        })
        .catch(err => console.error(err));
}


// https://rapidapi.com/andrewarochukwu/api/sudoku-board/
