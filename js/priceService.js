const proxy = "https://corsproxy.io/?";

export async function fetchPrice(symbol){

try{

const url = proxy + encodeURIComponent(
`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`
);

const res = await fetch(url);

const data = await res.json();

return data.quoteResponse.result[0].regularMarketPrice;

}
catch(e){

console.log("Price fetch failed",e);
return null;

}

}


export async function fetchNifty(){

try{

const url = proxy + encodeURIComponent(
`https://query1.finance.yahoo.com/v7/finance/quote?symbols=%5ENSEI`
);

const res = await fetch(url);

const data = await res.json();

return data.quoteResponse.result[0].regularMarketPrice;

}
catch{

return null;

}

}
