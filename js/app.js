import {loadPortfolio,savePortfolio} from "./storage.js";
import {calculateInvested,calculateCurrent,calculateCAGR} from "./portfolioEngine.js";
import {fetchPrice,fetchNifty} from "./priceService.js";
import {handleExcelUpload} from "./excelImport.js";
import {showMarketHeatmap} from "./marketHeatmap.js";
import {showSectorFlow} from "./sectorFlow.js";

let activePortfolio="A";

function switchPortfolio(type){

activePortfolio=type;

showPortfolio();

}

async function showDashboard(){

let portfolio=loadPortfolio(activePortfolio);

let invested=calculateInvested(portfolio);

let current=calculateCurrent(portfolio);

let gain=current-invested;

let cagr=calculateCAGR(invested,current,1);

let nifty=await fetchNifty();

document.getElementById("content").innerHTML=`

<h2>Portfolio Dashboard</h2>

<div class="card">

<p>Total Invested ₹${invested.toFixed(2)}</p>

<p>Current Value ₹${current.toFixed(2)}</p>

<p>Total P/L ₹${gain.toFixed(2)}</p>

</div>

<div class="card">

<p>CAGR ${cagr.toFixed(2)}%</p>

<p>Nifty ${nifty || "-"}</p>

</div>

<div id="heatmap"></div>

<div id="sectorflow"></div>

`;

showMarketHeatmap();

showSectorFlow(portfolio);

}

async function showPortfolio(){

let portfolio=loadPortfolio(activePortfolio);

let html=`<h2>Portfolio ${activePortfolio}</h2>`;

for(let i=0;i<portfolio.length;i++){

let stock=portfolio[i];

const price=await fetchPrice(stock.script+".NS");

if(price) stock.currentPrice=price;

html+=`

<div class="card">

<h3>${stock.script}</h3>

<p>Qty ${stock.quantity}</p>

<p>Avg ₹${stock.averagePrice}</p>

<p>Live ₹${stock.currentPrice}</p>

<button onclick="deleteStock(${i})">Delete</button>

</div>

`;

}

document.getElementById("content").innerHTML=html;

savePortfolio(activePortfolio,portfolio);

}

function showAddStock(){

document.getElementById("content").innerHTML=`

<h2>Add Stock</h2>

<input id="script" placeholder="Stock">

<input id="qty" type="number">

<input id="price" type="number">

<button onclick="addStock()">Add</button>

`;

}

function addStock(){

let script=document.getElementById("script").value.toUpperCase();

let qty=parseFloat(document.getElementById("qty").value);

let price=parseFloat(document.getElementById("price").value);

let portfolio=loadPortfolio(activePortfolio);

portfolio.push({

script,

quantity:qty,

averagePrice:price,

currentPrice:price

});

savePortfolio(activePortfolio,portfolio);

showPortfolio();

}

function deleteStock(index){

let portfolio=loadPortfolio(activePortfolio);

portfolio.splice(index,1);

savePortfolio(activePortfolio,portfolio);

showPortfolio();

}

function showUpload(){

document.getElementById("content").innerHTML=`

<h2>Upload Excel</h2>

<input type="file" id="excelFile">

<button onclick="uploadExcel()">Upload</button>

`;

}

function uploadExcel(){

handleExcelUpload(activePortfolio);

}

function showAllocation(){

document.getElementById("content").innerHTML=`<h2>Allocation coming soon</h2>`;

}

function exportPortfolio(){

let portfolio=loadPortfolio(activePortfolio);

let csv="Script,Qty,AvgPrice\n";

portfolio.forEach(s=>{

csv+=`${s.script},${s.quantity},${s.averagePrice}\n`;

});

let blob=new Blob([csv]);

let a=document.createElement("a");

a.href=URL.createObjectURL(blob);

a.download="portfolio.csv";

a.click();

}

window.showDashboard=showDashboard;
window.showPortfolio=showPortfolio;
window.showAddStock=showAddStock;
window.showUpload=showUpload;
window.showAllocation=showAllocation;
window.exportPortfolio=exportPortfolio;
window.switchPortfolio=switchPortfolio;
window.deleteStock=deleteStock;

showDashboard();
