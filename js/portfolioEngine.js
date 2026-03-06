export function calculatePortfolio(trades){

const map={};

trades.forEach(t=>{

if(!map[t.symbol]){

map[t.symbol]={
symbol:t.symbol,
name:t.name,
qty:0,
invested:0
};

}

if(t.side==="BUY"){

map[t.symbol].qty+=t.qty;
map[t.symbol].invested+=t.qty*t.price;

}else{

map[t.symbol].qty-=t.qty;

}

});

return Object.values(map);

}
