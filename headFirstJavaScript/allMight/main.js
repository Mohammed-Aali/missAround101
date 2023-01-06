const input = document.querySelector(`input`);
const h1 = document.querySelector(`h1`);

h1.innerHTML = localStorage.getItem(`hello`);
input.addEventListener(`keyup`, display);

function display() {
    localStorage.setItem(`hello`, input.value);
    h1.innerHTML = localStorage.getItem(`hello`);
}

