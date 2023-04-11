const rock = document.querySelector('#user_rock');
const paper = document.querySelector('#user_paper');
const scissors = document.querySelector('#user_scissors');

export const user = document.querySelector('.user');
export let user_choose;

rock.addEventListener('click', (e) => {
  setUserImg(e.target);
  setUserChoose(e.target);
});
paper.addEventListener('click', (e) => {
  setUserImg(e.target);
  setUserChoose(e.target);
});
scissors.addEventListener('click', (e) => {
  setUserImg(e.target);
  setUserChoose(e.target);
});

function deleteUserImg() {
  const userChooseImg = document.querySelector('.user_choose');
  userChooseImg.remove();
}

function setUserImg(target) {
  deleteUserImg();
  const newUserImg = target.cloneNode(true);
  user.appendChild(newUserImg);
  newUserImg.className = 'user_choose';
}

function setUserChoose(target) {
  switch (target) {
    case rock.children[0]:
      user_choose = 'rock';
      break;
    case paper.children[0]:
      user_choose = 'paper';
      break;
    case scissors.children[0]:
      user_choose = 'scissors';
      break;
  }
}
