// MAIN CONTAINER //
const container = document.getElementById("container");
const slider = document.getElementById("slider");
const range = document.getElementById("range");
const h1 = document.createElement("h1");

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
  console.log(currentColor);
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
  console.log(currentId);
}

function changeSize(value) {
  setSize(value)
  updateSize(value)
  reloadGrid()
}

function clear() {
  container.innerHTML = "";
}

// GENERATES A RANDOM COLOR
const random = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
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

function change(e) {
  console.log(currentColor);
  if (e.type === "mouseover" && !active) return;
  if (currentId === "rainbow") e.target.style.backgroundColor = random();
  else if (currentId === "color") e.target.style.backgroundColor = currentColor;
}

function activeBtn(e) {
  if (currentId === "rainbow") rainbowBtn.classList.remove("active");
  if (currentId === "color") rainbowBtn.classList.remove("active");
  if (e === "rainbow") rainbowBtn.classList.add("active");
  if (e === "color") rainbowBtn.classList.add("active");
}
// color.value
// rainbowBtn.addEventListener('click', () => {
// div.addEventListener("click", (e) => {
//   e.target.classList.add('active')
//     e.target.style.backgroundColor = random();
//     e.target.style.cssText = ''
//   });
//   console.log(active)
//   // active[e.target].style.backgroundColor = 'orange';
// });

// ("click", (e) => {
//   e.target.style.backgroundColor = currentColor;
// });

window.onload = () => {
  makeRows(size);
  h1.textContent = val;
};

// if ((normal = "color")) e.target.style.backgroundColor = defaultColor;
//   else if ((normal = "rainbow")) e.target.style.backgroundColor = random();

// const changeColor = (e) => {
//   console.log(e.target.id)
//   normal = e.target.id
//   if (e.type === "mouseover" && !active) return;
//   switch(e.target.id) {
//     case 'color':
//       normal = e.target.id
//       e.target.style.backgroundColor = defaultColor;
//       console.log('do')
//       return
//     case 'rainbow':
//       normal = e.target.id
//       console.log('doo')
//       return
//     case 'clear':
//       normal = e.target.id
//       console.log('dooo')
//       return
//   }
//   return normal
// };
