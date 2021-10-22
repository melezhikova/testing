import validator from './validator';
import paymentSystem from './paymentSystem';

const systems = ['mir', 'american_express', 'discover', 'diners_club', 'jcb', 'maestro', 'mastercard', 'unionpay', 'VISA'];
const cards = document.querySelector('.cards');
for (let i = 0; i < systems.length; i += 1) {
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  cardEl.classList.add('notactive');
  cardEl.classList.add(systems[i]);
  cards.appendChild(cardEl);
}

function mistakeInfo(message) {
  const mistake = document.querySelector('.mistake');
  mistake.innerText = `${message}`;
}

function changeClass(element) {
  element.classList.toggle('notactive');
  element.classList.toggle('active');
}

function showSystem(system) {
  const activeCard = document.querySelector('.active');
  if (activeCard) {
    changeClass(activeCard);
  }
  const firstCard = document.querySelector('.cards .card');
  const inputCard = document.querySelector(`.${system}`);
  changeClass(inputCard);
  cards.replaceChild(inputCard, firstCard);
  cards.appendChild(firstCard);
}

const button = document.querySelector('[data-id=card-submit]');
button.addEventListener('click', (event) => {
  event.preventDefault();
  const inputEl = document.querySelector('[id=card-input]');
  const inputValue = inputEl.value;
  const value = inputValue.replace(/\s+/g, '');
  if (value.length < 16) {
    mistakeInfo('Номер карты должен содержать минимум 16 цифр');
  } else if (validator(value) === false) {
    mistakeInfo('Проверьте правильность ввода номера карты');
  }
  showSystem(paymentSystem(value));
});
