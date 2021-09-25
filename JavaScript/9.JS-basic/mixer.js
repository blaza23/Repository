let leftContainer = document.querySelector('.containerL');
let rightContainer = document.querySelector('.containerR');
let changeBy = document.querySelector('.getByInput');
let opacityInput = document.querySelector('.opacityInput');
let rgbspan = document.querySelector('.rgb');
let colorDiv = document.querySelector('.colorDiv');
let r = 0;
let g = 0;
let b = 0;

function boja(event){
  if (parseInt(changeBy.value) === 0) {
    colorDiv.innerHTML = '<h1 style=‘color: red;’>Wrong input</h1>';
    console.log(colorDiv);
  }
  if (event.target.value === 'red+') {
    r = r + parseInt(changeBy.value);
    if (r > 255) {
      r = 255;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
  if (event.target.value === 'green+') {
    g = g + parseInt(changeBy.value);
    if (g > 255) {
      g = 255;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
  if (event.target.value === 'blue+') {
    b = b + parseInt(changeBy.value);
    if (b > 255) {
      b = 255;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
  if (event.target.value === 'red-') {
    r = r - parseInt(changeBy.value);
    if (r < 0) {
      r = 0;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
  if (event.target.value === 'green-') {
    g = g - parseInt(changeBy.value);
    if (g < 0) {
      g = 0;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
  if (event.target.value === 'blue-') {
    b = b - parseInt(changeBy.value);
    if (b < 0) {
      b = 0;
    }
    let o = opacityInput.value;
    colorDiv.style.background = rgb(r, g, b, o);
  }
}

leftContainer.addEventListener('click', boja);


function rgb(r, g, b, o) {
  let mixRgb = 'rgba(' + r + ',' + g + ',' + b + ',' + o + ' )';
  rgbspan.innerHTML = mixRgb;
  return mixRgb;
}

function random (event){
  console.log(event.target.value);
  random_bg_color();
}
rightContainer.addEventListener('click', random);

function random_bg_color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let colorContainer = document.querySelector('.colorDiv');
  let colorContainer1 = 'rgb(' + r + ',' + g + ',' + b + ')';
  rgb = 'R: ' + r + ' G: ' + g + ' B: '+ b;
  rgbspan.innerHTML = rgb;
  colorContainer.style.background = colorContainer1;
}