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
        },
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

    function checkForMatch() {
        const cards = document.querySelectorAll('div');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
            console.log('%c Const cards', ccsConsole, cards);
            console.log('%c optionOneId', ccsConsole, optionOneId);
            console.log('%c optionTwoId', ccsConsole, optionTwoId);
        
        /** Comprueba que el usuria no de click do vesces a la misma carta */
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('class', 'card-blank');
            cards[optionTwoId].setAttribute('class', 'card-blank')
            alert('You have clicked the same image!')
            console.log('%c Const cards', ccsConsole, cards);
        }


        /* if(cardsChosen[0] == cardsChosen[1]){
            console.log('Son iguales');
        } else {
            console.log('No son iguales')
        } */
    }


    

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('class', 'card-chosen')

        if (cardsChosen.length === 2) {
            setTimeout( checkForMatch, 3000);
        }

        console.log('%c CardId', ccsConsole, cardId);
        console.log('%c cardsChosen', ccsConsole, cardsChosen);
        console.log('%c cardsChosenId', ccsConsole, cardsChosenId);
        console.log('%c This Card', ccsConsole, this);
    
    }

    createBoard();



})