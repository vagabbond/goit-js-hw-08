import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');
const formInfo = {};
const localStorageId = 'feedback-form-state';

onFormRedact();

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onButtonChange);
function onInputChange(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(localStorageId, JSON.stringify(formInfo));
}

function onButtonChange(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageId)));
  localStorage.removeItem(localStorageId);
  event.currentTarget.reset();
}

function onFormRedact() {
  const savedItems = localStorage.getItem(localStorageId);
  const parsedItems = JSON.parse(localStorage.getItem(localStorageId));
  if (savedItems) {
    formInput.value = parsedItems.email;
    formTextarea.value = parsedItems.message;
  }
}
