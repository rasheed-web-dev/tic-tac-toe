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

    return {
        getCell, setCell, get, reset, checkWin
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

