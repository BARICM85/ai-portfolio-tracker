export function loadPortfolio(name="A"){

let data = localStorage.getItem("portfolio_"+name);

if(!data) return [];

return JSON.parse(data);

}

export function savePortfolio(data,name="A"){

localStorage.setItem("portfolio_"+name,JSON.stringify(data));

}
