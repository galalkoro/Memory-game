// starting with varible array

const arrayCard = [
    {'name': 'tesla', 'img': './images/cars/tesla-logo.png',},
    {'name': 'ford', 'img': './images/cars/ford-logo.png',},
    {'name': 'toyota', 'img': './images/cars/toyota-logo.png',},
    {'name': 'volkswagen', 'img': './images/cars/volkswagen-logo.png',},
    {'name': 'jeep', 'img': './images/cars/jeeb-logo.png',},
    {'name': 'nissan', 'img': './images/cars/nissan-logo.png',},
    {'name': 'suzuki', 'img': './images/cars/suzuki-logo.png',},
    {'name': 'honda', 'img': './images/cars/honda-logo.png',},
    {'name': 'lexus', 'img': './images/cars/lexus-logo.png',},
    {'name': 'mazda', 'img': './images/cars/mazda-logo.png',},
    {'name': 'subaru', 'img': './images/cars/subaru-logo.png',},
    {'name': 'infiniti', 'img': './images/cars/infiniti-logo.png',},
    {'name': 'audi', 'img': './images/cars/audi-logo.png',},
    {'name': 'BMW', 'img': './images/cars/bmw-logo.png',},
    {'name': 'Porche', 'img': './images/cars/porche-logo.png',},
    {'name': 'opel smart', 'img': './images/cars/opel-logo.png',},
    {'name': 'Fiat', 'img': './images/cars/fiat-logo.png',},
    {'name': 'Ferrari', 'img': './images/cars/ferrari-logo.png',},
    {'name': 'Maserati', 'img': './images/cars/Maserati-logo.png',},
    {'name': 'Bently', 'img': './images/cars/bently-logo.png',},
    {'name': 'Jaquar', 'img': './images/cars/jaguar-logo.png',},
    {'name': 'Mini', 'img': './images/cars/mini-logo.png',},
    {'name': 'Bugati', 'img': './images/cars/bugatti-logo.png',},
    {'name': 'Renault', 'img': './images/cars/renault-logo.png',},
];


const memoryGrid = arrayCard.concat(arrayCard);
memoryGrid.sort(()=>{
    return Math.random();
})


const game = document.getElementById('memory-board');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


for (let i=0; i < memoryGrid.length; i++ ){
    let card = document.createElement("div");
    card.classList.add('card');
    card.dataset.name = memoryGrid[i].name

    //front of the card
    let front = document.createElement('div');

    front.classList.add('front');

    //back of the card
    let back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${memoryGrid[i].img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}
let firstGuess = '';
let secondGuess = '';

let count = 0;

let previousTarget = null;
let delay = 1200;



let match = function () {
    let selected = document.querySelectorAll('.selected');
    for (let i=0; i < selected.length; i++){
        selected[i].classList.add('match')
    }
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    let selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
};


grid.addEventListener('click', (event) => {
    let clicked = event.target;
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
        return;
    }

    if(count < 2){
        count ++;
        if (count === 1){
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else{
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }

        if(firstGuess !== '' && secondGuess !== ''){
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
                setTimeout(resetGuesses, delay);
            }else {
                setTimeout(resetGuesses, delay);
            }
        }

        previousTarget = clicked;
    }
});