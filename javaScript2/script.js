{
  let d = document.getElementById("destination");
  for(let i = 0; i < 10; i++) {
    for(let j = i; j >= 0; j--){
      d.append(j + " ")
    }
    let br = document.createElement("br")
    d.appendChild(br)
  }
}