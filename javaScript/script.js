//examine the document object
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// //
// console.log(document.doctype);
// console.log(document.head)
// console.log(document.all)
// //
// console.log(document.forms[0])
// console.log(document.links)


// selectors

// get element by id

// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle.innerHTML)
//headerTitle.style.borderBottom = "solid black 1px";

//get Element by class name;
// const items = document.getElementsByClassName("list-item");
// console.log(items[2]);
// items[2].innerHTML = "<strong>hello</strong>"
// items[2].style.color = "red";
// let i = 0;
// while (i < items.length) {
//     items[i].style.color = "purple"
//     i++
// }

// get element by tag name

// const li = document.getElementsByTagName("li");
// li[2].innerHTML = "<strong>hello 2</strong>"
// li[2].style.color = "red";

// let i = 0;
// while (i < li.length) {
//     li[i].style.color = "purple"
//     i++
// }

// query selector //
// const header = document.querySelector("#header-title");
// header.style.borderBottom = "solid 1px black"

// let input = document.querySelector("input");
// input.placeholder = "Hello world"

// const submit = document.querySelector("input[type='submit']");
// console.log(submit)
// submit.value = "suck my balls";

// let item = document.querySelector(".list-item")
// item.style.color = "pink"
// let item1 = document.querySelector(".list-item:last-child")
// item1.style.color = "red";
// let item2 = document.querySelector(".list-item:nth-child(2)")
// item2.style.color = "yellow"

// query selector all //
// let title = document.querySelectorAll("li");
// console.log(title)
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "gray";
//     even[i].style.backgroundColor = "lightblue";
// }

// traversin the dom//
// let itemList = document.querySelector("#items");
//parent node
// console.log(itemList.parentNode);
// itemList.style.backgroundColor = "lightgreen";
// console.log(itemList.parentNode.parentNode);

// parent element //
// console.log(itemList.parentElement);
// itemList.style.backgroundColor = "lightgreen";
// console.log(itemList.parentElement.parentElement);

// child nodes
// console.log(itemList.childNodes)

//childeren //
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[1].style.backgroundColor = "yellow";

// // last chile
// console.log(itemList.lastChild)
// // first element child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "hello 1"

//next sibling

//examine the document object
// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// //
// console.log(document.doctype);
// console.log(document.head)
// console.log(document.all)
// //
// console.log(document.forms[0])
// console.log(document.links)

// selectors

// get element by id

// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle.innerHTML)
//headerTitle.style.borderBottom = "solid black 1px";

//get Element by class name;
// const items = document.getElementsByClassName("list-item");
// console.log(items[2]);
// items[2].innerHTML = "<strong>hello</strong>"
// items[2].style.color = "red";
// let i = 0;
// while (i < items.length) {
//     items[i].style.color = "purple"
//     i++
// }

// get element by tag name

// const li = document.getElementsByTagName("li");
// li[2].innerHTML = "<strong>hello 2</strong>"
// li[2].style.color = "red";

// let i = 0;
// while (i < li.length) {
//     li[i].style.color = "purple"
//     i++
// }

// query selector //
// const header = document.querySelector("#header-title");
// header.style.borderBottom = "solid 1px black"

// let input = document.querySelector("input");
// input.placeholder = "Hello world"

// const submit = document.querySelector("input[type='submit']");
// console.log(submit)
// submit.value = "suck my balls";

// let item = document.querySelector(".list-item")
// item.style.color = "pink"
// let item1 = document.querySelector(".list-item:last-child")
// item1.style.color = "red";
// let item2 = document.querySelector(".list-item:nth-child(2)")
// item2.style.color = "yellow"

// query selector all //
// let title = document.querySelectorAll("li");
// console.log(title)
// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for(let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "gray";
//     even[i].style.backgroundColor = "lightblue";
// }

// traversin the dom//
// const itemList = document.querySelector("#items");
// //parent node
// console.log(itemList.parentNode);
// itemList.style.backgroundColor = "lightgreen";
// console.log(itemList.parentNode.parentNode);

// parent element //
// console.log(itemList.parentElement);
// itemList.style.backgroundColor = "lightgreen";
// console.log(itemList.parentElement.parentElement);

// child nodes
// console.log(itemList.childNodes)

//childeren //
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[1].style.backgroundColor = "yellow";

// // last chile
// console.log(itemList.lastChild)
// // first element child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "hello 1"

//next sibling
// console.log(items.nextSibling)
// console.log(items.nextElementSibling)

// previousSibling //
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)

//create Element

// let newDiv = document.createElement("div")

// // add class
// newDiv.className = "Hello";

// //add id
// newDiv.id = "hello1"

// //add attribute
// newDiv.setAttribute('title', 'Hello div');

// //create text node
// let newDivText = document.createTextNode("Hello world");

// // add text to div
// newDiv.appendChild(newDivText);
// let header = document.querySelector("#main-header")
// let header2 = document.querySelector("#header-title")

// header.insertBefore(newDiv, header2);

// console.log(newDiv)


//event object
// const button = document.querySelector("button").addEventListener('click', buttonClick)
// let counter = 0;

// function buttonClick(event) {
    // document.querySelector("#header-title").textContent = 'Changed'
    // document.querySelector("#main-header").style.backgroundColor = "gray"
    // console.log("x" + event.clientX)
    // console.log("y" + event.clientY)

    // console.log("x" + event.offsetX)
    // console.log("y" + event.offsetY)

    // console.log(event.altKey);
    // console.log(event.ctrlKey);
    // console.log(event.shiftKey);
// }

// const button = document.querySelector("button")
// const box = document.querySelector("#box");
// // button.addEventListener("click", runEvent)
// // button.addEventListener("dblclick", runEvent)
// // button.addEventListener("mousedown", runEvent)
// // button.addEventListener("mouseup", runEvent)
// // box.addEventListener("mouseenter", runEvent);
// // box.addEventListener("mouseleave", runEvent);
// let p = document.createElement('p')
// p.style.fontSize = "2rem";
// p.innerHTML = "Hello"
// box.appendChild(p)
// // // box.addEventListener("mouseover", runEvent);
// // box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

const input = document.querySelector(`input[type="text"]`)
const form = document.querySelector(`form`);
const select = document.querySelector(`select`);
// input.addEventListener("keypress", runEvent)
// input.addEventListener("focus", runEvent)
// input.addEventListener("blur", runEvent)

// input.addEventListener("cut", runEvent)
// input.addEventListener("paste", runEvent)
select.addEventListener("change", runEvent)

function runEvent(event){
    console.log('Event Type: ' + event.type);
    // document.body.style.display = "none"
    // console.log(event.target.value)
    // document.querySelector("#output").innerHTML = `<h3>${event.target.value}</h3>`
}