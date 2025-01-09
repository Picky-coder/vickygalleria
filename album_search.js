// Hitta sökfältet
const searchInput = document.querySelector('.search-bar');

// Kontrollera att sökfältet existerar
if (searchInput) {
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase();

        // Popup eller console-log för att visa att funktionen är aktiverad
        if (query) {
            alert(`Din sökning: "${query}" är registrerad. Sökfunktionen kommer att utvecklas i framtiden.`);
        }
    });
} else {
    console.error('Sökfältet hittades inte. Kontrollera din HTML.');
}
