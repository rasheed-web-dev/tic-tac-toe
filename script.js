const Board = (() => {
    let cells = ['', '', '', '', '', '', '', '', '',];

    const getCell = (index) => { return cells[index]; };
    const setCell = function (index, value) {
        cells[index] = value;
    };
    const get = () => { return [...cells]; };
    const reset = () => { cells.fill(''); }
    const checkRows = () => {
        if (cells[0] !== '' && cells[0] === cells[1] && cells[1] === cells[2]) {
            return true;
        }
        if (cells[3] !== '' && cells[3] === cells[4] && cells[4] === cells[5]) {
            return true;
        }
        if (cells[6] !== '' && cells[6] === cells[7] && cells[7] === cells[8]) {
            return true;
        }
        return false;
    }

    const checkColumns = () => {
        if (cells[0] !== '' && cells[0] === cells[3] && cells[3] === cells[6]) {
            return true;
        }
        if (cells[1] !== '' && cells[1] === cells[4] && cells[4] === cells[7]) {
            return true;
        }
        if (cells[2] !== '' && cells[2] === cells[5] && cells[5] === cells[8]) {
            return true;
        }
        return false;
    };

    const checkDiagonals = () => {
        if (cells[0] !== '' && cells[0] === cells[4] && cells[4] === cells[8]) {
            return true;
        }
        if (cells[2] !== '' && cells[2] === cells[4] && cells[4] === cells[6]) {
            return true;
        }
        return false;
    }

    const checkWin = () => {
        if (checkColumns() || checkRows() || checkDiagonals()) {
            return true;
        }
        return false;
    }

    const checkTie = () => {
        if (cells.includes('')) {
            return false;
        }
        return true;
    }

    return {
        getCell, setCell, get, reset, checkWin, checkTie
    };
})();

const createPlayer = (value) => {
    let score = 0;
    const incrementScore = () => {
        score++;
    };
    const getScore = () => {
        return score;
    }
    const getValue = () => {
        return value;
    }
    return {
        getValue, incrementScore, getScore
    }
}

const GameController = (() => {
    player1 = createPlayer('X');
    player2 = createPlayer('O');
    let currentPlayer;
    const playTurn = (index) => {
        if (Board.getCell(index) != '') {
            return;
        }
        currentPlayer = currentPlayer == player1 ? player2 : player1;
        Board.setCell(index, currentPlayer.getValue());
        DisplayController.refresh();
        if (Board.checkWin()) {
            currentPlayer.incrementScore();
            console.log(`${currentPlayer.getValue()} Wins!`);
            console.log(`${currentPlayer.getScore()}`);
            Board.reset()
        }
        else if (Board.checkTie()) {
            console.log(`It's a Tie.`)
            Board.reset()
        }
    }

    return {
        playTurn,
    }
})();

const DisplayController = (() => {
    const boardDiv = document.querySelector('.grid-container');
    const refresh = () => {
        boardDiv.innerHTML = "";
        let index = 0;
        for (let cell of Board.get()) {
            let cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            cellDiv.innerText = cell;
            cellDiv.dataset.index = index;
            cellDiv.addEventListener('click', () => {
                GameController.playTurn(cellDiv.dataset.index)
            });
            index++;
            boardDiv.appendChild(cellDiv);
        }
    }

    return {
        refresh,
    }
})();

DisplayController.refresh();