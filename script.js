const quotes = {
    science: [
        "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
        "The important thing is not to stop questioning. Curiosity has its own reason for existence. – Albert Einstein",
        "Equipped with his five senses, man explores the universe around him and calls the adventure Science. – Edwin Hubble",
        "Somewhere, something incredible is waiting to be known. – Carl Sagan",
        "The good thing about science is that it’s true whether or not you believe in it. – Neil deGrasse Tyson"
    ],
    philosophy: [
        "The unexamined life is not worth living. – Socrates",
        "To be is to be perceived. – George Berkeley",
        "The only true wisdom is in knowing you know nothing. – Socrates",
        "He who thinks great thoughts, often makes great errors. – Martin Heidegger",
        "You can discover more about a person in an hour of play than in a year of conversation. – Plato"
    ],
    literature: [
        "Not all those who wander are lost. – J.R.R. Tolkien",
        "There is no greater agony than bearing an untold story inside you. – Maya Angelou",
        "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
        "We are all in the gutter, but some of us are looking at the stars. – Oscar Wilde",
        "A room without books is like a body without a soul. – Marcus Tullius Cicero"
    ],
    motivation: [
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "We generate fears while we sit. We overcome them by action. – Dr. Henry Link"
    ]
};

let currentCategory = 'science';
let currentIndex = 0;

const quoteBox = document.getElementById('quote-box');
const categorySelect = document.getElementById('category');
const prevButton = document.getElementById('prev-quote');
const nextButton = document.getElementById('next-quote');
const randomButton = document.getElementById('random-quote');
const darkModeSwitch = document.getElementById('dark-mode-switch');
const body = document.body;
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');

function populateCategories() {
    for (const category in quotes) {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categorySelect.appendChild(option);
    }
}
populateCategories();

categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    currentIndex = 0;
    displayQuote();
});

function displayQuote() {
    quoteBox.textContent = quotes[currentCategory][currentIndex];
}