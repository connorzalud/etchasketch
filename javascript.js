


const container = document.querySelector(".main-container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
const gridbtn = document.querySelector(".grid-button");
const bwbtn = document.querySelector(".bw-button");


const userGrid = document.querySelector(".grid-choice");



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



function makeBlack(){
    bwbtn.addEventListener("click", function(){
        document.querySelectorAll(".grid").forEach(function(a){
            a.addEventListener("mouseover" , function(){
            a.classList.add("grid-black")  
            })
            
        })
    })
}

gridbtn.addEventListener("click", function(){
    setGrid();
})

bwbtn.addEventListener("click", function(){
    makeBlack();
})


/*function createGrid(gridAmount) {
    for (let i = 1; i <= gridAmount; i++) {
        const row = document.createElement('div');
        gridContainer.append(row);
        container.append(gridContainer);

        for (let j = 0; j < gridAmount; j++) {
            const box = document.createElement('div');
            box.classList.add('grid');
           box.style.width = `${1200 / gridAmount}px`;
           box.style.height = `${500 / gridAmount}px`;
            row.append(box);

        }
    }
}


createGrid(5)*/