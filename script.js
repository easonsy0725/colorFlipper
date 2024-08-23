const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// set a array of colors
const colors = ['#ffffff' , '#f0ebbb' , '#d8e2dc' , '#a4c3b2' , '#52616b'];

// change color when the button be clicked
btn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

// ransom array length to get color
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}