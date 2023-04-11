import { user } from './user.js';

export let computer_choose;
const computer = document.querySelector('.computer');

let userObserver = new MutationObserver(setComputerImg);

userObserver.observe(user, {
  childList: true,
  subtree: true,
  characterDataOldValue: true,
});

function deleteComputerImg() {
  let computerChooseImg = document.querySelector('.computer_choose');
  computerChooseImg.remove();
}

function setComputerImg() {
  deleteComputerImg();
  setRandomImg();
}

function setRandomImg() {
  const imgs = ['./img/rock.png', './img/paper.png', './img/scissors.png'];
  const randomNum = Math.floor((Math.random() * 10) % 3);
  const newComputerImg = document.createElement('img');
  newComputerImg.setAttribute('src', imgs[randomNum]);
  newComputerImg.setAttribute('class', 'computer_choose');
  computer.appendChild(newComputerImg);
  setComputerChoose(randomNum);
}

function setComputerChoose(num) {
  switch (num) {
    case 0:
      computer_choose = 'rock';
      break;
    case 1:
      computer_choose = 'paper';
      break;
    case 2:
      computer_choose = 'scissors';
      break;
  }
}
