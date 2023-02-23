{
  let paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs)

  let strong = paragraphs[0].childNodes[0].childNodes[0]
  strong.nodeValue = "Hollar";

  let list = document.getElementsByTagName("ol");
  console.log(list);
}