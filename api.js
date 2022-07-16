// function fun(response)
// {
//     console.log("The values passed is " + response)
//     let ele = document.getElementById("para");
//     ele.innerText = response;
// }
// console.log("hello")
// // const options = {
// // 	method: 'GET',
// //     url : 'rapidapi.com',
// // 	headers: {
// // 		'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com',
// // 		'X-RapidAPI-Key': '63da27458dmsh06bbea38526b821p1c236fjsne0da6bf5b472'
// // 	}
// // };

// // fetch('https://sudoku-board.p.rapidapi.com/new-board?diff=3&stype=list&solu=true', options)
// // 	.then(response => response.json())
// // 	.then(response => {
// //         console.log(response);
// //     })
// // 	.catch(err => console.error(err));


// **********************************************************************************************

// let val = 2;
// const options = {
// 	method: 'GET',
//     url : 'rapidapi.com',
// 	headers: {
// 		'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com',
// 		'X-RapidAPI-Key': '63da27458dmsh06bbea38526b821p1c236fjsne0da6bf5b472'
// 	}
// };

// fetch('https://sudoku-board.p.rapidapi.com/new-board?diff='+val+'&stype=list&solu=true', options)
// 	.then(response => response.json())
// 	.then(response => 
//         {
//         console.log(response)
//         console.log(response.response.difficulty)
//         fun(response.response.difficulty)
//         })
// 	.catch(err => console.error(err));

// *********************************************************************************************

function render(data,level)
{
    let str = "";

    for(let i = 0;i<9;i++)
    {
        for(let j = 0;j<9;j++)
        {
            str += data[i][j];
        }
        str += "\n";
    }
    str += "level " + level;
    let paraEle = document.getElementById("para");
    paraEle.innerText = str;
}


function easy()
{
    let level = 1;

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
            console.log(tdata)
            let t = Object.values(tdata);
            console.log(t);
            let t1 = Object.values(t[0]);
            console.log(t1)
            let t2 = Object.values(t1[2]);
            console.log(t2)
            console.log(t2[0])
            console.log(t2[1])
            console.log(t2[0][0])   
            render(t2,level);
         })
    	.catch(err => console.error(err));
}

function medium()
{
    let level = 2;

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
            console.log(tdata)
            let t = Object.values(tdata);
            console.log(t);
            let t1 = Object.values(t[0]);
            console.log(t1)
            let t2 = Object.values(t1[2]);
            console.log(t2)
            console.log(t2[0])
            console.log(t2[1])
            console.log(t2[0][0])   
            render(t2,level);
         })
    	.catch(err => console.error(err));
}

function hard()
{
    let level = 3;

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
            console.log(tdata)
            let t = Object.values(tdata);
            console.log(t);
            let t1 = Object.values(t[0]);
            console.log(t1)
            let t2 = Object.values(t1[2]);
            console.log(t2)
            console.log(t2[0])
            console.log(t2[1])
            console.log(t2[0][0])   
            render(t2,level);
         })
    	.catch(err => console.error(err));
}


