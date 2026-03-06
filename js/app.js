import {loadPortfolio,savePortfolio} from "./storage.js";
import {calculateInvested,calculateCurrent,calculateCAGR} from "./portfolioEngine.js";
import {fetchNifty} from "./priceService.js";
import "./excelImport.js";

let activePortfolio="A";

async function showDashboard(){

let portfolio=loadPortfolio(activePortfolio);

let invested=calculateInvested(portfolio);

let current=calculateCurrent(portfolio);

let gain=current-invested;

let cagr=calculateCAGR(invested,current,1);

let nifty=await fetchNifty();

document.getElementById("content").innerHTML=`

<h2>Portfolio Dashboard</h2>

<p>Total Invested : ₹${invested.toFixed(2)}</p>
<p>Current Value : ₹${current.toFixed(2)}</p>
<p>Total P/L : ₹${gain.toFixed(2)}</p>
<p>CAGR : ${cagr.toFixed(2)}%</p>
<p>Nifty : ${nifty}</p>

<canvas id="chart"></canvas>

`;

let ctx=document.getElementById("chart");

new Chart(ctx,{
type:"doughnut",
data:{
labels:portfolio.map(p=>p.name),
datasets:[{
data:portfolio.map(p=>p.price*p.quantity)
}]
}
});

}

function showPortfolio(){

let portfolio=loadPortfolio(activePortfolio);

let html="<h2>Portfolio</h2>";

portfolio.forEach((s,i)=>{

html+=`<p>${s.name} | Qty ${s.quantity} | Price ${s.price}</p>`;

});

document.getElementById("content").innerHTML=html;

}

function showAddStock(){

document.getElementById("content").innerHTML=`

<h2>Add Stock</h2>

<input id="name" placeholder="Name">
<input id="symbol" placeholder="Symbol">
<input id="price" placeholder="Price">
<input id="qty" placeholder="Qty">

<button onclick="addStock()">Add</button>

`;

}

window.addStock=function(){

let portfolio=loadPortfolio(activePortfolio);

portfolio.push({

name:document.getElementById("name").value,
symbol:document.getElementById("symbol").value,
price:Number(document.getElementById("price").value),
quantity:Number(document.getElementById("qty").value)

});

savePortfolio(portfolio,activePortfolio);

showPortfolio();

}

function switchPortfolio(name){

activePortfolio=name;

showDashboard();

}

function showAllocation(){

let portfolio=loadPortfolio(activePortfolio);

let html="<h2>Allocation</h2>";

portfolio.forEach(s=>{

html+=`<p>${s.name}</p>`;

});

document.getElementById("content").innerHTML=html;

}

function exportPortfolio(){

let portfolio=loadPortfolio(activePortfolio);

let ws=XLSX.utils.json_to_sheet(portfolio);

let wb=XLSX.utils.book_new();

XLSX.utils.book_append_sheet(wb,ws,"Portfolio");

XLSX.writeFile(wb,"portfolio.xlsx");

}

window.showDashboard=showDashboard;
window.showPortfolio=showPortfolio;
window.showAddStock=showAddStock;
window.showAllocation=showAllocation;
window.switchPortfolio=switchPortfolio;
window.exportPortfolio=exportPortfolio;

showDashboard();
