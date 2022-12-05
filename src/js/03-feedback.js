import throttle from 'lodash.throttle';
const localStorageId = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');
const formInfo = { ...JSON.parse(localStorage.getItem(localStorageId)) };

let parsedItems = {};

const onFormSubmit = event => {
  event.preventDefault();
  form.reset();
  console.log(localStorage.getItem(localStorageId));
  localStorage.removeItem(localStorageId);
};

const onInputChange = event => {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(localStorageId, JSON.stringify(formInfo));
};

const cheeckLocalStorage = () => {
  if (localStorage.getItem(localStorageId)) {
    parsedItems = JSON.parse(localStorage.getItem(localStorageId));
    formInput.value = parsedItems.email ? parsedItems.email : '';
    formTextarea.value = parsedItems.message ? parsedItems.message : '';
  }
};
form.addEventListener('input', throttle(onInputChange, 500));
cheeckLocalStorage();
form.addEventListener('submit', onFormSubmit);
