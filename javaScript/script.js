//getting the element from the dom and initalizing them
const form = document.querySelector("#addForm");
const itemList = document.querySelector("#items");
const filter = document.querySelector("#filter");

//adding an event listener for submit
form.addEventListener("submit", addItem)
//adding an event listener to itemlist
itemList.addEventListener("click", removeItem)
// filter event listener to filter
filter.addEventListener("keyup", filterItems)

//declaring the addItem or the submit event lestener handle
function addItem(e) {
    // preventing natural behaviour of form
    e.preventDefault();

    // get input value
    let inputValue = document.querySelector("#item").value;

    //create a new list item
    let li = document.createElement("li");
    // add class to it
    li.className = "list-group-item"
    // adding text node the li
    li.appendChild(document.createTextNode(inputValue));
    // if its not an empty string add it else dont
    if (inputValue != "") {
        //adding our created element to itemlist aka <ul>
        itemList.appendChild(li);
    }
    //createing our delete button
    let del = document.createElement("button");
    // adding classes to our del
    del.className = "btn btn-danger btn-sm float-right delete"
    //append text node
    del.appendChild(document.createTextNode("X"));
    // append del to our li
    li.appendChild(del);
    console.log(li);
}

//REMOVE ITEMS  
function removeItem(event) {
    if(event.target.classList.contains('delete')) {
        if(confirm('Are You Sure?')) {
            let li = event.target.parentElement;
            console.log(li)
            itemList.removeChild(li);
        }
    }
}

//FILTER ITEMS
function filterItems(event) {
    // convert text to lower case
    let text = event.target.value.toLowerCase();
    // grabing all the li in itemList
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = "none";
        }
    })
    
}