{
  let list = document.getElementsByTagName("ol");
  console.log(list);
  let target = list[0];
  console.log(target)

  target.onmousemove = (e) => {
    console.log("Mouse over")
    target.childNodes[1].childNodes[0].nodeValue = "Hoes";
  };
}