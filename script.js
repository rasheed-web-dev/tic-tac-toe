const board = (() => {
    let cells = ['', '', '', '', '', '', '', '', '',];

    const getCell = (index) => {return cells[index];};
    const setCell = function(index, value) {
        cells[index] = value;
    };
    const get = () => {return cells;};
    const reset = () => {cells.fill('');}
    return {
        getCell, setCell, get, reset
    };
})();

