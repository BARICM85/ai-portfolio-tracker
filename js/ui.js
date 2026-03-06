async function showPortfolio(){

let portfolio=loadPortfolio();

let html="<h2>Portfolio "+activePortfolio+"</h2>";

for(let stock of portfolio){

let live=await fetchLivePrice(stock.symbol);

if(live) stock.currentPrice=live;

let invested=stock.averagePrice*stock.quantity;

let current=stock.currentPrice*stock.quantity;

let gain=current-invested;

html+=`

<div class="card">

<h3>${stock.script}</h3>

<p>Qty: ${stock.quantity}</p>

<p>Avg: ₹${stock.averagePrice}</p>

<p>Live: ₹${stock.currentPrice}</p>

<p>Gain: ₹${gain.toFixed(2)}</p>

<button onclick="deleteStock('${stock.script}')">
Delete
</button>

</div>

`;

}

document.getElementById("content").innerHTML=html;

savePortfolio(portfolio);

}

import { analyzePortfolio } from "./aiAdvisor.js";

export function showAIAdvisor(){

let portfolio=loadPortfolio();

let warnings=analyzePortfolio(portfolio);

let html="<h2>AI Portfolio Advisor</h2>";

warnings.forEach(w=>{
html+=`<p style="color:red">${w}</p>`;
});

document.getElementById("content").innerHTML=html;

}

import { calculateSectorFlow } from "./sectorFlow.js";

export function showSectorFlow(portfolio){

let sectors =
calculateSectorFlow(portfolio);

let html="<h2>Sector Allocation</h2>";

for(let s in sectors){

html+=`
<p>
${s} : ₹${sectors[s].toFixed(0)}
</p>
`;

}

document.getElementById("sectorflow").innerHTML = html;

}
