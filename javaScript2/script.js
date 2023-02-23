{
  let list = document.getElementsByTagName("ol");
  console.log(list);
  let target = list[0];
  console.log(target.children)

  target.onmousemove = (e) => {
    console.log("Mouse over");
    target.children[0].innerHTML = "Hoes";
  };

  let button = document.getElementById("click");
  button.onmouseenter = (e) => {

    button.innerHTML = "click me please!!";
  }
  button.onmouseleave = (e) => {
    button.innerHTML = "Don't Click me!"

    target.remove();
  }
}