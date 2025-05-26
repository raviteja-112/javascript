document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quote-display');
    const newQuoteBtn = document.getElementById('new-quote-btn');

    async function getQuote() {
        try {
            const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
            const data = await response.json();
            quoteDisplay.innerHTML = `<p class="quote-content">${data.data.content}</p><p class="quote-author">- ${data.data.author}</p>`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            quoteDisplay.innerHTML = `<p class="quote-content">Failed to load quote. Please try again.</p>`;
        }
    }

    newQuoteBtn.addEventListener('click', getQuote);

    getQuote();
});
