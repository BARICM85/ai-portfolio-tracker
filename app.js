import { loadPortfolio,savePortfolio,switchPortfolio,clearPortfolio } from "./storage.js"
import { fetchPrice,fetchNifty } from "./priceService.js"
import { invested,current,cagr } from "./portfolioEngine.js"
import { drawPortfolioChart,drawSectorChart } from "./charts.js"
import { aiSignal } from "./ai.js"

import "./excelImport.js"
import "./auth.js"

window.switchPortfolio=switchPortfolio
window.clearPortfolio=clearPortfolio

window.showDashboard=async function(){

let p=await loadPortfolio()

let nifty=await fetchNifty()
document.getElementById("nifty").innerText=nifty

for(let s of p){

let price=await fetchPrice(s.code)

s.current=price
s.change=((price-s.price)/s.price)*100

}

await savePortfolio(p)

let inv=invested(p)
let cur=current(p)

document.getElementById("invested").innerText=inv
document.getElementById("current").innerText=cur
document.getElementById("cagr").innerText=cagr(inv,cur,3).toFixed(2)+"%"

render(p)

drawPortfolioChart(p)
drawSectorChart(p)
drawHeatmap(p)

}

function render(p){

let html=""

p.forEach((s,i)=>{

html+=`
<tr>
<td>${s.name}</td>
<td>${s.qty}</td>
<td>${s.price}</td>
<td>${s.current||0}</td>
<td>${s.change.toFixed(2)}%</td>
<td>${aiSignal(s)}</td>
<td><button onclick="deleteStock(${i})">Delete</button></td>
</tr>
`

})

document.getElementById("tableBody").innerHTML=html

}

window.deleteStock=async function(i){

let p=await loadPortfolio()
p.splice(i,1)

await savePortfolio(p)

showDashboard()

}

function drawHeatmap(p){

let h=document.getElementById("heatmap")
h.innerHTML=""

p.forEach(s=>{

let d=document.createElement("div")

d.className="heat"
d.innerText=s.name

d.style.background=s.change>0?"green":"red"

h.appendChild(d)

})

}

showDashboard()