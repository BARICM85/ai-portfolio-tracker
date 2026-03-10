export function drawPortfolioChart(p){

let values=p.map(s=>s.current*s.qty)
let labels=p.map(s=>s.name)

new Chart(document.getElementById("portfolioChart"),{

type:"bar",
data:{labels:labels,datasets:[{data:values}]}

})

}

export function drawSectorChart(p){

let sectors={}

p.forEach(s=>{

let sec=s.sector||"Other"
if(!sectors[sec]) sectors[sec]=0
sectors[sec]+=s.qty*s.price

})

new Chart(document.getElementById("sectorChart"),{

type:"pie",
data:{labels:Object.keys(sectors),datasets:[{data:Object.values(sectors)}]}

})

}
