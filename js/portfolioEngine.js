export function calculateInvested(portfolio){

let total=0;

portfolio.forEach(stock=>{
total += stock.quantity * stock.averagePrice;
});

return total;

}

export function calculateCurrent(portfolio){

let total=0;

portfolio.forEach(stock=>{
total += stock.quantity * (stock.currentPrice || stock.averagePrice);
});

return total;

}

export function calculateCAGR(start,end,years){

if(!start || years<=0) return 0;

return ((end/start)**(1/years)-1)*100;

}
