// function isValid(board,row,col,c)
// {
//   for (let i = 0; i < 9; i++) {
//     if (board[i][col] == c)
//       return false;

//     if (board[row][i] == c)
//       return false;

//     if (board[3 * (Math.floor(row / 3)) + Math.floor(i / 3)][3 * (Math.floor(col / 3)) + i % 3] == c)
//       return false;
//   }
//   return true;
// }
// let c = 0;
// function solve(board)
// {

//     for(let i = 0;i<board.length;i++)
//     {
//         for(let j = 0;j<board[i].length;j++)
//         {
//             if(board[i][j] == 0)
//             {
//                 for(let c = 1; c <= 9;c++)
//                 {
//                     if(isValid(board,i,j,c) == true)
//                     {
//                         board[i][j] = c;
//                         if(solve(board) == true)
//                             return true;
//                         else
//                             board[i][j] = 0;
//                     }
//                 }

//                 return false;
//             }
//         }
//     }

//     return true;
// }



// var board = [
//     [0,0,7,4,9,1,6,0,5],
//     [2,0,0,0,6,0,3,0,9],
//     [0,0,0,0,0,7,0,1,0],
//     [0,5,8,6,0,0,0,0,4],
//     [0,0,3,0,0,0,0,9,0],
//     [0,0,6,2,0,0,1,8,7],
//     [9,0,4,0,7,0,0,0,2],
//     [6,7,0,8,3,0,0,0,0],
//     [8,1,0,0,4,5,0,0,0],
// ]

// // var board = [
// //     [3,8,7,4,9,0,6,2,5],
// //     [2,4,1,5,6,8,3,7,9],
// //     [5,6,9,3,2,7,4,1,8],
// //     [7,5,8,6,1,9,2,3,4],
// //     [1,2,3,7,8,4,5,9,6],
// //     [4,9,6,2,5,3,1,8,7],
// //     [9,3,4,1,7,6,8,5,2],
// //     [6,7,5,8,3,2,9,4,1],
// //     [8,1,2,9,4,5,7,6,3]
// // ]

// for(let i = 0;i<9;i++)
// {
//     console.log(board[i]);
// }
// for(let i = 0;i<5;i++)
// {
//     console.log("saran")
// }
// solve(board)

// for(let i = 0;i<9;i++)
// {
//     console.log(board[i]);
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com',
		'X-RapidAPI-Key': '63da27458dmsh06bbea38526b821p1c236fjsne0da6bf5b472'
	}
};

fetch('https://sudoku-generator1.p.rapidapi.com/sudoku/generate?seed=1337', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


