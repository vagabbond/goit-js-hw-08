import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInfo = {};
form.addEventListener('input', throttle(onInputChange, 500));
function onInputChange(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem('feedback', JSON.stringify(formInfo));
}
form.addEventListener('submit', onButtonChange);

function onButtonChange(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback')));
  localStorage.removeItem('feedback');
  event.currentTarget.reset();
}
