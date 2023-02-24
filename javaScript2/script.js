
  let btn = document.getElementById("click");

  btn.onclick = (e) => {
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(document.getElementById("input").value))
    console.log(node);

    let list = document.getElementById("items");
    list.appendChild(node)
  }