{
  let list = document.getElementsByTagName("li");
  console.log(list[0].nodeName);


  if(list[0].childNodes[0].nodeType === 1) {
    console.log("Element");
  } else if(list[0].childNodes[0].nodeType === 3) {
    console.log("Text")
  }
}