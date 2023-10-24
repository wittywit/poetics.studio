document.getElementById('menuIcon').addEventListener('click', function() {
    var menuOverlay = document.getElementById('menuOverlay');
    var menuIcon = document.getElementById('menuIcon');

    if(menuOverlay.style.display === 'none' || menuOverlay.style.display === '') {
        menuOverlay.style.display = 'flex';
        menuIcon.classList.add('active');
    } else {
        menuOverlay.style.display = 'none';
        menuIcon.classList.remove('active');
    }
});


const quotes = [
    "Ordinary moments, extraordinary tales.",
    "In every act, intent speaks loudest.",
    "Today's observation, tomorrow's muse.",
    "Pure intent: the compass of creation.",
    "Every gaze holds a world unseen.",
    "Work's worth is weighed by its intention.",
    "Daily sights, the soul's quiet marvels.",
    // ... Add more quotes as needed
];


/*function getQuoteForToday() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return quotes[dayOfYear % quotes.length];
}*/


function getQuoteForThisHour() {
    const today = new Date();
    const hourOfDay = today.getHours();
    return quotes[hourOfDay % quotes.length];
}


document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.querySelector('.coords'); // Replace `.quote-class-name` with the appropriate CSS selector for the quote element on your webpage
    quoteElement.textContent = getQuoteForThisHour();
});
