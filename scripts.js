function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const playerList = document.getElementById('playerList');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const playerItems = playerList.children;

        for (let item of playerItems) {
            const playerName = item.textContent.toLowerCase();
            if (playerName.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        }
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create and add the search input
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.placeholder = 'חפש שחקן...';
    searchContainer.appendChild(searchInput);

    // Initialize the search functionality
    handleSearch();
});