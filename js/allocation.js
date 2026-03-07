export function showAllocationChart(data){

let ctx=document.getElementById("allocationChart").getContext("2d")

new Chart(ctx,{
type:"pie",
data:{
labels:Object.keys(data),
datasets:[{
data:Object.values(data)
}]
}
})

}
