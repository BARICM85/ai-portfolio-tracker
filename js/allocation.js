export function drawSectorChart(p){

let sectors={}

p.forEach(s=>{

let sec=s.sector||"Other"

if(!sectors[sec]) sectors[sec]=0

sectors[sec]+=s.qty*s.price

})

new Chart(document.getElementById("sectorChart"),{

type:"pie",

data:{

labels:Object.keys(sectors),

datasets:[{data:Object.values(sectors)}]

}

})

}
