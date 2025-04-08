'use strict';

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});