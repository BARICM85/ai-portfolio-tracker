function showDashboard(){

let portfolio=loadPortfolio();

let invested=calculateInvested(portfolio);

let current=calculateCurrent(portfolio);

let gain=current-invested;

document.getElementById("content").innerHTML=`

<h2>Dashboard</h2>

<p>Total Invested: ₹${invested.toFixed(2)}</p>

<p>Current Value: ₹${current.toFixed(2)}</p>

<p>Total P/L: ₹${gain.toFixed(2)}</p>

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
