window.onload = init;
function init() {
   let img = document.getElementsByTagName("img");
   for(let i = 0; i < img.length; i++) {
    img[i].onmouseover = showAnswer;
    img[i].onmouseout = reblur;
   }
}

function showAnswer(eventObj){
    let img = eventObj.target;
    let pathWay = `/headFirstJavaScript/Head-First-JavaScript-Programming-master/Head-First-JavaScript-Programming-master/chapter9/`
    let name = img.id;
    name = `${pathWay}${name}.jpg`
    img.src = name;
}

function reblur(eventObj) {
    let img = eventObj.target;
    let name = img.id;
    let pathWay = `/headFirstJavaScript/Head-First-JavaScript-Programming-master/Head-First-JavaScript-Programming-master/chapter9/`;
    name = `${pathWay}${name}blur.jpg`;
    img.src = name;
}