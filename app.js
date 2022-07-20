// MAIN CONTAINER //
const container = document.getElementById("container");
const slider = document.getElementById("slider");
const range = document.getElementById("range");
const h1 = document.createElement("h1");
const span = document.getElementById('color_front')

// BUTTONS //
const color = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById("rainbow");
const colorBtn = document.getElementById("color");
const clearBtn = document.getElementById("clear");

// DECLARATIONS //
const size = slider.value;
const defaultColor = color.value;
const defaultId = "color";

let currentColor = defaultColor;
let currentSize = size;
let currentId = defaultId;
let val = `${slider.value} x ${slider.value}`;

// FUNCTION TO RENDER THE GRID
const makeRows = (rows) => {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  range.insertBefore(h1, slider);
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", change);
    div.addEventListener("mousedown", change);
    container.appendChild(div).classList.add("grid-item");
  }
};

function setColor(e) {
  currentColor = e;
}

function reloadGrid() {
  clear();
  makeRows(currentSize);
}

function setSize(newSize) {
  currentSize = newSize;
  return currentSize;
}

function updateSize(e) {
  h1.textContent = `${e} x ${e}`;
}

function setCurrent(mode) {
  activeBtn(mode);
  currentId = mode;
  console.log(currentId)
}

function changeSize(value) {
  setSize(value)
  updateSize(value)
  reloadGrid()
}

function clear() {
  container.innerHTML = "";
  colorBtn.classList.remove("active");
  rainbowBtn.classList.remove("active");
}

// GENERATES A RANDOM COLOR
const random = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

color.oninput = (e) => setColor(e.target.value);
colorBtn.onclick = () => setCurrent("color");
rainbowBtn.onclick = () => setCurrent("rainbow");
clearBtn.onclick = () => reloadGrid();
slider.onchange = (e) => changeSize(e.target.value)
slider.onmousemove = (e) => updateSize(e.target.value);

let active = false;
document.body.onmousedown = () => (active = true);
document.body.onmouseup = () => (active = false);
document.body.onmouseleave = () => (active = false);

function change(e) {
  if (e.type === "mouseover" && !active) return;
  if (currentId === "rainbow") e.target.style.backgroundColor = random();
  else if (currentId === "color") e.target.style.backgroundColor = currentColor;
}

function activeBtn(e) {
  if (currentId === "color") colorBtn.classList.remove("active");
  else if (currentId === "rainbow") rainbowBtn.classList.remove("active");
  if (e === "color") colorBtn.classList.add("active");
  else if (e === "rainbow") rainbowBtn.classList.add("active");
}


window.onload = () => {
  makeRows(size);
  h1.textContent = val;
};
