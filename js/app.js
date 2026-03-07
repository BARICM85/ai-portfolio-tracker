import {loadPortfolio,savePortfolio,switchPortfolio,clearPortfolio} from "./storage.js"
import {calculateInvested,calculateCurrent,calculateCAGR} from "./portfolioEngine.js"
import {fetchPrice,fetchNifty} from "./priceService.js"
import {showMarketHeatmap} from "./marketHeatmap.js"
import {showSectorFlow} from "./sectorFlow.js"

window.showDashboard=async function(){

let portfolio=loadPortfolio()

let invested=calculateInvested(portfolio)

let current=calculateCurrent(portfolio)

let gain=current-invested

let cagr=calculateCAGR(invested,current,1)

let nifty=await fetchNifty()

document.getElementById("content").innerHTML=`

<h2>Dashboard</h2>

<div class="card">
<p>Invested ₹${invested}</p>
<p>Current ₹${current}</p>
<p>P/L ₹${gain}</p>
</div>

<div class="card">
<p>CAGR ${cagr.toFixed(2)}%</p>
<p>Nifty ${nifty}</p>
</div>

<canvas id="chart"></canvas>

<div id="heatmap"></div>

<div id="sectorflow"></div>

`

showMarketHeatmap()

showSectorFlow(portfolio)

}

window.showUpload=function(){

document.getElementById("content").innerHTML=`

<h2>Upload Excel</h2>

<input type="file" id="excelFile">

<button onclick="handleExcelUpload()">Upload</button>

`

}

window.showPortfolio=function(){

let portfolio=loadPortfolio()

let html="<h2>Portfolio</h2>"

portfolio.forEach((s,i)=>{

html+=`

<div>

${s.name} | Qty ${s.qty} | Price ${s.price}

<button onclick="deleteStock(${i})">Delete</button>

</div>

`

})

document.getElementById("content").innerHTML=html

}

window.deleteStock=function(i){

let p=loadPortfolio()

p.splice(i,1)

savePortfolio(p)

showPortfolio()

}

window.exportPortfolio=function(){

let p=loadPortfolio()

let csv="Name,Price,Qty\n"

p.forEach(s=>{

csv+=`${s.name},${s.price},${s.qty}\n`

})

let blob=new Blob([csv])

let a=document.createElement("a")

a.href=URL.createObjectURL(blob)

a.download="portfolio.csv"

a.click()

}

window.switchPortfolio=switchPortfolio
window.clearPortfolio=clearPortfolio

showDashboard()
