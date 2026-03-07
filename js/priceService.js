const proxy="https://api.allorigins.win/raw?url="

export async function fetchNifty(){

try{

let url=encodeURIComponent(
"https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI"
)

let res=await fetch(proxy+url)

let data=await res.json()

return data.chart.result[0].meta.regularMarketPrice

}catch(e){

console.log(e)

return "N/A"

}

}

export async function fetchPrice(symbol){

try{

let url=encodeURIComponent(
`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`
)

let res=await fetch(proxy+url)

let data=await res.json()

return data.quoteResponse.result[0].regularMarketPrice

}catch{

return null

}

}