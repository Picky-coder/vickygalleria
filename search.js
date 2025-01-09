// Hämta sökfältet
const searchInput = document.querySelector('.search-bar');

// Lyssna efter användarens inmatning
defineSearchFunctionality();

function defineSearchFunctionality() {
    if (!searchInput) {
        console.warn("Ingen sökfält hittades på denna sida.");
        return;
    }

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.trim().toLowerCase();
        
        // Hämta alla album-element
        const albums = document.querySelectorAll('.album, .image-item');

        if (albums.length === 0) {
            console.warn("Inga album eller bilder att söka i hittades på sidan.");
            return;
        }

        let found = false;

        albums.forEach(album => {
            const title = album.textContent.trim().toLowerCase();

            if (title.includes(query)) {
                album.style.display = '';
                found = true;
            } else {
                album.style.display = 'none';
            }
        });

        // Visa ett meddelande om inga resultat hittades
        showNoResultsMessage(found);
    });
}

function showNoResultsMessage(found) {
    let noResultsMessage = document.querySelector('#no-results-message');

    if (!noResultsMessage) {
        noResultsMessage = document.createElement('p');
        noResultsMessage.id = 'no-results-message';
        noResultsMessage.textContent = 'No albums found';
        noResultsMessage.style.color = 'red';
        noResultsMessage.style.textAlign = 'center';
        noResultsMessage.style.marginTop = '20px';
        document.body.appendChild(noResultsMessage);
    }

    noResultsMessage.style.display = found ? 'none' : 'block';
}
