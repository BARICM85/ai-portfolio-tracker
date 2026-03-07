import {loadPortfolio,savePortfolio} from "./storage.js"

document.getElementById("excelFile").addEventListener("change",e=>{

let file=e.target.files[0]

let reader=new FileReader()

reader.onload=function(evt){

let data=new Uint8Array(evt.target.result)

let workbook=XLSX.read(data,{type:"array"})

let sheet=workbook.Sheets[workbook.SheetNames[0]]

let json=XLSX.utils.sheet_to_json(sheet)

let p=loadPortfolio()

json.forEach(r=>{

p.push({

name:r.name,

code:r.code,

price:Number(r.price),

qty:Number(r.qty),

sector:r.sector||"Other"

})

})

savePortfolio(p)

location.reload()

}

reader.readAsArrayBuffer(file)

})
