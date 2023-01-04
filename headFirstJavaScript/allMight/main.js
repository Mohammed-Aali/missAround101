window.onload = init;
function init() {
   let img = document.getElementsByTagName("img");
   for(let i = 0; i < img.length; i++) {
    img[i].onclick = showAnswer;
   }
}

function showAnswer(eventObj){
    let img = eventObj.target;
    let pathWay = `/headFirstJavaScript/Head-First-JavaScript-Programming-master/Head-First-JavaScript-Programming-master/chapter9/`;
    let name = img.id;
    name = `${pathWay}${name}.jpg`
    img.src = name;
}

