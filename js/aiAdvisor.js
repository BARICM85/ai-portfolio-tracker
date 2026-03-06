export function analyzePortfolio(portfolio){

let warnings=[];

let total=0;

portfolio.forEach(s=>{
total+=s.currentPrice*s.quantity;
});

portfolio.forEach(stock=>{

let weight=(stock.currentPrice*stock.quantity)/total*100;

if(weight>30){

warnings.push(
stock.script+" overweight ("+weight.toFixed(1)+"%)"
);

}

});

return warnings;

}
