import {loadPortfolio,savePortfolio,switchPortfolio,clearPortfolio} from "./storage.js"

import {calculateInvested,calculateCurrent,calculateCAGR,getTopMovers} from "./portfolioEngine.js"

import {fetchPrice,fetchNifty} from "./priceService.js"

import {drawSectorChart} from "./allocation.js"

import {drawHeatmap} from "./marketHeatmap.js"

import {aiSignal} from "./aiAnalysis.js"

import "./excelImport.js"

window.switchPortfolio=switchPortfolio
window.clearPortfolio=clearPortfolio

window.showDashboard=async function(){

let p=loadPortfolio()

let nifty=await fetchNifty()

document.getElementById("nifty").innerText=nifty

for(let s of p){

let price=await fetchPrice(s.code)

s.current=price

s.change=((price-s.price)/s.price)*100

}

savePortfolio(p)

document.getElementById("invested").innerText=calculateInvested(p)

document.getElementById("current").innerText=calculateCurrent(p)

let cagr=calculateCAGR(calculateInvested(p),calculateCurrent(p),3)

document.getElementById("cagr").innerText=cagr.toFixed(2)+"%"

renderTable(p)

drawSectorChart(p)

drawHeatmap(p)

let movers=getTopMovers(p)

document.getElementById("movers").innerText=

"Gainer: "+(movers.gainer?.name||"-")+" | Loser: "+(movers.loser?.name||"-")

}

function renderTable(p){

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

window.deleteStock=function(i){

let p=loadPortfolio()

p.splice(i,1)

savePortfolio(p)

showDashboard()

}

window.showAddStock=function(){

document.getElementById("content").innerHTML=`

<h3>Add Stock</h3>

<input id="name" placeholder="Name">

<input id="code" placeholder="Symbol">

<input id="price" placeholder="Buy Price">

<input id="qty" placeholder="Qty">

<input id="sector" placeholder="Sector">

<button onclick="addStock()">Add</button>

`

}

window.addStock=function(){

let p=loadPortfolio()

p.push({

name:document.getElementById("name").value,

code:document.getElementById("code").value,

price:Number(document.getElementById("price").value),

qty:Number(document.getElementById("qty").value),

sector:document.getElementById("sector").value

})

savePortfolio(p)

showDashboard()

}

showDashboard()
