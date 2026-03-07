export function drawAllocation(portfolio){

let sectors={}

portfolio.forEach(s=>{

let sector=s.sector || "Other"

sectors[sector]=(sectors[sector]||0)+(s.price*s.qty)

})

let ctx=document.getElementById("allocationChart")

new Chart(ctx,{

type:"pie",

data:{

labels:Object.keys(sectors),

datasets:[{

data:Object.values(sectors)

}]

}

})

}
