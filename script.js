//function for changing turn
let turn = "X";
let gameover = false;
function changeTurn(){
  return turn === "X" 
  ? "O"
  : "X"
}


// function to check for win
function checkWin(){
let boxtest = document.getElementsByClassName("boxtest")
let winning_combinations=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  ]
  winning_combinations.forEach(e => {
    if ((boxtest[e[0]].innerText === boxtest[e[1]].innerText) && (boxtest[e[1]].innerText === boxtest[e[2]].innerText) && (boxtest[e[0]].innerText !== "")){
      document.querySelector('.info').innerText = boxtest[e[0]].innerText + " " + "Won";
      gameover = true;
      document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "100px";
    }
  })
}
  // logic of game
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
let boxtest=element.querySelector('.boxtest');
element.addEventListener('click',()=>{
  if (boxtest.innerText===""){
    boxtest.innerText = turn;
    turn = changeTurn();
      checkWin();
      if (!gameover){
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
 }
})
})
// reset button functionality
reset.addEventListener('click',() => {
  let boxtest=document.querySelectorAll('.boxtest');
  Array.from(boxtest).forEach(element =>{
  element.innerText = ""})
  turn = "X"
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
   gameover = false;
  document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
})
