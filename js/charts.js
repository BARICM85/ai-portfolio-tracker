export function drawLine(id,data){

new Chart(document.getElementById(id),{

type:"line",

data:{

labels:data.map((_,i)=>i),

datasets:[{data:data}]

}

})

}
