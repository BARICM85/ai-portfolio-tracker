import {loadPortfolio,savePortfolio,switchPortfolio,clearPortfolio} from "./storage.js"
import {calculateInvested,calculateCurrent,calculateCAGR,getTopMovers} from "./portfolioEngine.js"
import {fetchPrice,fetchNifty} from "./priceService.js"

import "./excelImport.js"

window.showDashboard=async function(){

let portfolio=loadPortfolio()

let nifty=await fetchNifty()

document.getElementById("nifty").innerText=nifty

for(let s of portfolio){

let price=await fetchPrice(s.code)

s.current=price

s.change=((price-s.price)/s.price)*100

}

savePortfolio(portfolio)

let invested=calculateInvested(portfolio)

let current=calculateCurrent(portfolio)

document.getElementById("invested").innerText=invested

document.getElementById("current").innerText=current

let cagr=calculateCAGR(invested,current,3)

document.getElementById("cagr").innerText=cagr.toFixed(2)+"%"

renderPortfolio(portfolio)

}

function renderPortfolio(portfolio){

let html=""

portfolio.forEach((s,i)=>{

html+=`

<tr>

<td>${s.name}</td>

<td>${s.qty}</td>

<td>${s.price}</td>

<td>${s.current||0}</td>

<td>${s.change.toFixed(2)}%</td>

<td>

<button onclick="deleteStock(${i})">Delete</button>

</td>

</tr>

`

})

document.getElementById("tableBody").innerHTML=html

}

window.deleteStock=function(i){

let portfolio=loadPortfolio()

portfolio.splice(i,1)

savePortfolio(portfolio)

showDashboard()

}

window.showAddStock=function(){

document.getElementById("content").innerHTML=`

<h3>Add Stock</h3>

<input id="name" placeholder="Name">

<input id="code" placeholder="Symbol (RELIANCE.NS)">

<input id="price" placeholder="Buy Price">

<input id="qty" placeholder="Qty">

<button onclick="addStock()">Add</button>

`

}

window.addStock=function(){

let portfolio=loadPortfolio()

let stock={

name:document.getElementById("name").value,
code:document.getElementById("code").value,
price:Number(document.getElementById("price").value),
qty:Number(document.getElementById("qty").value)

}

portfolio.push(stock)

savePortfolio(portfolio)

showDashboard()

}

window.switchPortfolio=switchPortfolio

window.clearPortfolio=clearPortfolio

showDashboard()