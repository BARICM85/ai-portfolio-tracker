export function parseExcel(file){

return new Promise((resolve)=>{

const reader=new FileReader();

reader.onload=function(e){

const data=new Uint8Array(e.target.result);

const workbook=XLSX.read(data,{type:"array"});

const sheet=workbook.Sheets[workbook.SheetNames[0]];

const rows=XLSX.utils.sheet_to_json(sheet,{header:1});

rows.shift();

const trades=rows.map(r=>({

date:r[0],
name:r[1],
symbol:r[2],
exchange:r[3],
price:Number(r[4]),
qty:Number(r[5]),
side:r[6]

}));

resolve(trades);

};

reader.readAsArrayBuffer(file);

});

}
