const gridContainer = document.querySelector(".grid-container");
const sizeButton = document.querySelector(".btn-size");
const clearButton = document.querySelector(".btn-clear");
const randomButton = document.querySelector(".btn-random");
const blackButton = document.querySelector(".btn-black");

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

const getSize = () => {
  gridContainer.innerHTML = "";
  let size = prompt("Size of Sketch");

  if (size > 2 && size <= 100) {
    gridContainer.innerHTML = "";
    squares(size);
  } else {
    alert("Error");
    gridContainer.innerHTML = "";
  }
};

const reset = () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "#dbd7d2";
  });
};

const randomColors = () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      square.style.backgroundColor = "#" + randomColor;
    });
  });
};

const blackColor = () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "#000";
    });
  });
};

blackButton.addEventListener("click", () => blackColor());
randomButton.addEventListener("click", () => randomColors());
clearButton.addEventListener("click", () => reset());
sizeButton.addEventListener("click", () => getSize());
