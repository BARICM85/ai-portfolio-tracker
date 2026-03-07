export function drawHeatmap(p){

let h=document.getElementById("heatmap")

h.innerHTML=""

p.forEach(s=>{

let div=document.createElement("div")

div.className="heat"

div.innerText=s.name

div.style.background=s.change>0?"green":"red"

h.appendChild(div)

})

}
