import { showMarketHeatmap } from "./marketHeatmap.js";
import { showSectorFlow } from "./sectorFlow.js";
async function showDashboard(){

let portfolio = loadPortfolio(activePortfolio);

let invested = calculateInvested(portfolio);

let current = calculateCurrent(portfolio);

let gain = current - invested;

let years = 1;

let cagr = calculateCAGR(invested,current,years);

let nifty = await fetchNifty();

document.getElementById("content").innerHTML = `

<h2>Portfolio Dashboard</h2>

<div class="card">
<p>Total Invested: ₹${invested.toFixed(2)}</p>
<p>Current Value: ₹${current.toFixed(2)}</p>
<p>Total P/L: ₹${gain.toFixed(2)}</p>
</div>

<div class="card">
<h3>Performance</h3>

<p>CAGR: ${cagr.toFixed(2)}%</p>

<p>Benchmark (Nifty): ${nifty || "-"} </p>

</div>

<div id="chartArea"></div>

<div id="heatmap"></div>

<div id="sectorflow"></div>

`;

showMarketHeatmap();

showSectorFlow(portfolio);

}

window.showDashboard = showDashboard;
window.showPortfolio = showPortfolio;
window.showAddStock = showAddStock;
window.showUpload = showUpload;
window.showAllocation = showAllocation;
window.switchPortfolio = switchPortfolio;
window.exportPortfolio = exportPortfolio;
window.clearPortfolio = clearPortfolio;
window.deleteStock = deleteStock;
