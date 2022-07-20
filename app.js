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
const defaultId = 'color'

let currentColor = defaultColor;
let currentSize = size;
let currentId = defaultId;

// FUNCTION TO RENDER THE GRID
const makeRows = (rows) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", rows);
  range.insertBefore(h1, slider);
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener("click", (e) => {
      e.target.style.backgroundColor = currentColor;
    });
    container.appendChild(div).classList.add("grid-item");
  }
};

function setColor(e) {
  currentColor = e;
  console.log(currentColor)
}

function reloadGrid() {
  clear()
  makeRows(currentSize);
}

function setSize(newSize) {
  currentSize = newSize
  return currentSize;
}

function clear() {
  container.innerHTML = '';
}
// GENERATES A RANDOM COLOR
const random = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  return `#${randomColor}`;
};

color.oninput = (e) => setColor(e.target.value)
colorBtn.onclick = (e) => updateBtn(e)
rainbowBtn.onclick = (e) => updateBtn(e)
clearBtn.onclick = () => clear()

let active = false;
document.body.onmousedown = () => (active = true);
document.body.onmouseup = () => (active = false);

function setBtn(e) {
  activeBtn(e)
  normal = e
};

function setBtn(e) {

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


window.onload = () => {
  makeRows(size);
  h1.textContent = `${slider.value} x ${slider.value}`;
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