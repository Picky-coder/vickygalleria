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
            <p class="modal-description"></p>
        </div>
    `;
    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const modalDescription = modal.querySelector('.modal-description');
    const closeButton = modal.querySelector('.close-button');

    // Visa modalen när ett galleriobjekt klickas
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const description = item.querySelector('.item-description').textContent;
            modalImage.src = imgSrc; // Ställ in bildkällan
            modalDescription.textContent = description; // Ställ in beskrivningstexten
            modal.style.display = 'flex'; // Visa modal
            document.body.style.overflow = 'hidden'; // Förhindra scrollning av albumsidan
        });
    });

    // Stäng modal när stäng-knappen klickas
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none'; // Dölj modal
        document.body.style.overflow = 'auto'; // Tillåt scrollning av albumsidan
    });

    // Stäng modal om man klickar utanför modalens innehåll
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none'; // Dölj modal
            document.body.style.overflow = 'auto'; // Tillåt scrollning av albumsidan
        }
    });
});