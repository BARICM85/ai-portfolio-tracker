export async function fetchPrice(symbol){

try{

let url=`https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`

let res=await fetch(url)

let data=await res.json()

return data.chart.result[0].meta.regularMarketPrice

}
catch{

return null

}

}

export async function fetchNifty(){

try{

let url=`https://api.allorigins.win/raw?url=https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI`

let res=await fetch(url)

let data=await res.json()

return data.chart.result[0].meta.regularMarketPrice

}
catch{

return null

}

}
