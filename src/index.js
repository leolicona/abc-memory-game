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
            console.count('Count Console')
            printOn('moves', add())
           
            /* counter.increse()
            console.log('%c Counter', ccsConsole, counter.getCount());
         */
        /** Comprueba que el usuria no de click do vesces a la misma carta */
        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('class', 'card');
            cards[optionTwoId].setAttribute('class', 'card')
        } else if ( cardsChosen [0] === cardsChosen[1]) {
            //alert('You have matched this cards!')
            cards[optionOneId].setAttribute('class', 'card-won');
            cards[optionTwoId].setAttribute('class', 'card-won');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen)
            //cardsWon.push(cardsChosen[1])
            console.log('%c cardsWon Array', ccsConsole, cardsWon);  
        } else {
            //alert('Tray Again');
            cards[optionOneId].setAttribute('class', 'card');
            cards[optionTwoId].setAttribute('class', 'card');
        }

        cardsChosen = []
        cardsChosenId = []

        printOn('result', cardsWon.length);

        if (cardsWon.length === cardArray.length/2) {
            printOn('result', 'Felicidades, has terminado el juego');
        }
        
    }

    /* function makeCounter(){
        let count = 0;
        return {
          increse: function () {
            count = count + 1;
          },
          getCount: function () {
            return count;
          },
        };
      }
      let counter = makeCounter(); */

      const add = (function () {
        let counter = 0;
        return function () {
          counter += 1;
          return counter;
        }
      }
      )();
      
      function printOn(htmlId, callback) {
        const screen = document.getElementById(htmlId);
        screen.textContent = ` ${callback}`
      }

    
    

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('class', 'card-chosen')

        if (cardsChosen.length === 2) {
            setTimeout( checkForMatch, 1000);
        }

        console.log('%c CardId', ccsConsole, cardId);
        console.log('%c cardsChosen', ccsConsole, cardsChosen);
        console.log('%c cardsChosenId', ccsConsole, cardsChosenId);
        console.log('%c This Card', ccsConsole, this);
    
    }

    createBoard();



})