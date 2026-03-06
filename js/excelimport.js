import {loadPortfolio,savePortfolio} from "./storage.js";

export function handleExcelUpload(activePortfolio){

const file=document.getElementById("excelFile").files[0];

if(!file) return alert("Select file");

const reader=new FileReader();

reader.onload=function(e){

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:"array"});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const json=XLSX.utils.sheet_to_json(sheet);

let portfolio=loadPortfolio(activePortfolio);

json.forEach(row=>{

const script=row.script?.toUpperCase();

const qty=parseFloat(row.quantity);

const price=parseFloat(row.price);

if(!script||!qty||!price) return;

portfolio.push({

script,

quantity:qty,

averagePrice:price,

currentPrice:price

});

});

savePortfolio(activePortfolio,portfolio);

alert("Upload successful");

};

reader.readAsArrayBuffer(file);

}
