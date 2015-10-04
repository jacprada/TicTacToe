// declare operating variables through getElements

var display = document.getElementsByClassName("display")[0];
var cell = document.getElementsByClassName("cell");
var clear = document.getElementsByClassName("clear")[0];


// declare winning combination for playerX and playerO and empty array to store game moves

var playerXCombos = [	[1,2,3], [4,5,6], [7,8,9],
											[1,4,7], [2,5,8], [3,6,9],
											[1,5,9], [3,5,7] ];
var playerOCombos = [	[1,2,3], [4,5,6], [7,8,9],
											[1,4,7], [2,5,8], [3,6,9],
											[1,5,9], [3,5,7] ];
var gameInputs = [];


// adding eventListener clicks to run the game

for (var i = 0; i < cell.length; i++) {
	cell[i].addEventListener("click", getInput);
}

clear.addEventListener("click", clearBoard);


// declaring getInput function to create turns, accept and store player moves

function getInput() {
	if (gameInputs.length === 8) {
		var playerXInput = (parseInt(this.id));
		this.value = "X";
		this.style.backgroundColor = "rgb(0, 115, 153)";
		this.disabled=true;
		display.value = "game over. clear to restart!";
		gameInputs.push(parseInt(this.id));
		playerXWin(playerXInput);
	} else if (gameInputs.length % 2 === 0) {
		var playerXInput = (parseInt(this.id));
		this.value = "X";
		this.style.backgroundColor = "rgb(0, 115, 153)";
		this.disabled=true;
		display.value = "player X chose cell " + playerXInput + ". player O is next!";
		gameInputs.push(parseInt(this.id));
		playerXWin(playerXInput);
	} else if (gameInputs.length % 2 !== 0) {
		var playerOInput = (parseInt(this.id));
		this.value = "O";
		this.style.backgroundColor = "rgb(162, 71, 128)";
		this.disabled=true;
		display.value = "player O chose cell " + playerOInput + ". player X is next!";
		gameInputs.push(parseInt(this.id));
		playerOWin(playerOInput);
	} 
}


// declaring functions that determine when either playerX or playerY wins

function playerXWin(playerXInput) {
	for (var x = 0; x < playerXCombos.length; x++) {
		for (var y = 0; y < playerXCombos[x].length; y++) {
			if (playerXCombos[x][y] === playerXInput) {
				var playerXCell = playerXCombos[x][y];
				var indexPlayerXCell = playerXCombos[x].indexOf(playerXCell);
				playerXCombos[x].splice(indexPlayerXCell, 1);
				if (playerXCombos[x].length === 0) {
					winner = "player X";
					gameOver(winner);
				}
			}
		}
	}
}

function playerOWin(playerOInput) {
	for (var x = 0; x < playerOCombos.length; x++) {
		for (var y = 0; y < playerOCombos[x].length; y++) {
			if (playerOCombos[x][y] === playerOInput) {
				var playerOCell = playerOCombos[x][y];
				var indexPlayerOCell = playerOCombos[x].indexOf(playerOCell);
				playerOCombos[x].splice(indexPlayerOCell, 1);
				if (playerOCombos[x].length === 0) {
					winner = "player O";
					gameOver(winner);
				}
			}
		}
	}
}


// declaring the function that ends the game

function gameOver(winner) {
	display.value = winner + " wins the game. clear to restart!";
	for (var i = 0; i < cell.length; i++) {
		cell[i].disabled = true;
	}
}


// declaring the function that clears up the game board

function clearBoard() {
	gameInputs = [];
	playerXCombos = [	[1,2,3], [4,5,6], [7,8,9],
										[1,4,7], [2,5,8], [3,6,9],
										[1,5,9], [3,5,7] ];
	playerOCombos = [	[1,2,3], [4,5,6], [7,8,9],
										[1,4,7], [2,5,8], [3,6,9],
										[1,5,9], [3,5,7] ];
	for (var i = 0; i < cell.length; i++) {
		cell[i].value="";
		cell[i].style.backgroundColor="black";
		cell[i].disabled = false;
		display.value = "game on. make your move!";
	}
}