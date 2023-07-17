


//define raw API data for storage
var raw;
//this raw doesn't do anything, i don't know why

  async function gainsheet() {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const rawAPI = await response.json();
    console.log(rawAPI)
      let boardSolution = rawAPI.newboard.grids[0].solution;
      let boardValue = rawAPI.newboard.grids[0].value;
      console.log(boardValue)
      //nest function/or call back?
      bb => {for (let i = 1; i <= 9; i++){
        //<div id=i class number> i <div>
        let numberBox = document.createElement('div')
        numberBox.id = i
        numberBox.innerText = i
        numberBox.addEventListener('click', ()=>console.log('jeb'))
        numberBox.classList.add('number')
        document.getElementById('digits').appendChild(numberBox)
      }
    
      //board 9x9, easy!
      for(let r = 1; r <= 9; r++){
        //each row and each col
        for(let c = 1; c <= 9; c++){
          let box = document.createElement('div');
          box.id = r.toString() + '-' + c.toString();
          if(boardValue[r][c] != '0'){
            box.innerText = boardvalue[r][c]
            box.classList.add('box-start')
            //skipping 0 in the begining value
          }
          if (r == 2 || r==5){
            box.classList.add('horizontal-line')}
          if (c == 2 || c == 5) {
            box.classList.add("vertical-line");
            //add line
          }
          box.addEventListener("click", ()=>console.log('jebjeb'));
          box.classList.add("box");
          document.getElementById("board").append(box);
        }
      }}
  }


 


// async function gainRaw(){
// fetch("https://sudoku-api.vercel.app/api/dosuku")
//      .then(response => {
//         return response.json();
//     })
//     .then( users => {raw = users; console.log()}
//     )}

// have no fucking idea why doesn't the code above work

//third Try!
// fetch('https://sudoku-api.vercel.app/api/dosuku')
//   .then(res => {
//     return res.json();
//   })
//   .then(raw => {
//     console.log(raw);
//     newBoard => {
//       raw.newboard.grid[0];
//       console.log(newBoard)
//     }
//     soluion => {
//     }
//   })
//   .catch( error => console.log(error))

//asign cordnite for number selected also tile that is selected
    //error feature for scoring
    var numberSelected = null
    var tileSelected = null;
    var error = 0;
//trying to fucking get the board, it doesn't let me extract the property of raw what the heck


 //start game once window load 
window.onload = gainsheet()

  
function setGame(){
  //digit 1-9 input bar
  for (let i = 1; i <= 9; i++){
    //<div id=i class number> i <div>
    let numberBox = document.createElement('div')
    numberBox.id = i
    numberBox.innerText = i
    numberBox.addEventListener('click', ()=>console.log('jeb'))
    numberBox.classList.add('number')
    document.getElementById('digits').appendChild(numberBox)
  }

  //board 9x9, easy!
  for(let r = 1; r <= 9; r++){
    //each row and each col
    for(let c = 1; c <= 9; c++){
      let box = document.createElement('div');
      box.id = r.toString() + '-' + c.toString();
      if(boardValue[r][c] != '0'){
        box.innerText = boardvalue[r][c]
        box.classList.add('box-start')
        //skipping 0 in the begining value
      }
      if (r == 2 || r==5){
        box.classList.add('horizontal-line')}
      if (c == 2 || c == 5) {
        box.classList.add("vertical-line");
        //add line
      }
      box.addEventListener("click", ()=>console.log('jebjeb'));
      box.classList.add("box");
      document.getElementById("board").append(box);
    }
  }
}

  
//   function selectNumber(){
//       if (numSelected != null) {
//           numSelected.classList.remove("number-selected");
//       }
//       numSelected = this;
//       numSelected.classList.add("number-selected");
//   }
  
//   function selectTile() {
//       if (numSelected) {
//           if (this.innerText != "") {
//               return;
//           }
  
//           // "0-0" "0-1" .. "3-1"
//           let coords = this.id.split("-"); //["0", "0"]
//           let r = parseInt(coords[0]);
//           let c = parseInt(coords[1]);
  
//           if (solution[r][c] == numSelected.id) {
//               this.innerText = numSelected.id;
//           }
//           else {
//               errors += 1;
//               document.getElementById("errors").innerText = errors;
//           }
//       }
//   }
  
