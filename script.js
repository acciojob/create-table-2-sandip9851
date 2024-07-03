function createTable() {
    // Prompt for the number of rows
    const numRows = parseInt(prompt("Input number of rows"));

    // Prompt for the number of columns
    const numCols = parseInt(prompt("Input number of columns"));

    // Get the table element
    const table = document.getElementById('myTable');

    // Clear any existing table contents
    table.innerHTML = '';

    // Create rows and cells
    for (let i = 0; i < numRows; i++) {
        // Create a new row
        const row = table.insertRow();

        for (let j = 0; j < numCols; j++) {
            // Create a new cell in the row
            const cell = row.insertCell();
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}