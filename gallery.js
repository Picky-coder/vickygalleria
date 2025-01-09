// Galleri-interaktivitet
document.addEventListener('DOMContentLoaded', () => {
    // Välj alla gallerielement
    const galleryItems = document.querySelectorAll('.image-item');

    galleryItems.forEach(item => {
        // Lägg till klickhändelse på varje gallerielement
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Hindra standardlänkens beteende

            // Kontrollera om länken finns
            const linkElement = item.querySelector('a');
            if (linkElement) {
                const link = linkElement.href; // Hämta länkens URL
                window.location.href = link; // Navigera till länken
            } else {
                console.error('No link found in this gallery item:', item); // Logga fel
            }
        });
    });
});
