// const currentPlayerSymbol = "x"
// const squareValues = ["" ,"", "", "", "", "","",""]

window.addEventListener("DOMContentLoaded", event => {
const currentPlayerSymbol = "o";
const squareValues = ["" ,"", "", "", "", "","",""];
const grid = document.getElementById("tic-tac-toe-board");
const xImg = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg';
const oImg = 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg';

grid.addEventListener("click", (event) => {
  const clickItem = event.target.id;
  if (clickItem.includes("square-")) {
    const boardNumber = Number.parseInt(clickItem[clickItem.length-1]);

    if(squareValues[boardNumber] === ''){
      squareValues[boardNumber] = boardNumber;
      const icon = document.createElement('img');
      
      if (currentPlayerSymbol === 'x'){
        icon.src = xImg;

        event.target.appendChild(icon);
      }
      else {
        icon.src = oImg;

        event.target.appendChild(icon);

      }


      

    }



    
  }

})

// const square = document.getElementById('square-0');
// console.log(Number.parseInt(square.id[square.id.length-1]));








})
