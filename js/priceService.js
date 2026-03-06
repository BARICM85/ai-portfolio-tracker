export async function fetchPrice(symbol){

try{

const url=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

const res=await fetch(url);

const data=await res.json();

return data.quoteResponse.result[0].regularMarketPrice;

}
catch{

return null;

}

}

export async function fetchNifty(){

return await fetchPrice("^NSEI");

}
