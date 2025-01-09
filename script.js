document.addEventListener('DOMContentLoaded', () => {
    const selectedOption = document.querySelector('.selected-option');
    const optionsList = document.querySelector('.options-list');
    const options = document.querySelectorAll('.option');

    // Kontrollera att nödvändiga element finns
    if (!selectedOption || !optionsList) {
        console.error('Dropdown elements not found.');
        return;
    }
   
    // Visa/Dölj options-list vid klick
    selectedOption.addEventListener('click', () => {
        optionsList.classList.toggle('show');
    });

    // Ändra språk vid val av alternativ
    options.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.getAttribute('data-lang') || 'en'; // Fallback till engelska
            const imgSrc = option.querySelector('img') ? option.querySelector('img').src : '';
            const text = option.textContent.trim();
            
            // Uppdatera vald option
            selectedOption.innerHTML = `<img src="${imgSrc}" alt="${text}" class="flag-icon"> ${text}`;
            optionsList.classList.remove('show');

            // Anropa en översättningsfunktion
            translatePage(lang);
        });
    });

    // Översättningsfunktion
    function translatePage(language) {
        // Implementera Översättningslogik här
        alert(`Switching language to: ${language}`);
    }

    // Stäng dropdown om man klickar utanför
    document.addEventListener('click', (e) => {
        if (!document.querySelector('.custom-select').contains(e.target)) {
            optionsList.classList.remove('show');
        }
    });
});
