export const sectorMap = {

"TCS":"IT",
"INFY":"IT",
"HDFCBANK":"BANKING",
"ICICIBANK":"BANKING",
"SBIN":"BANKING",
"RELIANCE":"ENERGY",
"ONGC":"ENERGY",
"TATAMOTORS":"AUTO",
"MARUTI":"AUTO"

};

export function calculateSectorFlow(portfolio){

let sectorTotals={};

portfolio.forEach(stock=>{

let sector = sectorMap[stock.script] || "OTHER";

let value =
stock.quantity * stock.currentPrice;

if(!sectorTotals[sector]){

sectorTotals[sector]=0;

}

sectorTotals[sector]+=value;

});

return sectorTotals;

}
