function httpRequests() {

const xhr = new XMLHttpRequest;
const main = document.getElementById("main");
console.log(main);
const p = document.createElement("p");
main.appendChild(p);

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            p.innerHTML = xhr.responseText;
        }
        if (xhr.status == 404) {
            console.log("File or resource not found");
        }
    }
}

xhr.open('get', 'dom.txt.', true);
xhr.send()

}
httpRequests()