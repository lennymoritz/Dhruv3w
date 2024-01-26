const oceanBtn = document.getElementById('ocean-btn');
const about1 = document.querySelector('.oceancontent');

oceanBtn.addEventListener('click', () => {
  about1.classList.toggle('open');
  about1.classList.toggle('closed');
});

const shopBtn = document.getElementById('shoppers-btn');
const about2 = document.querySelector('.shopcontent');

shopBtn.addEventListener('click', () => {
    about2.classList.toggle('open');
    about2.classList.toggle('closed');
});

const conBtn = document.getElementById('connektra-btn');
const about3 = document.querySelector('.concontent');

conBtn.addEventListener('click', () => {
  about3.classList.toggle('open');
  about3.classList.toggle('closed');
});

document.getElementById('aboutText2').addEventListener('click', function() {
    // Navigate to the target webpage
    window.location.href = '../dist/index.html#about1';
});

document.getElementById('skillsText2').addEventListener('click', function() {
    // Navigate to the target webpage
    window.location.href = '../dist/index.html#skill1';
});

document.getElementById('aboutText3').addEventListener('click', function() {
  // Navigate to the target webpage
  window.location.href = '../dist/index.html#about1';
});

document.getElementById('skillsText3').addEventListener('click', function() {
  // Navigate to the target webpage
  window.location.href = '../dist/index.html#skill1';
});


