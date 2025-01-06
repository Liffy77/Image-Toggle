const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const singleClickButton = document.getElementById('single-click-button');
const doubleClickButton = document.getElementById('double-click-button');

// Single click functionality
let singleClickState = true;
singleClickButton.addEventListener('click', () => {
  if (singleClickState) {
    img1.classList.remove('active');
    img1.classList.add('hidden');
    img2.classList.remove('hidden');
    img2.classList.add('active');
  } else {
    img2.classList.remove('active');
    img2.classList.add('hidden');
    img1.classList.remove('hidden');
    img1.classList.add('active');
  }
  singleClickState = !singleClickState;
});

// Double click functionality
let doubleClickState = true;
doubleClickButton.addEventListener('dblclick', () => {
  if (doubleClickState) {
    img1.classList.remove('active');
    img1.classList.add('hidden');
    img2.classList.remove('hidden');
    img2.classList.add('active');
  } else {
    img2.classList.remove('active');
    img2.classList.add('hidden');
    img1.classList.remove('hidden');
    img1.classList.add('active');
  }
  doubleClickState = !doubleClickState;
});
