Please create an app that will help me count cells.
Here is how it should work:

1. I will begin by having a simple input field where I can enter the "Maximum number of cells". Below, there should be a button saying "Begin count".
2. Once the button is clicked, I will see a simple page with a grid of squares. At the very top of the screen, above the grid, there should be two texts:
"Maximum number of cells:", indicating the maximum number of cells I have entered in the input field before
"Current count:', indicating the current count of cells (total);
3. To the right of the text, still above the grid, there should be a button saying "Reset count", and a button saying "Finish".
4. The grid should be of 3x4 cells, each cell should be a square containing an image (please use a generic image of a cell for each cell), below the image the name of the cell (please name them cell1, cell2... , cell12), and the number (they will all start at 0)
5. Upon clicking on a cell, the number should increase by 1.
6. The grid should be responsive, and the number of cells should be dynamic based on the input field.
7. We should use shadCN/ui for the UI and react-hook-form for the form.
8. We should use best practices for the code, and please use typescript.
9. I should not be able to click on the "Finish" button until the total number of cells is equal to the maximum number of cells.
10. When the "Finish" button is clicked, A pop up should appear showing a brief summary of the results:
- Maximum number of cells: [maximum number of cells]
- Current count: [current count]
- Cells: [list of cells with their respective counts - both in numbers and in percentages, based on the maximum number of cells]
- The pop up should have a button saying "Export .PDF".
- When the user clicks the "Export .PDF" button, a PDF should be generated with the following information:
    - The title "Cells count"
    - The maximum number of cells
    - The list of cells with their respective counts (both in numbers and in percentages, based on the maximum number of cells)
- The pop up should have a button "X" to close the pop up, at the top right of the pop up.
- We should also be able to switch between light and dark mode, so lets use the ThemeProvider from shadCN/ui.

