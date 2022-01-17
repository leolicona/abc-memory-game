/**
 * DOMContentLoaded event fires when the initial HTML document 
 * has been completely loaded and parsed
 */
document.addEventListener('DOMContentLoaded', () => {
    const ccsConsole = 'color: green; font-weight: bold; background-color: black'
    /**
     * Array for options  
     * @type {Array} cardArray
     */

    const cardArray = [
        {
            name: 'ma',
        },
        {
            name: 'me',
        },
        {
            name: 'mi',
        },
        {
            name: 'mo',
        },
        {
            name: 'mu',
        }
    ]
    console.log('%c Card Array', ccsConsole, cardArray[3]);

    cardArray.sort(() => 0.5 - Math.random())
    console.log('%c Card Array', ccsConsole, cardArray);

    /** Get HTML elements */ 
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    console.log('%c Grid', ccsConsole, grid);
    console.log('%c Score', ccsConsole, resultDisplay);



    /** Create empty Arrays */
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    /** Create board */

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('div');
            console.log('%c Card Element', ccsConsole, card);
            card.setAttribute('class', 'card');
            card.setAttribute('data-id', i)
            card.innerText = cardArray[i].name
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    createBoard();

    function flipCard() {
        console.log('%c Card Click', ccsConsole, 'click');
    }




})