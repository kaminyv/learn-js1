function chessBoard() {
	function addRow(board, rowNum, figures) {
		var row = board.insertRow(-1);
		row.insertCell(-1).innerText = rowNum;
		for (var fig of figures) {
			row.insertCell(-1).innerText = fig;
		}
		row.insertCell(-1).innerText = rowNum;
	}

	var board = document.createElement('table');
	addRow(board, '', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
	addRow(board, '1', ['r', 'n', 'b', 'd', 'k', 'b', 'n', 'r']);
	addRow(board, '2', ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']);
	for (var i = 3; i <= 6; i++) {
		addRow(board, i, '        ');
	}
	addRow(board, '7', ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P']);
	addRow(board, '8', ['R', 'N', 'B', 'D', 'K', 'B', 'N', 'R']);
	addRow(board, '', ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
	for (i = 1; i <= 8; i++) {
		for (var j = 1; j <= 8; j++) {
			if (i % 2 + j % 2 === 1) {
				board.rows[i].cells[j].style.backgroundColor = 'grey';
			}
		}
	}
	document.body.appendChild(board);
};

chessBoard();