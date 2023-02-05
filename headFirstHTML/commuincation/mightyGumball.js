window.onload = () => {
    let url = "data.json"
    let requst = new XMLHttpRequest()
    requst.open("get", url)
    requst.onload = () => {
        if (requst.status == 200) {
            updateSales(requst.responseText)
        }
    }
    requst.send(null);
}

function updateSales(responseText){
    let salesDiv = document.getElementById("sales");
    salesDiv.textContent = responseText;
}