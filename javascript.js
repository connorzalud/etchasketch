let gridSize = 20


const container = document.querySelector(".main-container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.style.gridTemplateColumns=`repeat(${gridSize}, 1fr)`;
gridContainer.style.gridTemplateRows=`repeat(${gridSize}, 1fr)`;



for(i=1; i<=gridSize*gridSize; i++){
    const box = document.createElement("div");
    box.classList.add("grid");
    gridContainer.append(box);
    container.append(gridContainer);
}


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