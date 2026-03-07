export function drawHeatmap(portfolio){

let html=""

portfolio.forEach(s=>{

let color=s.change>=0?"green":"red"

html+=`<div style="background:${color};
padding:10px;
margin:5px;
color:white;
display:inline-block">

${s.name}<br>
${s.change.toFixed(2)}%

</div>`

})

document.getElementById("heatmap").innerHTML=html

}