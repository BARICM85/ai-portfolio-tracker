function calculateCAGR(startValue, endValue, years){

if(startValue<=0) return 0;

return (Math.pow(endValue/startValue,1/years)-1)*100;

}

function calculateDrawdown(equityCurve){

let peak = equityCurve[0];

let maxDrawdown = 0;

for(let value of equityCurve){

if(value>peak) peak=value;

let dd=(peak-value)/peak;

if(dd>maxDrawdown) maxDrawdown=dd;

}

return maxDrawdown*100;

}
