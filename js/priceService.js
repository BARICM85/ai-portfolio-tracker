export async function fetchPrice(symbol){

try{

let url=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

let res=await fetch(url);

let data=await res.json();

return data.quoteResponse.result[0].regularMarketPrice;

}

catch{

return null;

}

}

export async function fetchNifty(){

try{

let url=`https://query1.finance.yahoo.com/v7/finance/quote?symbols=%5ENSEI`;

let res=await fetch(url);

let data=await res.json();

return data.quoteResponse.result[0].regularMarketPrice;

}

catch{

return null;

}

}
