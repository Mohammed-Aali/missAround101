const div = document.querySelector("main > div")
const img = document.createElement("img");
const imageSrc = "https://crocoder.dev/icon.png";

img.src = imageSrc;
div.appendChild(img)

console.log(img)