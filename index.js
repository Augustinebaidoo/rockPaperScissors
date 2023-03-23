//Prevent animation to load
setTimeout(() => {
document.body.classList.remove("preload");
}, 500);

//DOM
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    },
]

const choiceButtons = document.querySelectorAll('.choice-btn')
const gameDiv = document.querySelector('.game')
const resultsDiv = document.querySelector('.results')
const resultDivs = document.querySelectorAll('.results_result')

// Game logic 
choiceButtons.forEach( button => {
    button.addEventListener('click', () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find(choice => choice.name)
    })    
})



//Show/Hide Rules
btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});

btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
});