const ul = document.querySelector('ul');
let array = ['apple', 'banana', 'toamato', 'shit', 'how are you feeling today?']
array.forEach((fruit) => {
    let li = document.createElement("li");
    ul.appendChild(li)
    li.innerHTML = fruit;
})
