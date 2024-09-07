let btn = document.querySelector(".start");
let btn1 = document.querySelector(".red");
let btn2 = document.querySelector(".green");
let btn3 = document.querySelector(".blue");
let btn4 = document.querySelector(".yellow");
let h2 = document.querySelector("h2");
let div = document.querySelector(".container");
let replay = document.querySelector(".end");
let form = document.querySelector(".form");
let gameStart = document.querySelector(".gameStarter");
let input = document.querySelector("input");
let p = document.querySelector("p");
let exit = document.querySelector("#exit");

let started = false;
let level = 1;
let gameSequence = [];
let userSequence = [];
let i = 0;
let j = 0;
let allScore = [];
let max = null;
let name;
let c = 0;

gameStart.addEventListener("click", function() {
    if(input.value != "")
    {
        name = input.value;
        console.log(name);
        div.style.display= "flex";
        form.style.display = "none";
    }
    else
    {
        let h1 = document.createElement("h1");
        h1.innerText = "Please enter your name";
        h1.style.color = "red";
        form.insertAdjacentElement("afterbegin", h1);
        h1.style.position = "absolute";
        h1.style.backgroundColor = "black";
        h1.style.paddingLeft = "10px";
        h1.style.paddingRight = "10px";
        h1.style.bottom = "40px";

        setTimeout(() => {
            h1.remove();
        }, 900);
    }
});

btn.addEventListener("click", function () {
    if (started == false) {
        c = 1;
        started = true;
        h2.innerText = `Level ${level}`;
        level++;
        generateRand();
    }
});


function generateRand() {
    let num = Math.floor(Math.random() * 4) + 1;
    if (num == 1) {
        btn1.style.backgroundColor = "transparent";
        setTimeout(() => {
            btn1.style.backgroundColor = "rgb(114, 3, 3)";
        }, 250);
        gameSequence[i] = "red";
        i++;
    }
    else if (num == 2) {
        btn2.style.backgroundColor = "transparent";
        setTimeout(() => {
            btn2.style.backgroundColor = "green";
        }, 250);
        gameSequence[i] = "green";
        i++;
    }
    else if (num == 3) {
        btn3.style.backgroundColor = "transparent";
        setTimeout(() => {
            btn3.style.backgroundColor = "blue";
        }, 250);
        gameSequence[i] = "blue";
        i++;
    }
    else if (num == 4) {
        btn4.style.backgroundColor = "transparent";
        setTimeout(() => {
            btn4.style.backgroundColor = "yellow";
        }, 250);
        gameSequence[i] = "yellow";
        i++;
    }
    console.log("Game", gameSequence);
}

let btnss = document.querySelectorAll("#btn");


for (btn of btnss) {
    btn.addEventListener("click", function () {
        if (started == true) {
            divClicked(this);
        }
    });
}

function divClicked(btn) {
    userSequence[j] = btn.className;
    j++;
    let color = btn.style.backgroundColor;
    btn.style.backgroundColor = "transparent";
    setTimeout(() => {
        btn.style.backgroundColor = color;
    }, 250);
    checkSeq();
}

function checkSeq() {
    let check = 0;
    for (let k = 0; k < j; k++) {
        if (userSequence[k] != gameSequence[k]) {
            check = 1;
            over();
            break;
        }
    }
    if (i == j && check == 0) {
        userSequence.splice(0, j);
        j = 0;
        h2.innerText = `Level ${level}`;
        level++;
        setTimeout(() => {
            generateRand();
        }, 400);
    }
}

function over() {
    
    h2.innerText = `Game Over! Your score was ${level - 1}`;
    highestScore(level-1);
    div.style.backgroundColor = "red";
    setTimeout(() => {
        div.style.backgroundColor = "rgb(63, 97, 97)";
    }, 1500);

    let h1 = document.querySelector("#gameOver");
    h1.style.display = "block";
    setTimeout(function () {
        h1.style.display = "none";
    }, 1500);

}

function highestScore(marks)
{
    allScore.push(marks);
    max = allScore[0];
    for(let a=1; a<allScore.length; a++)
    {
        if(max < allScore[a])
        {
            max = allScore[a];
        }
    }
    p.innerText = `Highest Score : ${max}`;
}


replay.addEventListener("click", function () {
    if(c == 1)
    {
        started = false;
        gameSequence.splice(0, i);
        i = 0;
        userSequence.splice(0, j);
        j = 0;
        level = 0;
        if (started == false) {
            started = true;
            h2.innerText = `Level ${level}`;
            level++;
            generateRand();
        }
    }
});


exit.addEventListener("click", function() {
    location.reload();
});






