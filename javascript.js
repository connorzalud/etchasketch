


const container = document.querySelector(".main-container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const gridbtn = document.querySelector(".grid-button");
const bwbtn = document.querySelector(".bw-button");
const colorbtn = document.querySelector(".color-button");
const userGrid = document.querySelector(".grid-choice");
const playerChoice = document.querySelector(".color-player");
const playerbtn = document.querySelector(".player-choice");
const resetbtn = document.querySelector(".reset");



function setGrid(){
    const newGrid = parseInt(userGrid.value);
    gridSize = newGrid;
    gridContainer.style.gridTemplateColumns=`repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows=`repeat(${gridSize}, 1fr)`;  
    document.querySelectorAll(".grid").forEach(function(a){
                a.remove()
        });
    for (i=1; i<=gridSize*gridSize; i++){
        const box = document.createElement("div");
        box.classList.add("grid");
        gridContainer.appendChild(box);
        container.appendChild(gridContainer);
    }
}



function makeBlack2(){
    bwbtn.addEventListener("click", function(){
        document.querySelectorAll(".grid").forEach(function(a){
            a.addEventListener("mouseover" , function(){
            a.style.backgroundColor = "black" 
            })
            
        })
    })
}



function randomColor(){
    let color = Math.floor(Math.random()*256);
    return color
}

function makeColor(){
    colorbtn.addEventListener("click", function(){
        document.querySelectorAll(".grid").forEach(function(a){
            a.addEventListener("mouseover", function(){
                a.style.backgroundColor = "rgb(" + randomColor() + "," + randomColor() + "," + randomColor() + ")"
            })
        })
    })
}

function chooseColor(){
    const playerColor = playerChoice.value;
    playerbtn.addEventListener("click", function(){
        document.querySelectorAll(".grid").forEach(function(a){
            a.addEventListener("mouseover", function(){
                if (playerColor === "blue"){
                    a.style.backgroundColor = "blue"
                } else if (playerColor === "green"){
                    a.style.backgroundColor = "green"
                } else if (playerColor === "red"){
                    a.style.backgroundColor = "red"
                } else if (playerColor === "yellow"){
                    a.style.backgroundColor = "yellow"
                }
            })
        })
    })
}

function resetColor(){
    resetbtn.addEventListener("click", function(){
        document.querySelectorAll(".grid").forEach(function(a){
            a.style.backgroundColor="white"
        })
    })
}

gridbtn.addEventListener("click", function(){
    setGrid();
})

bwbtn.addEventListener("click", function(){
    makeBlack2();
})

colorbtn.addEventListener("click", function(){
    makeColor();
})

playerbtn.addEventListener("click", function(){
    chooseColor();
})

resetbtn.addEventListener("click", function(){
    resetColor();
})
