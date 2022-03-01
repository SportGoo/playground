/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    let totalRows = grid.length;
    let totalCols = grid[0].length;
    if (!totalRows) return 0;
    for (let r = 0; r < totalRows; r++) {
        for (let c = 0; c < totalCols; c++) {
            if (grid[r][c] === '1') {
                count++;
                dfs(grid, r, c);
            }
        }
    }
    return count;

    function dfs(grid, r, c) {
        if (r < 0 || r >= totalRows || c < 0 || c >= totalCols || grid[r][c] === '0') {
            return;
        }

        grid[r][c] = '0';

        dfs(grid, r, c - 1);
        dfs(grid, r, c + 1);
        dfs(grid, r - 1, c);
        dfs(grid, r + 1, c);
    }
};
