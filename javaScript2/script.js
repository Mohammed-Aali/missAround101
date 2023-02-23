
  let btn = document.getElementById("click");

  btn.onclick = (e) => {
    let node = document.createElement("li");
    node.appendChild(document.createTextNode("new list"))
    console.log(node);
  }
