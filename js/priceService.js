async function fetchLivePrice(symbol){

try{

const res = await fetch(
const url=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

const data = await res.json();

return data.price;

}
catch{

return null;

}

}
