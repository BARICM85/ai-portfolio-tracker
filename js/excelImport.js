import {loadPortfolio,savePortfolio} from "./storage.js"

function handleExcelUpload(){

let file=document.getElementById("excelFile").files[0]

if(!file){

alert("Select Excel")

return

}

let reader=new FileReader()

reader.onload=function(e){

let data=new Uint8Array(e.target.result)

let wb=XLSX.read(data,{type:"array"})

let sheet=wb.Sheets[wb.SheetNames[0]]

let rows=XLSX.utils.sheet_to_json(sheet)

let portfolio=loadPortfolio()

rows.forEach(r=>{

portfolio.push({

name:r["Script Name"],

code:r["Script Code"],

price:Number(r.Price),

qty:Number(r.Quantity)

})

})

savePortfolio(portfolio)

alert("Excel imported")

location.reload()

}

reader.readAsArrayBuffer(file)

}

window.handleExcelUpload=handleExcelUpload
