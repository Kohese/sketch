// MAIN CONTAINER //
const container = document.getElementById("container");
const slider = document.getElementById("slider");
const range = document.getElementById("range");
const h1 = document.createElement("h1");

// BUTTONS //
const color = document.getElementById("colorPicker");
const rainbowBtn = document.getElementById('rainbow')
const colorBtn = document.getElementById('color')
const clearBtn = document.getElementById('clear')

const size = slider.value
let normal = 'color'
let defaultColor = color.value

// FUNCTION TO RENDER THE GRID
const makeRows = (rows) => {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", rows);
  range.insertBefore(h1, slider);
  for (let i = 0; i < rows * rows; i++) {
    const div = document.createElement("div");
    div.addEventListener('click', (e) => {
        e.target.style.backgroundColor = changeColor(e);
        console.log(e.type)
    })
    container.appendChild(div).classList.add("grid-item");
  }
};

// GENERATES A RANDOM COLOR 
const random = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor)
  return `#${randomColor}`
}

let active = false
document.body.onmousedown = () => (active = true)
document.body.onmouseup = () => (active = false)

const updateBtn = (e) => {
  normal = e
  return normal
}


const changeColor = (e) => {
  if(e.type === 'mouseover' && !active) return
  if(normal = 'color') {
    console.log(normal)
    e.target.style.backgroundColor = defaultColor
    console.log(defaultColor)
  }
  else if(normal = 'rainbow') e.target.style.backgroundColor = random()

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

const activeBtn = (btn) => {
  if(normal = 'color') console.log('to')
  else if(normal = 'rainbow') console.log('ti')
  else if(normal = 'clear') console.log('ra')
}



window.onload = () => {
  makeRows(size);
  h1.textContent = `${slider.value} x ${slider.value}`;
};
