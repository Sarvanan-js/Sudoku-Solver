var numSelected = null;
var tileSelected = null;
var errors = 0;
var level = 1;
var userChoice = 0;
var board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]

var colour = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]

window.onload = function()
{
    setGame();
}

function setGame()
{
    for(let i = 1;i<=9;i++)
    {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for(let r = 0;r<9;r++)
    {
        for(let c = 0;c<9;c++)
        {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click",selectTile);
            tile.innerText = "";
            if(r == 2 || r == 5)
            {
                tile.classList.add("horizontal-line");
            }

            if(c == 2 || c == 5)
            {
                tile.classList.add("vertical-line")
            }

            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }

    let leveBtn = document.getElementById("easy-btn");
    leveBtn.classList.add("level-button-selected");
}

function selectNumber()
{
    if(numSelected != null)
    {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    // doubt learn more about "this" in javascript
    numSelected.classList.add("number-selected");
}


function selectTile()
{
    tileSelected = this;
    if(numSelected && userChoice === 0)
    {
        let cords = tileSelected.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);
        if(tileSelected.innerText == "")
        {
            if(board[r][c] == numSelected.id)
            {
                tileSelected.innerText = numSelected.id;
                tileSelected.classList.add("green");
            }
            else
            {
                errors++;
                let errorsBtn = document.getElementById("errors");
                errorsBtn.innerText = errors;
            }
        }
    }

    else if(numSelected && userChoice === 1)
    {
        let cords = tileSelected.id.split("-");
        let r = parseInt(cords[0]);
        let c = parseInt(cords[1]);

        if(board[r][c] == 0)
        {
            tileSelected.innerText = numSelected.id;
            tileSelected.classList.add("red")
            board[r][c] = numSelected.id;
            colour[r][c] = 1;
        }
    }
}

function solve1()
{

    if(userChoice == 0)
    {
        for(let i = 0;i<9;i++)
        {
            for(let j = 0;j<9;j++)
            {
                let ele1 = document.getElementById(i.toString() + "-" + j.toString());
                if(ele1.innerText == "")
                {
                    ele1.innerText = board[i][j];
                    ele1.classList.add("green");
                }
            }
        }
    }

    else if(userChoice == 1)
    {
        for(let i = 0;i<9;i++)
        {
            for(let j = 0;j<9;j++)
            {
                let ele = document.getElementById(i.toString() + "-" + j.toString());
                if(ele.innerText != "")
                {
                    if(!isValid(board,i,j,board[i][j]))
                    {
                        let para = document.getElementById("para");
                        para.innerText = "This is unsolveable";
                        return;
                    }
                }
            }
        }
        solve(board);
        for(let i = 0;i<9;i++)
        {
            for(let j = 0;j<9;j++)
            {
                let ele = document.getElementById(i.toString() + "-" + j.toString());
                if(ele.innerText == "")
                {
                    ele.innerText = board[i][j];
                    ele.classList.add("green");
                }
            }
        }
    }

}

function isValid(board,row,col,c)
{
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

function solve(board)
{
    for(let i = 0;i<board.length;i++)
    {
        for(let j = 0;j<board[i].length;j++)
        {
            if(board[i][j] == 0)
            {
                for(let c = 1; c <= 9;c++)
                {
                    if(isValid(board,i,j,c) == true)
                    {
                        board[i][j] = c;
                        if(solve(board) == true)
                            return true;
                        else
                        {
                            board[i][j] = 0;
                        }

                    }
                }

                return false;
            }
        }
    }

    return true;
}



function reset()
{
    errors = 0;
    let errorsEle = document.getElementById("errors");
    errorsEle.innerText = 0;
    for(let i = 0;i<9;i++)
    {
        for(let j = 0;j<9;j++)
        {
            let ele1 = document.getElementById(i.toString() + "-" + j.toString());
            ele1.innerText = "";
            board[i][j] = 0;

            if(ele1.classList.contains("red"))
                ele1.classList.remove("red");
            else if(ele1.classList.contains("green"))
                ele1.classList.remove("green");

            colour[i][j] = 0;
        }
    }
}


function render(data,level)
{
    reset(); 
    // calling the reset function to erase the older cells

    for(let i = 0;i<9;i++)
    {
        for(let j = 0;j<9;j++)
        {
            if(data[i][j] != 0)
            {
                board[i][j] = data[i][j];
                colour[i][j] = 1;
                let t = document.getElementById(i.toString() + "-" + j.toString());
                t.classList.add("red");
                t.innerText = board[i][j];
            }
        }
    }

    solve(board);
}

function user_input()
{
    reset();
    userChoice = 1;
}


function easy()
{
    if(level == 2)
    {
        let leveBtn = document.getElementById("medium-btn");
        leveBtn.classList.remove("level-button-selected");
    }

    else if(level == 3)
    {
        let leveBtn = document.getElementById("hard-btn");
        leveBtn.classList.remove("level-button-selected");
    }
    userChoice = 0;
    level = 1;
    let leveBtn = document.getElementById("easy-btn");
    leveBtn.classList.add("level-button-selected");
}

function medium()
{
    if(level == 1)
    {
        let leveBtn = document.getElementById("easy-btn");
        leveBtn.classList.remove("level-button-selected");
    }

    else if(level == 3)
    {
        let leveBtn = document.getElementById("hard-btn");
        leveBtn.classList.remove("level-button-selected");
    }
    userChoice = 0;
    level = 2;
    let leveBtn = document.getElementById("medium-btn");
    leveBtn.classList.add("level-button-selected");
}

function hard()
{
    if(level == 1)
    {
        let leveBtn = document.getElementById("easy-btn");
        leveBtn.classList.remove("level-button-selected");
    }

    else if(level == 2)
    {
        let leveBtn = document.getElementById("medium-btn");
        leveBtn.classList.remove("level-button-selected");
    }
    userChoice = 0;
    level = 3;
    let leveBtn = document.getElementById("hard-btn");
    leveBtn.classList.add("level-button-selected");
}

function newGame()
{
    const options = {
    	method: 'GET',
        url : 'rapidapi.com',
    	headers: {
    		'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com',
    		'X-RapidAPI-Key': '63da27458dmsh06bbea38526b821p1c236fjsne0da6bf5b472'
    	}
    };

    fetch('https://sudoku-board.p.rapidapi.com/new-board?diff='+level+'&stype=list&solu=true', options)
    	.then(tdata => tdata.json())
    	.then(tdata => 
            {
            let t = Object.values(tdata);
            let t1 = Object.values(t[0]);
            let t2 = Object.values(t1[2]);
            console.log(t1[2]);
            render(t2,level);
         })
    	.catch(err => console.error(err));
}
