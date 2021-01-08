let currentPlayerSymbol = "x"
// const squareValues = ["" ,"", "", "", "", "","",""]
let gameStatus = ""



function checkGameStatus(arr) {
  if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== "") {
    gameStatus = arr[0].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  }
  else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== "") {
    gameStatus = arr[3].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[6] !== "") {
    gameStatus = arr[6].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[0] !== "") {
    gameStatus = arr[0].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== "") {
    gameStatus = arr[1].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== "") {
    gameStatus = arr[2].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== "") {
    gameStatus = arr[0].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== "") {
    gameStatus = arr[2].toUpperCase();
    document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
    document.getElementById('new-game').disabled = false;
    return
  }
    else if (gameStatus === "") {
      let isGridFull = true
      arr.forEach((el) => {
        if(el === "") {
          isGridFull = false;
          
        }
      })
      if (isGridFull) {
        gameStatus = "NONE";
        document.getElementById('game-status').innerHTML = "Winner: " + gameStatus;
        document.getElementById('new-game').disabled = false;
      }
      }
    }




window.addEventListener("DOMContentLoaded", event => {
  // let currentPlayerSymbol = "o";
  const squareValues = ["", "", "", "", "", "", "", "", ""];
  const grid = document.getElementById("tic-tac-toe-board");
  const xImg = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
  const oImg = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';

  grid.addEventListener("click", (event) => {
    if (gameStatus !== "") return;
    const clickItem = event.target.id;
    if (clickItem.includes("square-")) {
      const boardNumber = Number.parseInt(clickItem[clickItem.length - 1]);

      if (squareValues[boardNumber] === '') {
        squareValues[boardNumber] = currentPlayerSymbol;
        const icon = document.createElement('img');
        if (currentPlayerSymbol === 'x') {
          icon.src = xImg;

          event.target.appendChild(icon);
          currentPlayerSymbol = "o"
        }
        else {
          icon.src = oImg;

          event.target.appendChild(icon);
          currentPlayerSymbol = "x"
        }

        checkGameStatus(squareValues);


      }

    }

  })

  // const square = document.getElementById('square-0');
  // console.log(Number.parseInt(square.id[square.id.length-1]));

})
