const btnEnd = document.querySelector('#end');
const btnReset = document.querySelector('#reset');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissor = document.querySelector('#scissor');
let userScore = document.querySelector('#user-score');
let cpuScore = document.querySelector('#cpu-score');
const cpuControl = document.querySelector('#cpu-control');
const winner = document.querySelector('#winner');

const data = [
    {
        name : "CPU",
        img : "/images/question.png"
    },
    {
        name : "Rock",
        img : "/images/rock.png"
    },
    {
        name : "Paper",
        img : "/images/paper.png"
    },
    {
        name : "Scissor",
        img : "/images/scissor.png"
    },
]

let cpuVal = 0;
let userVal = 0;

function generateRandomForCPU()
{
    let randomIndex = Math.floor(Math.random() * (data.length - 1) + 1);
    cpuControl.src = data[randomIndex].img;

    return data[randomIndex].name;
}

function increaseCounters(param1 , param2)
{
    let cpuChoice = generateRandomForCPU();

    if(cpuChoice === param1)
    {
        winner.textContent = "";
        cpuVal = cpuVal + 1;
        cpuScore.textContent = cpuVal;
    }
    else if(cpuChoice === param2)
    {
        winner.textContent = "";
        userVal = userVal + 1;
        userScore.textContent = userVal;
    }
    else
        winner.textContent = "Tie";
}

btnPaper.addEventListener('click',()=>{
    increaseCounters("Scissor","Rock")
})

btnRock.addEventListener('click',()=>{
    increaseCounters("Paper","Scissor");
})

btnScissor.addEventListener('click',()=>{
    increaseCounters("Rock","Paper");
})

btnEnd.addEventListener('click',()=>{
    winner.textContent = "";

    if(userVal < cpuVal)
        winner.textContent = "CPU Wins"
    else if(userVal === cpuVal)
        winner.textContent = "Tie"
    else
        winner.textContent = "User Wins"
})

btnReset.addEventListener('click',()=>{
    userVal = 0;
    cpuVal = 0;

    cpuScore.textContent = 0;
    userScore.textContent = 0;

})

//Initial controls for CPU
cpuControl.src = data[0].img;
cpuControl.alt = data[0].name;

//Initial scores
userScore.textContent = userVal;
cpuScore.textContent = cpuVal;