console.log('this is coming from app.js');


//add event listeners onto boxes
var boxes = document.getElementsByTagName('td');
console.log(boxes);
var checker = 2;
var board = 0;
var memory = {};
//puts an x or o on the DOM when particular box is clicked
const appendNode = function() {
  //console.log(node);
  var node;
  if(this.hasChildNodes()) {
    alert('invalid placement');
    return;
  }
  if(checker % 2 === 0) {
    node = document.createTextNode('X');
    checker++;
    board++;
    memory[] = node;
  } else  {
    node = document.createTextNode('O');
    checker++;
    board++;
  }

  this.appendChild(node);
  checkWin(this.childNodes[0].textContent, board);
}


//checks state of board to see it is a winning state
//returns a boolean
const checkWin = function(letter, boardCount) {
  console.log(letter === 'X');
  if(boardCount === 9) {
    //prevent anything else from happening
    console.log('tie!!');
  }
}


for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', appendNode);
  //console.log(boxes[i].innerHTML);
}



