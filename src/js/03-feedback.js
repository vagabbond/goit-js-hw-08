import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formInput = document.querySelector('.feedback-form input');
const formTextarea = document.querySelector('.feedback-form textarea');
const formInfo = {};
const localStorageId = 'feedback-form-state';
let parsedItems = {
  email: '',
  message: '',
};

onFormRedact();

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(localStorageId)));
  localStorage.removeItem(localStorageId);
  event.currentTarget.reset();
});
function onInputChange(event) {
  formInfo[event.target.name] = event.target.value;
  localStorage.setItem(localStorageId, JSON.stringify(formInfo));
}

function onFormRedact() {
  if (localStorage.getItem(localStorageId)) {
    parsedItems = JSON.parse(localStorage.getItem(localStorageId));
  } else {
    parsedItems = {
      email: '',
      message: '',
    };
  }
  if (parsedItems.email !== undefined && parsedItems.email !== null) {
    formInput.value = parsedItems.email;
  } else {
    formInput.value = '';
  }
  if (parsedItems.message !== undefined && parsedItems.message !== null) {
    formTextarea.value = parsedItems.message;
  } else {
    formTextarea.value = '';
  }
}
