/*

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:

Input:  11110
        11010
        11000
        00000

Output: 1


/**
 * @param {character[][]} grid
 * @return {number}
 */

// Time: O(M.N) where M is the number of rows and N the number of columns
// Space: O(M.N) because in the worst case, the map is filled with land (1) so DFS has to go by M.N deep
var numIslands = function(grid) {
    if(grid === null || grid.length == 0) {
        return 0;
    }
    
    let row = grid.length;
    let col = grid[0].length;
    let islands = 0;
    for(let i=0; i<col; i++) {
        for(let j=0; j<row; j++) {
            if(grid[j][i] == 1) {
                islands++;

                // Starting from node (j,i): put to 0 all the connected nodes
                dfs(grid, j, i);
            }
        }   
    }
    return islands;
};

// This is DFS and not BFS because here we always continue starting from current node. We don't go back to root node after each depth.
var dfs = function(grid, row, col) {
    let n_row = grid.length;
    let n_col = grid[0].length;
    
    if(col >= n_col || row >= n_row || col < 0 || row < 0  || grid[row][col] == 0) {
       return;
    }
    
    grid[row][col] = 0;
    
    // Run dfs again to put to 0 all the connected nodes
    dfs(grid, col+1, row);
    dfs(grid, col-1, row);
    dfs(grid, col, row+1);
    dfs(grid, col, row-1);
}

//If we use BFS, Time: O(M.N) and Space: O(min(M,N)) because in worst case where the grid is filled with lands, the size of queue can grow up to min(M,N).
var bfs = function(grid, row, col) {
    let n_row = grid.length;
    let n_col = grid[0].length;
    
    grid[row][col] = 0;
    let queue = [];
    queue.push({r: row, c: col});

    //For each node, we check all the adjacent nodes. We move level by level so it's BFS.
    while(queue.length > 0) {
        let {r,c} = queue.shift();
        if(r-1>=0 && grid[r-1][c] == 1) {
            grid[r-1][c] = 0;
            queue.push({r:r-1, c:c});
        }
        if(r+1<n_row && grid[r+1][c] == 1) {
            grid[r+1][c] = 0;
            queue.push({r:r+1, c:c});
        }
        if(c-1>=0 && grid[r][c-1] == 1) {
            grid[r][c-1] = 0;
            queue.push({r:r, c:c-1});
        }
        if(c+1<n_col && grid[r][c+1] == 1) {
            grid[r][c+1] = 0;
            queue.push({r:r, c:c+1});
        }
    }
}


/*

- if we remove all 0's, what is left? -> easier to see where islands are?

[[1, ,1,1, ],
 [1,1,1,1, ],
 [ ,1, , , ],
 [1,1, , , ]]
 
- For loop on each col: 
        -check if col(i, j) = col(i+1,j) = ...  = 1 --> islands++;
        -when change col, each time we have two 1's following each other --> islands--; 

    
    col1 = 2 
    col2 = 1
    row12 = 2
    --> islands = 1
    

*/