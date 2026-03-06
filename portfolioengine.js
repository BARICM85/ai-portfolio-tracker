function calculateInvested(portfolio){

let total = 0;

for(let stock of portfolio){

total += stock.averagePrice * stock.quantity;

}

return total;

}

function calculateCurrent(portfolio){

let total = 0;

for(let stock of portfolio){

total += stock.currentPrice * stock.quantity;

}

return total;

}

function analysePortfolio(portfolio){

let analysis=[];

for(let stock of portfolio){

let invested = stock.averagePrice * stock.quantity;
let current = stock.currentPrice * stock.quantity;

let gain = current - invested;

let gainPercent = invested>0 ? gain/invested*100 : 0;

analysis.push({

name:stock.script,
gain,
gainPercent

});

}

return analysis;

}
