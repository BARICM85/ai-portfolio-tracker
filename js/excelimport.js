function handleExcelUpload(){

const file=document.getElementById("excelFile").files[0];

if(!file){

alert("Select file");

return;

}

const reader=new FileReader();

reader.onload=function(e){

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:"array"});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const json=XLSX.utils.sheet_to_json(sheet);

let portfolio=loadPortfolio();

json.forEach(row=>{

let script=row.script.toUpperCase();

let quantity=parseFloat(row.quantity);

let price=parseFloat(row.price);

let existing=portfolio.find(s=>s.script===script);

if(!existing){

portfolio.push({

script,
quantity,
averagePrice:price,
currentPrice:price,
symbol:script+".NS"

});

}

else{

existing.quantity+=quantity;

}

});

savePortfolio(portfolio);

showPortfolio();

};

reader.readAsArrayBuffer(file);

}
