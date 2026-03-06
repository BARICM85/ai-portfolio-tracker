const API_KEY = "Q5XP2PU5953I7S6M";

export async function fetchPrice(symbol) {

try {

let clean = symbol.replace(".NS","").replace(".BO","");

const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${clean}&apikey=${API_KEY}`;

const res = await fetch(url);

const data = await res.json();

if(data["Global Quote"]){

return Number(data["Global Quote"]["05. price"]);

}

return null;

} catch(e){

console.log(e);
return null;

}

}
