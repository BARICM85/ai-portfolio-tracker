async function fetchLivePrice(symbol){

try{

const res = await fetch(
"https://stock-price-proxy-2owf.onrender.com/price/"+symbol
);

const data = await res.json();

return data.price;

}
catch{

return null;

}

}
