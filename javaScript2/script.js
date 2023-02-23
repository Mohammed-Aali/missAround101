{
  let list = document.getElementsByTagName("li");
  console.log(list[0])


  if(list[0].nodeType === 1) {
    console.log("Element");
  } else if(list[0] === 3) {
    console.lof("Text")
  }
}