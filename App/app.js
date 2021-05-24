console.log('this is coming from app.js');


//add event listeners onto boxes
var boxes = document.getElementsByTagName('td');
var resetButton = document.getElementsByTagName('button');
var xCounter = document.getElementsByClassName('X');
var oCounter = document.getElementsByClassName('O');
//console.log(xCounter[0].children[0]);

//console.log(xCounter[0]);
// console.log(resetButton[0]);
var checker = 'X';
var board = 0;
var wins = {'X': 0, 'O':0};
var memory = {};

//puts an x or o on the DOM when particular box is clicked
const appendNode = function() {
  //console.log(this);
  var node;

  if(memory[this.className] !== undefined) {
    alert('invalid placement');
    return;
  }

  if(checker === 'X') {
    node = document.createTextNode('X');
    checker = 'O';
    board++;
    memory[this.className] = node.textContent;
    // console.log(memory);
  } else  {
    node = document.createTextNode('O');
    checker = 'X';
    board++;
    memory[this.className] = node.textContent;
    // console.log(memory);
  }

  this.appendChild(node);
  var player = this.childNodes[0].textContent
  if(checkWin(player, board)) {
    alert(`${player} wins!`);
    wins[player]++;
    console.log(wins);
    trackWins(player);
    resetter();
  };

}

const trackWins = function(player) {
  var xWins = wins.X
  var oWins = wins.O;
  //console.log(player);
  if(player === 'X') {
    checker = 'O';
  } else {
    checker = 'X';
  }
  xCounter[0].children[0].innerText = xWins;
  oCounter[0].children[0].innerText = oWins;
}

//checks state of board to see it is a winning state
//returns a boolean
const checkWin = function(player, boardCount) {
  //console.log(letter === 'X');
  if(boardCount === 9) {
    //prevent anything else from happening
    alert('tie!!');
    resetter();
  }
    //temporary solution? figure out algo later
    if(memory[1] === memory[2] && memory[2] === memory[3] && memory[1] !== undefined) {
      return true;
    }
    if(memory[4] === memory[5] && memory[5] === memory[6] && memory[4] !== undefined) {
      return true;
    }
    if(memory[7] === memory[8] && memory[8] === memory[9] && memory[7] !== undefined ) {
      return true;
    }
    if(memory[1] === memory[5] && memory[5] === memory[9] && memory[1] !== undefined) {
      return true;
    }
    if(memory[3] === memory[5] && memory[5] === memory[7] && memory[3] !== undefined) {
      return true;
    }
    if(memory[1] === memory[4] && memory[4] === memory[7] && memory[1] !== undefined) {
      return true;
    }
    if(memory[2] === memory[5] && memory[5] === memory[8] && memory[2] !== undefined) {
      return true;
    }
    if(memory[3] === memory[6] && memory[6] === memory[9] && memory[3] !== undefined) {
      return true;
  }
}

const resetter = function(){
  //window.location.reload();
  console.log(boxes);

  for(var i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
  }
  for (var keys in memory) {
    delete memory[keys];
  }
  //checker = 2;
  board = 0;

}


for(var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', appendNode);
  //console.log(boxes[i].innerHTML);
}

resetButton[0].addEventListener('click', resetter);
// xCounter[0].appendChild(initialWins);
// oCounter[0].appendChild(initialWins);






