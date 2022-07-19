const container = document.getElementById('container')
const slider = document.getElementById('slider')
const range = document.getElementById('range')
const h1 = document.createElement('h1')
const color = document.getElementById('colorPicker')
h1.textContent = `${slider.value} x ${slider.value}`
console.log(color.value)
const randomColor = Math.floor(Math.random()*16777215).toString(16);


console.log(randomColor)
const makeRows = (rows) => {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', rows)
  range.insertBefore(h1, slider)
  for(let i = 0; i < (rows * rows); i++) {
    const div = document.createElement('div')
    div.addEventListener('dragover', (e) => {
        console.log('yo')
        e.target.style.backgroundColor = color.value;
    })
    div.addEventListener('mouseover', (e) => {
      // e.target.style.backgroundColor = color.value;
    })
    // div.textContent = (i + 1)
    container.appendChild(div).classList.add('grid-item')
  }
}

slider.addEventListener('input', () => {
  h1.textContent = `${slider.value} x ${slider.value}`
})

color.addEventListener('input', () => {
  console.log(color.value)
})

makeRows(slider.value)


