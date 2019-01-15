/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
    11110
    11010
    11000
    00000
Output: 1

----------
Example 2:

Input:
    11000
    11000
    00100
    00011
Output: 3

*/
class Solution {
    public int numIslands(char[][] grid) {
        if(grid == null || grid.length <= 0) return 0;
        
        int rows = grid.length;
        int cols = grid[0].length;
        
        int islands = 0;
        
        for(int i=0; i<rows; i++) {
            for(int j=0; j<cols; j++) {
                if(grid[i][j] == '1') {
                    islands++;
                    dfs(grid, i, j);
                }
            }
        }
        
        return islands;
    }
    
    public void dfs(char[][] grid, int i, int j) {
        int rows = grid.length;
        int cols = grid[0].length;
        if(i >= rows || i < 0 || j >= cols || j < 0 || grid[i][j] == '0') {
            return;
        }
        grid[i][j] = '0';
        
        dfs(grid, i+1,j);
        dfs(grid, i-1, j);
        dfs(grid, i, j+1);
        dfs(grid, i, j-1);
    }
}