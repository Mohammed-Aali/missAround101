function updateSales(sales){
    let salesDiv = document.getElementById("sales");
    for (let i = 0; i < sales.length; i++){
        let sale = sales[i];
        let div = document.createElement("div")
        div.setAttribute("class", "salesItem");
        div.innerText = `${sale.name} sold ${sale.sales} gumballs`
        salesDiv.appendChild(div);
    }
}