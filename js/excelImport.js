import { loadPortfolio,savePortfolio } from "./storage.js"

window.handleExcelUpload=function(){

let file=document.getElementById("excelFile").files[0]

let reader=new FileReader()

reader.onload=function(e){

let data=new Uint8Array(e.target.result)

let workbook=XLSX.read(data,{type:"array"})

let sheet=workbook.Sheets[workbook.SheetNames[0]]

let rows=XLSX.utils.sheet_to_json(sheet)

let portfolio=loadPortfolio()

rows.forEach(r=>{

portfolio.push({

date:r.Date,
name:r["Script Name"],
code:r["Script Code"],
type:r.Type,
price:Number(r.Price),
qty:Number(r.Quantity),
side:r["Buy/Sell"]

})

})

savePortfolio(portfolio)

alert("Excel imported")

}

reader.readAsArrayBuffer(file)

}
