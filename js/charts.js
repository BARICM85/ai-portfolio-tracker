export function drawAllocationChart(data){

const ctx=document.getElementById("allocationChart");

const labels=data.map(s=>s.symbol);

const values=data.map(s=>s.invested);

new Chart(ctx,{
type:"pie",
data:{
labels:labels,
datasets:[{data:values}]
}
});

}
