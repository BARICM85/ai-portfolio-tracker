async function fetchNifty(){

try{

const res = await fetch(
"https://stock-price-proxy-2owf.onrender.com/price/%5ENSEI"
);

const data = await res.json();

return data.price;

}
catch{

return null;

}

}
