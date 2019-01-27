let cardConteiner = document.getElementsByClassName('card-container')[0];
let card = document.getElementsByClassName('card')[0];


let button = document.getElementById('flip');
let buttonBack = document.getElementById('flipBack');
button.addEventListener('click', buttonEvent);
buttonBack.addEventListener('click', buttonEvent);
function buttonEvent(){
    cardConteiner.classList.toggle('hover');
    card.classList.toggle('hover');
}