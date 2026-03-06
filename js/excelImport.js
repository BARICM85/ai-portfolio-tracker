import {loadPortfolio,savePortfolio} from "./storage.js";

export function showUpload(){

document.getElementById("content").innerHTML=`

<h2>Upload Excel</h2>

<input type="file" id="excelFile">

<button onclick="processExcel()">Upload</button>

`;

}

window.showUpload=showUpload;

window.processExcel=function(){

let file=document.getElementById("excelFile").files[0];

let reader=new FileReader();

reader.onload=function(e){

let data=new Uint8Array(e.target.result);

let workbook=XLSX.read(data,{type:'array'});

let sheet=workbook.Sheets[workbook.SheetNames[0]];

let rows=XLSX.utils.sheet_to_json(sheet);

let portfolio=loadPortfolio();

rows.forEach(r=>{

portfolio.push({

date:r.date,
name:r["script name"],
symbol:r["script code"],
type:r.type,
price:Number(r.price),
quantity:Number(r.quantity),
side:r["buy/sell"]

});

});

savePortfolio(portfolio);

alert("Excel Imported");

};

reader.readAsArrayBuffer(file);

}
