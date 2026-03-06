import { fetchMarketData } from "./marketService.js";

const niftyStocks = [

"TCS.NS",
"RELIANCE.NS",
"HDFCBANK.NS",
"ICICIBANK.NS",
"INFY.NS",
"ITC.NS",
"LT.NS",
"SBIN.NS",
"AXISBANK.NS"

];

export async function showMarketHeatmap(){

let html = "<h2>Market Heatmap</h2>";
html += '<div class="heatmap">';

for(let symbol of niftyStocks){

let data = await fetchMarketData(symbol);

if(!data) continue;

let color =
data.changePercent >= 0
? "green"
: "red";

html += `
<div class="heat-cell"
style="background:${color}">
${symbol.replace(".NS","")}
<br>
${data.changePercent.toFixed(2)}%
</div>
`;

}

html += "</div>";

document.getElementById("heatmap").innerHTML = html;

}
