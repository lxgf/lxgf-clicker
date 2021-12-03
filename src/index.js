import { isBlock } from 'typescript';
import { getInfoStrings } from './fb';
import classNames from './styles.css';
import Typewriter from 'typewriter-effect/dist/core';

let score = 0;

let colors = ['#F4533F', '#E9B705', '#3FF472', '#3F92F4', '#633FF4', '#F43FAC'];

document.getElementById("app").innerHTML = `
<div class="container">
  <div class="header">
    <img class="header__image" src='${new URL('./assets/images/window_header.svg', import.meta.url)}' alt="">
    <div>Pixel Clicker</div>
    <div class="header__controls">
      <img src='${new URL('./assets/images/minimize_btn.svg', import.meta.url)}' alt="">
      <img src='${new URL('./assets/images/maximize_btn.svg', import.meta.url)}' alt="">
      <img src='${new URL('./assets/images/close_btn.svg', import.meta.url)}' alt="">
    </div>
  </div>
  <div class="main">
    <div class="score">0</div>
    <div class="info"></div>
    <div class="click-btn">Click Me!</div>
  </div>
  <div class="footer">
    <div>2021 copyright</div>
    <div>lxgf</div>
  </div>
</div>
`;

const getBtnBg = () => {
  const rgbColor = getComputedStyle(clickBtn).backgroundColor,
  hexColor = '#' + rgbColor.substr(4, rgbColor.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16).padStart(2, '0')).join('');
  return hexColor.toUpperCase();
}

let clickBtn = document.querySelector('.click-btn');
scoreCounter = document.querySelector('.score');

clickBtn.addEventListener('click', () => {
  score++;
  scoreCounter.innerHTML = score;
  const color = getBtnBg();
  const i = colors.indexOf(color, 0);
  if (i === colors.length-1) clickBtn.style.backgroundColor = colors[0];
  clickBtn.style.backgroundColor = colors[i+1];
  scoreHasChanged();
});

const scoreHasChanged = () => {
  if ((score !== 0)  && (score % 10 === 0)) {
    console.log('1');
  }
}

getInfoStrings().then((res) => {
  let typewriter = new Typewriter(document.querySelector('.info'), {
    strings: [...res],
    autoStart: true,
    loop: true
  });
})