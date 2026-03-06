import {loadPortfolio,savePortfolio} from "./storage.js";
import {calculatePortfolio} from "./portfolioEngine.js";
import {fetchPrice} from "./priceService.js";
import {parseExcel} from "./excelImport.js";
import {drawAllocationChart} from "./charts.js";

let trades=loadPortfolio();

window.showDashboard=async function(){

const portfolio=calculatePortfolio(trades);

let totalInvested=0;
let totalValue=0;

for(const s of portfolio){

const price=await fetchPrice(s.symbol);

const value=price*s.qty;

totalInvested+=s.invested;
totalValue+=value;

}

const pnl=totalValue-totalInvested;

document.getElementById("content").innerHTML=`

<h2>Dashboard</h2>

<p>Total Invested : ₹${totalInvested.toFixed(0)}</p>
<p>Current Value : ₹${totalValue.toFixed(0)}</p>
<p>P&L : ₹${pnl.toFixed(0)}</p>

<canvas id="allocationChart"></canvas>

`;

drawAllocationChart(portfolio);

}

window.showPortfolio=function(){

const portfolio=calculatePortfolio(trades);

let html=`<h2>Portfolio</h2><table>
<tr>
<th>Symbol</th>
<th>Qty</th>
<th>Invested</th>
</tr>`;

portfolio.forEach(p=>{

html+=`<tr>
<td>${p.symbol}</td>
<td>${p.qty}</td>
<td>${p.invested}</td>
</tr>`;

});

html+="</table>";

document.getElementById("content").innerHTML=html;

}

window.importExcel=async function(){

const file=document.getElementById("excelFile").files[0];

const newTrades=await parseExcel(file);

trades=trades.concat(newTrades);

savePortfolio(trades);

alert("Excel Imported");

}

showDashboard();
