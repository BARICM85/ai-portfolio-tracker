function renderPortfolioChart(values){

const canvas = document.createElement("canvas");

canvas.id="portfolioChart";

document.getElementById("content").appendChild(canvas);

new Chart(canvas,{

type:"line",

data:{
labels:values.map((_,i)=>i+1),
datasets:[{
label:"Portfolio Value",
data:values
}]
}

});

}
