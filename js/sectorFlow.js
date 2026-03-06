export function showSectorFlow(portfolio){

if(!portfolio || portfolio.length===0) return;

let sectorMap={};

portfolio.forEach(stock=>{

let sector=stock.sector || "Unknown";

let value=stock.quantity*stock.currentPrice;

if(!sectorMap[sector]) sectorMap[sector]=0;

sectorMap[sector]+=value;

});

let html="<div class='card'><h3>Sector Allocation</h3>";

Object.keys(sectorMap).forEach(sector=>{

html+=`<p>${sector}: ₹${sectorMap[sector].toFixed(2)}</p>`;

});

html+="</div>";

document.getElementById("chartArea").innerHTML+=html;

}
