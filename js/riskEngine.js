export function portfolioVolatility(returns){

let avg=returns.reduce((a,b)=>a+b)/returns.length;

let variance=returns.reduce((a,b)=>a+(b-avg)**2,0)/returns.length;

return Math.sqrt(variance);

}
