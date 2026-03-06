export function calculateAllocation(portfolio){

let allocation={};

portfolio.forEach(stock=>{

let value=stock.currentPrice*stock.quantity;

allocation[stock.script]=value;

});

return allocation;

}
