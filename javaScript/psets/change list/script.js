const ul = document.querySelectorAll("ul");

ul.forEach(ulElement => {
    ulElement.firstElementChild.innerHTML = "first";
    ulElement.lastElementChild.innerHTML = "last";
})
