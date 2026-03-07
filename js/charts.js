export function drawChart(values){

let ctx=document.getElementById("chart").getContext("2d")

new Chart(ctx,{
type:"line",
data:{
labels:["Start","Now"],
datasets:[{
label:"Portfolio",
data:values
}]
}
})

}
