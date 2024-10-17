// Select all columns
const columns = document.querySelectorAll('.column');

// Set the speed for scrolling (adjust as necessary)
const scrollSpeed = 2; // Adjust speed here

// Function to scroll columns
function scrollColumns() {
    columns.forEach((column, index) => {
        // Determine scroll direction based on column index
        if (index % 2 === 0) {
            // Even index columns (0 and 2) scroll up
            column.scrollTop -= scrollSpeed;
            
            // Check if the column has scrolled past the first set of images
            if (column.scrollTop <= 0) {
                column.scrollTop = column.scrollHeight / 2; // Reset to middle
            }
        } else {
            // Odd index columns (1 and 3) scroll down
            column.scrollTop += scrollSpeed;

            // Check if the column has scrolled past the second set of images
            if (column.scrollTop >= column.scrollHeight / 2) {
                column.scrollTop = 0; // Reset to top
            }
        }
    });
}

// Scroll every 30 milliseconds
setInterval(scrollColumns, 30);
