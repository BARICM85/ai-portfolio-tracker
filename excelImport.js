import { loadPortfolio,savePortfolio } from "./storage.js"

document.getElementById("excelFile").addEventListener("change",async e=>{

let file=e.target.files[0]

let reader=new FileReader()

reader.onload=async function(evt){

let data=new Uint8Array(evt.target.result)
let wb=XLSX.read(data,{type:"array"})
let sheet=wb.Sheets[wb.SheetNames[0]]
let rows=XLSX.utils.sheet_to_json(sheet)

let p=await loadPortfolio()

rows.forEach(r=>{

p.push({
name:r.name,
code:r.code,
price:Number(r.price),
qty:Number(r.qty),
sector:r.sector||"Other"
})

})

await savePortfolio(p)
location.reload()

}

reader.readAsArrayBuffer(file)

})