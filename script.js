const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".btn-reset");

const squares = (n) => {
  gridContainer.style.gridTemplateColumns = `repeat(${n} , 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${n} , 1fr)`;

  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#000";
    });
  }
};

squares(64);
