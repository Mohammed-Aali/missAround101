const input = document.querySelector(`input`);
const h1 = document.querySelector(`h1`);

input.addEventListener(`keyup`, display);

function display() {
    h1.innerHTML = input.value;
}
