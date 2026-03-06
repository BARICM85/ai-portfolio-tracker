async function showDashboard(){

let portfolio=loadPortfolio();

let invested=calculateInvested(portfolio);

let current=calculateCurrent(portfolio);

let gain=current-invested;

let years=1;

let cagr=calculateCAGR(invested,current,years);

let nifty=await fetchNifty();

document.getElementById("content").innerHTML=`

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

`;

}
function showUpload(){

document.getElementById("content").innerHTML=`

<h2>Upload Excel</h2>

<input type="file" id="excelFile">

<button onclick="handleExcelUpload()">
Upload
</button>

`;

}

function deleteStock(script){

let portfolio=loadPortfolio();

portfolio=portfolio.filter(s=>s.script!==script);

savePortfolio(portfolio);

showPortfolio();

}
