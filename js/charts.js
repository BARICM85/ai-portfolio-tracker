export function drawNiftyChart(data){

let ctx=document.getElementById("niftyChart")

new Chart(ctx,{

type:"line",

data:{

labels:data.map((_,i)=>i),

datasets:[{

label:"Nifty",

data:data,

borderColor:"blue",

fill:false

}]

}

})

}
