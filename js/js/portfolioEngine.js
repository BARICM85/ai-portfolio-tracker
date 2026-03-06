export function calculateInvested(portfolio){

let total=0;

portfolio.forEach(s=>{

total+=s.price*s.quantity;

});

return total;

}

export function calculateCurrent(portfolio){

let total=0;

portfolio.forEach(s=>{

let price=s.livePrice || s.price;

total+=price*s.quantity;

});

return total;

}

export function calculateCAGR(start,end,years){

if(start===0) return 0;

return (Math.pow(end/start,1/years)-1)*100;

}
