import { user, user_choose } from './user.js';
import { computer_choose } from './computer.js';

let userObserver = new MutationObserver(() => {
  getScore();
  setScore();
});

userObserver.observe(user, {
  childList: true,
  subtree: true,
  characterDataOldValue: true,
});

const computer_score_box = document.querySelector('.score_computer');
const user_score_box = document.querySelector('.score_user');

let computer_score = 0;
let user_score = 0;

// 누가 이겼는지 판단
function getScore() {
  if (
    (user_choose === 'rock' && computer_choose === 'paper') ||
    (user_choose === 'paper' && computer_choose === 'scissors') ||
    (user_choose === 'scissors' && computer_choose === 'rock')
  ) {
    computer_score++;
  }
  if (
    (user_choose === 'rock' && computer_choose === 'scissors') ||
    (user_choose === 'paper' && computer_choose === 'rock') ||
    (user_choose === 'scissors' && computer_choose === 'paper')
  ) {
    user_score++;
  }
}

// 점수를 재세팅
function setScore() {
  computer_score_box.innerHTML = computer_score;
  user_score_box.innerHTML = user_score;
}
