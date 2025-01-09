// Vänta tills sidan har laddats helt innan scriptet körs
document.addEventListener('DOMContentLoaded', () => {
    // Hämta alla galleriobjekt
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Skapa en modal för att visa bilder i större storlek
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img class="modal-image" src="" alt="">
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close-button');

    // Visa modalen när ett galleriobjekt klickas
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            modalImage.src = imgSrc; // Ställ in bildkällan
            modal.style.display = 'flex'; // Visa modalen
            document.body.style.overflow = 'hidden'; // Förhindra scrollning av album-sidan
    });

    // Stäng modalen när stäng-knappen klickas
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Dölj modalen
        document.body.style.overflow = 'auto'; // Tillåt scrollning av album-sidan
    });

    // Stäng modalen om man klickar utanför innehållet
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Dölj modalen
            document.body.style.overflow = 'auto'; // Tillåt scrollning av album-sidan
        }
    });
});

// Event listener for language selector
const languageSelector = document.getElementById('language-selector');
if (languageSelector) {
    languageSelector.addEventListener('change', function() {
        console.log('Language selected:', this.value);
    });
}
});